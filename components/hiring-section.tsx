"use client";

import React, { useState } from "react";
import { DATA } from "@/data/resume";
import {
  Briefcase,
  CheckCircle2,
  Clock,
  ExternalLink,
  FileText,
  Mail,
  MapPin,
  Send,
  Sparkles,
  UserCheck,
  Zap,
} from "lucide-react";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

export function HiringSection() {
  const whatsappUrl = DATA.contact.whatsappUrl;

  return (
    <section id="hiring" className="py-12 sm:py-16 space-y-8">
      {/* Section Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
        <span className="text-xs font-mono font-bold text-sky-600 dark:text-cyan-400 tracking-wider">
          03 // HIRING & COLLABORATION PROFILE
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono mt-1">
          Hiring Information: For HR, Recruiters & Project Clients
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl font-sans">
          Whether you are an HR leader filling a full-time engineering role or a founder/client seeking a dedicated systems architect for a contract build, here is the operational blueprint.
        </p>
      </div>

      {/* Dual Pathways Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: For HR & Talent Acquisition */}
        <div className="p-6 sm:p-7 rounded-2xl bg-white/85 dark:bg-[#0B101D] border border-slate-200/90 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm hover:shadow-lg dark:hover:shadow-xl transition-all flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800/50 text-sky-700 dark:text-sky-300 font-semibold">
                <UserCheck className="w-3.5 h-3.5" />
                <span>For Recruiters & Hiring Managers</span>
              </span>
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                Available Immediately
              </span>
            </div>

            <div>
              <h3 className="text-lg font-bold font-mono text-slate-900 dark:text-white">
                Full-Time & Long-Term Contract Roles
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                Proven full-stack contributor and systems engineer capable of taking zero-to-one product ownership with production rigor.
              </p>
            </div>

            {/* Target Titles & Key Credentials */}
            <div className="space-y-2 pt-1 font-sans text-xs">
              <div className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Target Roles:</strong> Senior Full-Stack Engineer, Systems Engineer, Founding Engineer, AI Platform Developer.
                </span>
              </div>
              <div className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Work Format:</strong> Remote (Worldwide), Hybrid / On-Site (Lahore, Pakistan), Open to Relocation.
                </span>
              </div>
              <div className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Production Record:</strong> 4+ years commercial experience, 10 flagship platforms, 40 public GitHub repositories.
                </span>
              </div>
              <div className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Core Stack:</strong> Next.js 15, React 19, TypeScript, Python, PostgreSQL, Linux daemons, Docker, Nginx.
                </span>
              </div>
            </div>
          </div>

          {/* Action CTAs for HR */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2.5 font-mono text-xs">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-md shadow-emerald-950/20 transition-all hover:scale-[1.01]"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Connect on WhatsApp (+92 326 6900001)</span>
            </a>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={`mailto:${DATA.contact.email}?subject=Job%20Opportunity%20-%20Hanzla%20Ahmad&body=Hi%20Hanzla,%0A%0AWe%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20engineering%20role%20with%20our%20team.`}
                className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-sky-600 dark:text-cyan-400" />
                <span>Email Job Brief</span>
              </a>

              <a
                href={DATA.contact.social.LinkedIn.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-sky-600 dark:text-cyan-400" />
                <span>LinkedIn InMail</span>
              </a>
            </div>
          </div>
        </div>

        {/* Card 2: For Founders, CTOs & Project Clients */}
        <div className="p-6 sm:p-7 rounded-2xl bg-white/85 dark:bg-[#0B101D] border border-slate-200/90 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm hover:shadow-lg dark:hover:shadow-xl transition-all flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/50 text-cyan-800 dark:text-cyan-300 font-semibold">
                <Zap className="w-3.5 h-3.5" />
                <span>For Founders & Project Clients</span>
              </span>
              <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold">
                Contract Engagements
              </span>
            </div>

            <div>
              <h3 className="text-lg font-bold font-mono text-slate-900 dark:text-white">
                Bespoke Systems, Platforms & AI Automation
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                End-to-end technical execution for companies requiring bulletproof software platforms, background daemons, or autonomous AI workflows.
              </p>
            </div>

            {/* Engagement Scopes */}
            <div className="space-y-2 pt-1 font-sans text-xs">
              <div className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Production Web Apps & Portals:</strong> Next.js 15 App Router, React 19, Server Actions, modern database schemas.
                </span>
              </div>
              <div className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Headless Daemons & Control Planes:</strong> 24/7 background process supervisors, Unix socket IPC, WhatsApp bots.
                </span>
              </div>
              <div className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Generative AI & Agentic Tooling:</strong> Multimodal Gemini 2.0 API, structured RAG pipelines, automated discovery.
                </span>
              </div>
              <div className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Turnaround & Quality:</strong> Rapid MVP delivery, clean git version control, Docker containerization, post-launch monitoring.
                </span>
              </div>
            </div>
          </div>

          {/* Action CTAs for Project Clients */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2.5 font-mono text-xs">
            <a
              href={`https://wa.me/923266900001?text=Hi%20Hanzla,%20I%20have%20a%20project%20in%20mind%20and%20would%20like%20to%20discuss%20scope,%20timeline,%20and%20pricing.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 dark:bg-cyan-600 dark:hover:bg-cyan-500 text-white font-bold shadow-md shadow-sky-600/20 dark:shadow-cyan-950/30 transition-all hover:scale-[1.01]"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Discuss Project on WhatsApp</span>
            </a>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={`mailto:${DATA.contact.email}?subject=Project%20Inquiry%20-%20Hanzla%20Ahmad&body=Hi%20Hanzla,%0A%0AWe%20are%20looking%20to%20build%20a%20project%20and%20would%20like%20to%20discuss%20specifications%20and%20turnaround.`}
                className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-sky-600 dark:text-cyan-400" />
                <span>Email Project Scope</span>
              </a>

              <a
                href="#projects"
                className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-sky-600 dark:text-cyan-400" />
                <span>Review Systems</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
