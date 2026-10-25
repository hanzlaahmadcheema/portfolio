"use client";

import React from "react";
import { DATA } from "@/data/resume";
import { Check, Code, Terminal, Cloud, Database, Bot, ShoppingCart } from "lucide-react";

export function CapabilitiesSection() {
  const getDomainIcon = (index: string) => {
    switch (index) {
      case "01":
        return <Code className="w-4 h-4 text-sky-600 dark:text-cyan-400" />;
      case "02":
        return <Terminal className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case "03":
        return <Cloud className="w-4 h-4 text-sky-600 dark:text-sky-400" />;
      case "04":
        return <Database className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
      case "05":
        return <Bot className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
      case "06":
        return <ShoppingCart className="w-4 h-4 text-rose-600 dark:text-rose-400" />;
      default:
        return <Code className="w-4 h-4 text-sky-600 dark:text-cyan-400" />;
    }
  };

  return (
    <section id="capabilities" className="py-12 sm:py-16 space-y-8">
      {/* Section Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
        <span className="text-xs font-mono font-bold text-sky-600 dark:text-cyan-400 tracking-wider">
          01 // ARCHITECTURAL DOMAINS
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono mt-1">
          Technical Capabilities & Systems Engineering
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl font-sans">
          End-to-end disciplines covering low-level Linux daemon supervision, cloud infrastructure, containerized deployments, relational data modeling, and autonomous AI pipelines.
        </p>
      </div>

      {/* Grid of Capabilities (6 Domains) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {DATA.capabilities.map((cap) => (
          <div
            key={cap.index}
            className="p-6 rounded-xl bg-white/80 dark:bg-[#0B101D] border border-slate-200/90 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm hover:shadow-lg dark:hover:shadow-xl transition-all space-y-4 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500">
                  {cap.index} //
                </span>
                <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  {getDomainIcon(cap.index)}
                </div>
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white font-mono mt-2">
                {cap.title}
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                {cap.description}
              </p>

              <div className="mt-4 space-y-2">
                {cap.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 font-sans">
                    <Check className="w-3.5 h-3.5 text-sky-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200 dark:border-slate-800/60">
              {cap.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800/90 text-slate-600 dark:text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
