"use client";

import React from "react";
import { DATA } from "@/data/resume";

export function Footer() {
  return (
    <footer className="pt-8 pb-28 border-t border-slate-200 dark:border-slate-900 text-center text-xs font-mono text-slate-500 space-y-2">
      <div className="flex items-center justify-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
        <span className="text-slate-600 dark:text-slate-400">ALL SYSTEMS OPERATIONAL</span>
      </div>
      <p className="text-slate-600 dark:text-slate-400">
        © 2026 {DATA.name} ({DATA.alias}). Engineered with Next.js 15, React 19, TypeScript & Tailwind CSS.
      </p>
      <p className="text-[11px] text-slate-400 dark:text-slate-600">
        Deterministic Control Planes • Distributed Ledgers • Generative AI Pipelines
      </p>
    </footer>
  );
}
