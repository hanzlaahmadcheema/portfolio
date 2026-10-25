"use client";

import React, { useState } from "react";
import { ExternalLink, ChevronDown, Cpu, Layers, ShieldCheck } from "lucide-react";
import { Github } from "@/components/icons";
import { Project } from "@/data/resume";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [showArch, setShowArch] = useState(false);

  return (
    <div className="group relative rounded-xl bg-white/80 dark:bg-[#0B101D] border border-slate-200/90 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-cyan-950/20 transition-all overflow-hidden flex flex-col justify-between">
      <div className="p-5 sm:p-6 space-y-4">
        {/* Top bar: Title & Date */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-600 dark:bg-cyan-400 shrink-0" />
              <h3 className="font-mono text-base font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
            </div>
            {project.metrics && (
              <div className="mt-1.5 inline-flex flex-wrap items-center gap-1.5 px-2.5 py-1 rounded text-[10px] sm:text-[11px] font-mono bg-sky-50 dark:bg-cyan-950/40 border border-sky-200 dark:border-cyan-800/50 text-sky-800 dark:text-cyan-300 leading-normal">
                <ShieldCheck className="w-3 h-3 text-sky-600 dark:text-cyan-400 shrink-0" />
                <span>{project.metrics}</span>
              </div>
            )}
          </div>
          <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 shrink-0 mt-0.5">
            {project.dates}
          </span>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[10px] sm:text-[11px] font-mono rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Architecture & Tradeoffs Drawer */}
        {project.architecture && (
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800/60">
            <button
              onClick={() => setShowArch(!showArch)}
              className="flex items-center justify-between w-full text-left py-1 text-xs font-mono text-slate-600 hover:text-sky-600 dark:text-slate-400 dark:hover:text-cyan-300 transition-colors"
            >
              <div className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-sky-600 dark:text-cyan-400" />
                <span>Architecture & Design Decisions</span>
              </div>
              <ChevronDown
                className={`w-3.5 h-3.5 text-slate-400 dark:text-slate-500 transition-transform duration-200 ${
                  showArch ? "rotate-180 text-sky-600 dark:text-cyan-400" : ""
                }`}
              />
            </button>

            {showArch && (
              <div className="mt-2.5 p-3 rounded-lg bg-slate-50 dark:bg-[#070A12] border border-slate-200 dark:border-slate-800/80 space-y-2.5 text-xs font-mono text-slate-700 dark:text-slate-300 animate-in fade-in duration-150">
                <div>
                  <span className="text-sky-700 dark:text-cyan-400 font-bold block text-[11px] uppercase tracking-wider">
                    Core Architecture:
                  </span>
                  <p className="mt-0.5 text-slate-600 dark:text-slate-300 font-sans text-xs">
                    {project.architecture.summary}
                  </p>
                </div>

                <div>
                  <span className="text-amber-700 dark:text-amber-400 font-bold block text-[11px] uppercase tracking-wider">
                    Engineering Tradeoffs:
                  </span>
                  <p className="mt-0.5 text-slate-600 dark:text-slate-400 font-sans text-xs">
                    {project.architecture.tradeoffs}
                  </p>
                </div>

                <div>
                  <span className="text-indigo-700 dark:text-indigo-400 font-bold block text-[11px] uppercase tracking-wider">
                    Stack Justification:
                  </span>
                  <p className="mt-0.5 text-slate-600 dark:text-slate-400 font-sans text-xs">
                    {project.architecture.stackChoice}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Action Links Bar */}
      <div className="px-5 py-3 bg-slate-50/80 dark:bg-[#080C16] border-t border-slate-200 dark:border-slate-800/80 flex items-center gap-2">
        {project.links.map((link) => {
          const isSource = link.type.toLowerCase().includes("source");
          return (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded transition-colors ${
                isSource
                  ? "text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 dark:text-slate-400 dark:hover:text-white dark:bg-slate-900/60 dark:hover:bg-slate-800 dark:border-slate-800"
                  : "text-white bg-sky-600 hover:bg-sky-500 dark:bg-cyan-600 dark:hover:bg-cyan-500 font-medium shadow-sm"
              }`}
            >
              {isSource ? <Github className="w-3 h-3" /> : <ExternalLink className="w-3 h-3" />}
              <span>{link.type}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
