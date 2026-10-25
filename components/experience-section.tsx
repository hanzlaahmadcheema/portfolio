"use client";

import React from "react";
import { DATA } from "@/data/resume";
import { Briefcase, Building2, MapPin } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-12 sm:py-16 space-y-8">
      {/* Section Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
        <span className="text-xs font-mono font-bold text-sky-600 dark:text-cyan-400 tracking-wider">
          04 // CAREER & INDUSTRY TRACK RECORD
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono mt-1">
          Work Experience
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-xl font-sans">
          Proven history delivering production web infrastructure, medical billing portal administration, and enterprise POS integrations.
        </p>
      </div>

      {/* Experience List */}
      <div className="space-y-6">
        {DATA.work.map((role) => (
          <div
            key={role.company}
            className="p-6 rounded-xl bg-white/80 dark:bg-[#0B101D] border border-slate-200/90 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm hover:shadow-lg dark:hover:shadow-xl transition-all space-y-3"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-mono flex items-center gap-2">
                  <span>{role.title}</span>
                  <span className="text-slate-400 dark:text-slate-500 font-normal">@</span>
                  <span className="text-sky-600 dark:text-cyan-400">{role.company}</span>
                </h3>
                <div className="flex items-center gap-3 text-xs font-mono text-slate-500 mt-0.5">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {role.location}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-center">
                <span className="px-2.5 py-1 text-xs font-mono rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                  {role.start} — {role.end}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              {role.description}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {role.badges.map((badge) => (
                <span
                  key={badge}
                  className="px-2 py-0.5 text-[10px] font-mono rounded bg-sky-50 dark:bg-cyan-950/40 border border-sky-200 dark:border-cyan-800/40 text-sky-800 dark:text-cyan-300"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
