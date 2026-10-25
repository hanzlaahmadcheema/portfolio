"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ProjectCard } from "./project-card";
import { DATA } from "@/data/resume";
import { ArrowRight, Archive, Sparkles, Layers } from "lucide-react";

export function ProjectsSection() {
  const [filter, setFilter] = useState<"all" | "flagship" | "ai" | "daemon">("all");

  const filteredProjects = DATA.projects.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  const counts = {
    all: DATA.projects.length,
    flagship: DATA.projects.filter((p) => p.category === "flagship").length,
    ai: DATA.projects.filter((p) => p.category === "ai").length,
    daemon: DATA.projects.filter((p) => p.category === "daemon").length,
  };

  return (
    <section id="projects" className="py-12 sm:py-16 space-y-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div>
          <span className="text-xs font-mono font-bold text-sky-600 dark:text-cyan-400 tracking-wider">
            02 // CURATED SYSTEMS & PRODUCTION WORK
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono mt-1">
            Featured Systems & Portals ({DATA.projects.length})
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl font-sans">
            Flagship operational platforms, headless background daemons, and autonomous AI engines running in production environments.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 self-start md:self-end">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
              filter === "all"
                ? "bg-sky-600 text-white dark:bg-cyan-500 dark:text-slate-950 font-bold shadow-sm"
                : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-800"
            }`}
          >
            All Featured ({counts.all})
          </button>
          <button
            onClick={() => setFilter("flagship")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
              filter === "flagship"
                ? "bg-sky-600 text-white dark:bg-cyan-500 dark:text-slate-950 font-bold shadow-sm"
                : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-800"
            }`}
          >
            Flagships ({counts.flagship})
          </button>
          <button
            onClick={() => setFilter("ai")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
              filter === "ai"
                ? "bg-sky-600 text-white dark:bg-cyan-500 dark:text-slate-950 font-bold shadow-sm"
                : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-800"
            }`}
          >
            AI Systems ({counts.ai})
          </button>
          <button
            onClick={() => setFilter("daemon")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
              filter === "daemon"
                ? "bg-sky-600 text-white dark:bg-cyan-500 dark:text-slate-950 font-bold shadow-sm"
                : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-800"
            }`}
          >
            Linux Daemons ({counts.daemon})
          </button>
        </div>
      </div>

      {/* Grid of Featured Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {/* Prominent "View All Projects Archive" Action Card */}
      <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-sky-50 via-indigo-50/60 to-slate-50 dark:from-[#0C1222] dark:via-[#0E1528] dark:to-[#0A0F1D] border border-sky-200/80 dark:border-cyan-900/40 hover:border-sky-400/60 dark:hover:border-cyan-500/50 shadow-md dark:shadow-xl transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-6 group">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-sky-100 dark:bg-cyan-950/60 border border-sky-200 dark:border-cyan-800/60 text-sky-700 dark:text-cyan-400">
              <Archive className="w-4 h-4" />
            </span>
            <span className="text-xs font-mono font-bold text-sky-700 dark:text-cyan-400 uppercase tracking-wider">
              Complete Engineering Archive
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold font-mono text-slate-900 dark:text-white">
            Looking for all public tools, daemons, and microservices?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl font-sans">
            Explore 40 verified public repositories with instant search, programming language filtering, direct GitHub source links, and production deployment URLs.
          </p>
        </div>

        <Link
          href="/projects"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950 font-mono font-bold text-xs shadow-md shadow-sky-600/20 dark:shadow-cyan-950/30 transition-all shrink-0 group-hover:translate-x-0.5"
        >
          <span>Browse All 40 Projects</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
