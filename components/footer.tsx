"use client";

import React from "react";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { FileText, Download, Archive, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="pt-8 pb-28 border-t border-slate-200 dark:border-slate-900 text-center text-xs font-mono text-slate-500 space-y-3">
      <div className="flex items-center justify-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
        <span className="text-slate-600 dark:text-slate-400">ALL SYSTEMS OPERATIONAL</span>
      </div>

      {/* Quick Navigation Links */}
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs">
        <Link
          href="/resume"
          className="text-sky-600 dark:text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Resume (ATS / Online)</span>
        </Link>
        <span className="text-slate-300 dark:text-slate-800">•</span>
        <a
          href="/resume.pdf"
          download="Hanzla_Ahmad_Resume_ATS.pdf"
          className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-cyan-400 flex items-center gap-1"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Download PDF</span>
        </a>
        <span className="text-slate-300 dark:text-slate-800">•</span>
        <Link
          href="/projects"
          className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-cyan-400 flex items-center gap-1"
        >
          <Archive className="w-3.5 h-3.5" />
          <span>30+ Repos Archive</span>
        </Link>
      </div>

      <p className="text-slate-600 dark:text-slate-400">
        © 2026 {DATA.name} ({DATA.alias}). Engineered with Next.js 15, React 19, TypeScript &amp; Tailwind CSS.
      </p>
      <p className="text-[11px] text-slate-400 dark:text-slate-600">
        Deterministic Control Planes • Distributed Ledgers • Generative AI Pipelines
      </p>
    </footer>
  );
}
