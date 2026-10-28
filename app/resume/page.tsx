"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Download,
  FileText,
  Printer,
  Copy,
  Check,
  ExternalLink,
  Eye,
  FileDown,
  Mail,
  MapPin,
  Phone,
  Globe,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import { DATA } from "@/data/resume";

const RAW_RESUME_TEXT = `# HANZLA AHMAD
Full-Stack & Systems Software Engineer
Lahore, Pakistan | +92 326 6900001 | hello@hanzlaahmad.com
Portfolio: https://hanzlaahmad.com | LinkedIn: https://linkedin.com/in/hanzlaahmadcheema | GitHub: https://github.com/hanzlaahmadcheema

================================================================================
PROFESSIONAL SUMMARY
================================================================================
Results-driven Full-Stack & Systems Software Engineer with 4+ years of hands-on experience building production web platforms, deterministic Linux background daemons, and Generative AI agent systems. Proven expertise engineering type-safe architectures with Next.js 15, React 19, and TypeScript, building low-level Unix services with WebSockets and IPC, and deploying tamper-resistant database platforms with PostgreSQL and SQLite. Experienced in managing the entire software lifecycle from requirements synthesis to containerized Linux VPS deployment.

================================================================================
TECHNICAL SKILLS
================================================================================
- Languages: TypeScript, JavaScript (ES6+), Python, C++, Java, Dart, SQL, Bash / Shell Scripting
- Frontend & Web Platforms: Next.js 15 (App Router, Server Actions, RSC), React 19, Tailwind CSS, HTML5, CSS3, Vite, Responsive Design
- Backend & APIs: Node.js, Express.js, RESTful APIs, WebSockets, Prisma ORM, Microservices, Unix Domain Socket IPC
- Databases & Storage: PostgreSQL, SQLite (WAL mode), MongoDB, Redis, Supabase, Cloud Firestore
- AI & Agentic Systems: Google Gemini API, Claude API, LLM Function Calling, RAG (Retrieval-Augmented Generation), Prompt Engineering
- DevOps & Infrastructure: Linux (Ubuntu/Debian), systemd Daemons, Docker, Nginx (Reverse Proxy), CI/CD (GitHub Actions), Git, Vercel

================================================================================
PROFESSIONAL EXPERIENCE
================================================================================
HA Entertainment | Founder & Lead Systems Engineer
Jun 2020 – Present | Lahore, Pakistan
- Architected and deployed full-stack digital media platforms and operational infrastructure serving active client workloads with sub-second response times.
- Designed high-performance web frontends and microservices utilizing Next.js, React, Node.js, and TypeScript with strict type safety.
- Provisioned and managed Linux VPS servers, configuring automated cron backups, Nginx reverse proxies, SSL/TLS certificates, and systemd services with 99.9% uptime.
- Directed continuous delivery (CI/CD) pipelines across Vercel and bare-metal environments, ensuring zero-downtime production deployments.

MedBills MBS | Information Technology Administrator
Nov 2025 – Oct 2026 | Lahore, Pakistan
- Administered core enterprise IT infrastructure, network security, and portal workflows supporting medical billing operations.
- Enforced role-based access control (RBAC), end-to-end data encryption, and network firewall policies compliant with industry privacy standards.
- Automated weekly database backups, system health monitoring scripts, and credential rotation protocols, resolving 100% of reported infrastructure tickets within SLA.

Ajwa Mart Sweets & Bakers | IT Systems & POS Specialist
Jul 2021 – Present | Chichawatni, Pakistan
- Engineered Point-of-Sale (POS) synchronization and multi-branch retail inventory tracking across 140+ retail stock items.
- Developed custom Shopify Liquid modules, optimizing checkout flow, cart performance, and responsive product catalog browsing.
- Automated dual-shift end-of-day sales reconciliation workflows, eliminating discrepancies between register cash counts and inventory balances.

IT Beam | MERN Stack Developer Intern
Jul 2026 – Sep 2026 | Lahore, Pakistan
- Developed core modules of an enterprise Learning Management System (LMS) using MongoDB, Express.js, React.js, and Node.js.
- Implemented role-based dashboards (Admin, Instructor, Student), course curriculum management, and automated quiz evaluation engines.
- Built and documented RESTful API endpoints with JWT authentication and input validation, improving API test coverage.

DevelopersHub Corporation | Software Engineering Intern
Mar 2025 – May 2025 | Remote
- Collaborated in an agile scrum team to deliver feature enhancements and bug fixes for responsive web applications.
- Participated in weekly code reviews, Git feature-branch workflows, and automated regression testing.

================================================================================
FEATURED ENGINEERING PROJECTS
================================================================================
WA-Agent — Autonomous AI Agent Control Plane & Terminal Supervisor
TypeScript, Node.js, Baileys WebSockets, Unix Domain Sockets, systemd, Linux | https://github.com/hanzlaahmadcheema/WA-Agent
- Engineered a deterministic remote control plane allowing terminal-based CLI agents (e.g., Claude Code) to be supervised via WhatsApp.
- Architected dual-process daemon architecture with token-authenticated Unix Domain Socket IPC for secure command dispatching.
- Implemented real-time bidirectional streaming of terminal stdout/stderr chunks with auto-reconnection and session persistence.

ReqForge — AI Requirements Engineering & PRD Platform
Next.js, React, TypeScript, Google Gemini 2.0 API, Tailwind CSS | https://github.com/hanzlaahmadcheema/ReqForge
- Developed an AI Studio application that transforms ambiguous product briefs into structured, IEEE 830-compliant Software Requirement Specifications (SRS/PRD).
- Designed multi-stage prompt orchestration pipelines with strict JSON schema validation and export capabilities (Markdown, PDF).

Franchise Expense Reconciliation System
Node.js, Express.js, PostgreSQL, Prisma ORM, Tailwind CSS | https://github.com/hanzlaahmadcheema/franchise-expense-system
- Built an enterprise operational accounting system deployed in production at Jazz Franchise 7301 for daily petty cash and expense reconciliation.
- Structured tamper-resistant audit logs and shift closure verification, ensuring 100% financial accuracy across physical cash handoffs.

Pepsi Stock Balance Portal
Next.js 15, React, TypeScript, Prisma ORM, SQLite / PostgreSQL | https://github.com/hanzlaahmadcheema/pepsi-stock-balance
- Built a commercial beverage distribution and inventory reconciliation platform tracking delivery truck stock vs empty crate returns.
- Implemented real-time batch reconciliation algorithms preventing inventory variance across warehouse dispatch cycles.

whatsapp-widget-daemon
Node.js, Baileys, Unix Domain Sockets, Linux IPC | https://github.com/hanzlaahmadcheema/whatsapp-widget-daemon
- Developed a low-overhead headless background daemon over Baileys WebSockets providing desktop widget frameworks with live WhatsApp event data over local Unix sockets.

================================================================================
EDUCATION
================================================================================
Bachelor of Science in Computer Science (BSCS)
Riphah International University, Lahore, Pakistan | 2022 – 2026
Relevant Coursework: Data Structures & Algorithms, Operating Systems, Database Systems, Computer Networks, Software Engineering, Object-Oriented Programming, Theory of Automata.

================================================================================
VERIFIED CERTIFICATIONS & CREDENTIALS
================================================================================
- Google Cloud Skills Boost:
  * Responsible AI: Applying AI Principles with Google Cloud (Oct 2026)
  * Introduction to Large Language Models (Oct 2026)
  * Introduction to Generative AI (Oct 2026)
- Cisco Networking Academy:
  * Python Essentials 1 (Oct 2026)
  * Linux Unhatched (Oct 2026)
  * Introduction to Cybersecurity (Oct 2026)
  * Networking Basics (Oct 2026)
  * Computer Hardware Basics (Oct 2026)
  * Operating Systems Basics (May 2026)
  * JavaScript Essentials 1 & 2 (Jan & Feb 2026)
  * C++ Essentials 2 (May 2025)
  * Introduction to IoT (2024)
- Language Proficiency:
  * fondi Inc: CEFR B2 Independent English Proficiency Certification (Sep 2024)`;

export default function ResumePage() {
  const [viewMode, setViewMode] = useState<"document" | "pdf">("document");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(RAW_RESUME_TEXT);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="relative min-h-screen bg-slate-50 dark:bg-[#070A11] bg-grid-pattern selection:bg-cyan-500/20 selection:text-cyan-900 dark:selection:text-cyan-300 transition-colors duration-200">
      {/* Top ambient glow */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-sky-200/30 dark:from-cyan-950/20 via-transparent to-transparent pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 space-y-6">
        {/* Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 print:hidden">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-sky-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>cd /portfolio (Home)</span>
          </Link>

          {/* Verification Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 text-emerald-700 dark:text-emerald-400 font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>100% ATS-Verified • Workday / Taleo / Greenhouse Compliant</span>
          </div>
        </div>

        {/* Action Controls & Format Switcher */}
        <header className="p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-[#0B101D] border border-slate-200/90 dark:border-slate-800/80 shadow-sm space-y-4 print:hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold font-mono text-slate-900 dark:text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-sky-600 dark:text-cyan-400" />
                <span>Hanzla Ahmad — Official ATS Resume</span>
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                Full-Stack & Systems Software Engineer • Updated October 2026
              </p>
            </div>

            {/* View Mode Toggle */}
            <div className="inline-flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 self-start sm:self-center">
              <button
                onClick={() => setViewMode("document")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  viewMode === "document"
                    ? "bg-white dark:bg-slate-800 text-sky-600 dark:text-cyan-400 shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Document View</span>
              </button>
              <button
                onClick={() => setViewMode("pdf")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  viewMode === "pdf"
                    ? "bg-white dark:bg-slate-800 text-sky-600 dark:text-cyan-400 shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>PDF Embed</span>
              </button>
            </div>
          </div>

          {/* Primary Download & Utility Action Buttons */}
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center gap-2.5 sm:gap-3">
            {/* Download PDF (Primary) */}
            <a
              href="/resume.pdf"
              download="Hanzla_Ahmad_Resume_ATS.pdf"
              className="flex items-center justify-center gap-2 px-4 py-2 text-xs font-mono font-bold rounded-lg bg-sky-600 hover:bg-sky-500 dark:bg-cyan-600 dark:hover:bg-cyan-500 text-white shadow-md shadow-sky-600/20 dark:shadow-cyan-950/30 transition-all hover:scale-[1.02] shrink-0"
              title="Download official ATS PDF version (2 pages, tagged PDF v1.4)"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
              <span className="text-[10px] opacity-80 font-normal">(ATS Clean)</span>
            </a>

            {/* Download DOCX (Word) */}
            <a
              href="/resume.docx"
              download="Hanzla_Ahmad_Resume_ATS.docx"
              className="flex items-center justify-center gap-2 px-3.5 py-2 text-xs font-mono font-medium rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 transition-colors shrink-0"
              title="Download Microsoft Word .DOCX version for enterprise portals"
            >
              <FileText className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Download Word (.docx)</span>
            </a>

            {/* Open Raw PDF in New Tab */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-mono font-medium rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors shrink-0"
              title="Open full PDF directly in browser viewer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open in Tab</span>
            </a>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-mono font-medium rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors shrink-0"
              title="Print resume or save as PDF via browser print dialogue"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            {/* Copy Markdown / Plain Text */}
            <button
              onClick={handleCopy}
              className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-mono font-medium rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors shrink-0 sm:ml-auto"
              title="Copy clean ATS text to clipboard for quick form pasting"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Text</span>
                </>
              )}
            </button>
          </div>
        </header>

        {/* View Mode 1: Interactive Document View */}
        {viewMode === "document" && (
          <article className="p-6 sm:p-10 rounded-2xl bg-white dark:bg-[#0B101D] border border-slate-200/90 dark:border-slate-800/80 shadow-md font-sans text-slate-800 dark:text-slate-200 space-y-7 print:border-none print:shadow-none print:p-0 print:bg-white print:text-black">
            {/* Header / Contact Info */}
            <section className="text-center pb-5 border-b border-slate-200 dark:border-slate-800 print:border-black print:pb-3">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-mono text-slate-900 dark:text-white print:text-black uppercase">
                {DATA.name}
              </h1>
              <p className="mt-1 text-sm sm:text-base font-bold font-mono text-sky-600 dark:text-cyan-400 print:text-black">
                {DATA.headline}
              </p>

              <div className="mt-2.5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-600 dark:text-slate-400 font-mono print:text-black">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 print:hidden" />
                  <span>{DATA.location}</span>
                </span>
                <span className="text-slate-300 dark:text-slate-700 print:text-black">•</span>
                <a
                  href={`tel:${DATA.contact.tel.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-1 hover:text-sky-600 dark:hover:text-cyan-400"
                >
                  <Phone className="w-3.5 h-3.5 print:hidden" />
                  <span>{DATA.contact.tel}</span>
                </a>
                <span className="text-slate-300 dark:text-slate-700 print:text-black">•</span>
                <a
                  href={`mailto:${DATA.contact.email}`}
                  className="inline-flex items-center gap-1 hover:text-sky-600 dark:hover:text-cyan-400"
                >
                  <Mail className="w-3.5 h-3.5 print:hidden" />
                  <span>{DATA.contact.email}</span>
                </a>
              </div>

              <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs font-mono text-sky-600 dark:text-cyan-400 print:text-black">
                <a
                  href="https://hanzlaahmad.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  hanzlaahmad.com
                </a>
                <span className="text-slate-300 dark:text-slate-700 print:text-black">•</span>
                <a
                  href={DATA.contact.social.LinkedIn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  linkedin.com/in/hanzlaahmadcheema
                </a>
                <span className="text-slate-300 dark:text-slate-700 print:text-black">•</span>
                <a
                  href={DATA.contact.social.GitHub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  github.com/hanzlaahmadcheema
                </a>
              </div>
            </section>

            {/* Professional Summary */}
            <section className="space-y-2">
              <h2 className="text-xs sm:text-sm font-bold font-mono tracking-wider text-slate-900 dark:text-white uppercase border-b border-slate-200 dark:border-slate-800 pb-1 print:border-black print:text-black">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed print:text-black">
                Results-driven Full-Stack &amp; Systems Software Engineer with 4+ years of hands-on experience building production web platforms, deterministic Linux background daemons, and Generative AI agent systems. Proven expertise engineering type-safe architectures with Next.js 15, React 19, and TypeScript, building low-level Unix services with WebSockets and IPC, and deploying tamper-resistant database platforms with PostgreSQL and SQLite. Experienced in managing the entire software lifecycle from requirements synthesis to containerized Linux VPS deployment.
              </p>
            </section>

            {/* Technical Skills */}
            <section className="space-y-2.5">
              <h2 className="text-xs sm:text-sm font-bold font-mono tracking-wider text-slate-900 dark:text-white uppercase border-b border-slate-200 dark:border-slate-800 pb-1 print:border-black print:text-black">
                TECHNICAL SKILLS
              </h2>
              <ul className="text-xs sm:text-sm space-y-1.5 text-slate-700 dark:text-slate-300 print:text-black">
                <li>
                  <strong className="font-semibold text-slate-900 dark:text-slate-100 print:text-black">Languages:</strong>{" "}
                  TypeScript, JavaScript (ES6+), Python, C++, Java, Dart, SQL, Bash / Shell Scripting
                </li>
                <li>
                  <strong className="font-semibold text-slate-900 dark:text-slate-100 print:text-black">Frontend &amp; Web Platforms:</strong>{" "}
                  Next.js 15 (App Router, Server Actions, RSC), React 19, Tailwind CSS, HTML5, CSS3, Vite, Responsive Design
                </li>
                <li>
                  <strong className="font-semibold text-slate-900 dark:text-slate-100 print:text-black">Backend &amp; APIs:</strong>{" "}
                  Node.js, Express.js, RESTful APIs, WebSockets, Prisma ORM, Microservices, Unix Domain Socket IPC
                </li>
                <li>
                  <strong className="font-semibold text-slate-900 dark:text-slate-100 print:text-black">Databases &amp; Storage:</strong>{" "}
                  PostgreSQL, SQLite (WAL mode), MongoDB, Redis, Supabase, Cloud Firestore
                </li>
                <li>
                  <strong className="font-semibold text-slate-900 dark:text-slate-100 print:text-black">AI &amp; Agentic Systems:</strong>{" "}
                  Google Gemini API, Claude API, LLM Function Calling, RAG (Retrieval-Augmented Generation), Prompt Engineering
                </li>
                <li>
                  <strong className="font-semibold text-slate-900 dark:text-slate-100 print:text-black">DevOps &amp; Infrastructure:</strong>{" "}
                  Linux (Ubuntu/Debian), systemd Daemons, Docker, Nginx (Reverse Proxy), CI/CD (GitHub Actions), Git, Vercel
                </li>
              </ul>
            </section>

            {/* Professional Experience */}
            <section className="space-y-4">
              <h2 className="text-xs sm:text-sm font-bold font-mono tracking-wider text-slate-900 dark:text-white uppercase border-b border-slate-200 dark:border-slate-800 pb-1 print:border-black print:text-black">
                PROFESSIONAL EXPERIENCE
              </h2>

              {/* Role 1 */}
              <div className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs sm:text-sm">
                  <div className="font-bold text-slate-900 dark:text-white print:text-black">
                    HA Entertainment &nbsp;|&nbsp; <span className="font-semibold italic text-sky-700 dark:text-cyan-400 print:text-black">Founder &amp; Lead Systems Engineer</span>
                  </div>
                  <div className="font-mono text-xs text-slate-500 dark:text-slate-400 print:text-black">
                    Jun 2020 – Present | Lahore, Pakistan
                  </div>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700 dark:text-slate-300 print:text-black">
                  <li>Architected and deployed full-stack digital media platforms and operational infrastructure serving active client workloads with sub-second response times.</li>
                  <li>Designed high-performance web frontends and microservices utilizing Next.js, React, Node.js, and TypeScript with strict type safety.</li>
                  <li>Provisioned and managed Linux VPS servers, configuring automated cron backups, Nginx reverse proxies, SSL/TLS certificates, and systemd services with 99.9% uptime.</li>
                  <li>Directed continuous delivery (CI/CD) pipelines across Vercel and bare-metal environments, ensuring zero-downtime production deployments.</li>
                </ul>
              </div>

              {/* Role 2 */}
              <div className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs sm:text-sm">
                  <div className="font-bold text-slate-900 dark:text-white print:text-black">
                    MedBills MBS &nbsp;|&nbsp; <span className="font-semibold italic text-sky-700 dark:text-cyan-400 print:text-black">Information Technology Administrator</span>
                  </div>
                  <div className="font-mono text-xs text-slate-500 dark:text-slate-400 print:text-black">
                    Nov 2025 – Oct 2026 | Lahore, Pakistan
                  </div>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700 dark:text-slate-300 print:text-black">
                  <li>Administered core enterprise IT infrastructure, network security, and portal workflows supporting medical billing operations.</li>
                  <li>Enforced role-based access control (RBAC), end-to-end data encryption, and network firewall policies compliant with industry privacy standards.</li>
                  <li>Automated weekly database backups, system health monitoring scripts, and credential rotation protocols, resolving 100% of reported infrastructure tickets within SLA.</li>
                </ul>
              </div>

              {/* Role 3 */}
              <div className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs sm:text-sm">
                  <div className="font-bold text-slate-900 dark:text-white print:text-black">
                    Ajwa Mart Sweets &amp; Bakers &nbsp;|&nbsp; <span className="font-semibold italic text-sky-700 dark:text-cyan-400 print:text-black">IT Systems &amp; POS Specialist</span>
                  </div>
                  <div className="font-mono text-xs text-slate-500 dark:text-slate-400 print:text-black">
                    Jul 2021 – Present | Chichawatni, Pakistan
                  </div>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700 dark:text-slate-300 print:text-black">
                  <li>Engineered Point-of-Sale (POS) synchronization and multi-branch retail inventory tracking across 140+ retail stock items.</li>
                  <li>Developed custom Shopify Liquid modules, optimizing checkout flow, cart performance, and responsive product catalog browsing.</li>
                  <li>Automated dual-shift end-of-day sales reconciliation workflows, eliminating discrepancies between register cash counts and inventory balances.</li>
                </ul>
              </div>

              {/* Role 4 */}
              <div className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs sm:text-sm">
                  <div className="font-bold text-slate-900 dark:text-white print:text-black">
                    IT Beam &nbsp;|&nbsp; <span className="font-semibold italic text-sky-700 dark:text-cyan-400 print:text-black">MERN Stack Developer Intern</span>
                  </div>
                  <div className="font-mono text-xs text-slate-500 dark:text-slate-400 print:text-black">
                    Jul 2026 – Sep 2026 | Lahore, Pakistan
                  </div>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700 dark:text-slate-300 print:text-black">
                  <li>Developed core modules of an enterprise Learning Management System (LMS) using MongoDB, Express.js, React.js, and Node.js.</li>
                  <li>Implemented role-based dashboards (Admin, Instructor, Student), course curriculum management, and automated quiz evaluation engines.</li>
                  <li>Built and documented RESTful API endpoints with JWT authentication and input validation, improving API test coverage.</li>
                </ul>
              </div>

              {/* Role 5 */}
              <div className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs sm:text-sm">
                  <div className="font-bold text-slate-900 dark:text-white print:text-black">
                    DevelopersHub Corporation &nbsp;|&nbsp; <span className="font-semibold italic text-sky-700 dark:text-cyan-400 print:text-black">Software Engineering Intern</span>
                  </div>
                  <div className="font-mono text-xs text-slate-500 dark:text-slate-400 print:text-black">
                    Mar 2025 – May 2025 | Remote
                  </div>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700 dark:text-slate-300 print:text-black">
                  <li>Collaborated in an agile scrum team to deliver feature enhancements and bug fixes for responsive web applications.</li>
                  <li>Participated in weekly code reviews, Git feature-branch workflows, and automated regression testing.</li>
                </ul>
              </div>
            </section>

            {/* Featured Engineering Projects */}
            <section className="space-y-4">
              <h2 className="text-xs sm:text-sm font-bold font-mono tracking-wider text-slate-900 dark:text-white uppercase border-b border-slate-200 dark:border-slate-800 pb-1 print:border-black print:text-black">
                FEATURED ENGINEERING PROJECTS
              </h2>

              {/* Project 1 */}
              <div className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs sm:text-sm">
                  <div className="font-bold text-slate-900 dark:text-white print:text-black">
                    WA-Agent — Autonomous AI Agent Control Plane &amp; Terminal Supervisor
                  </div>
                  <a
                    href="https://github.com/hanzlaahmadcheema/WA-Agent"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-sky-600 dark:text-cyan-400 hover:underline print:text-black"
                  >
                    github.com/hanzlaahmadcheema/WA-Agent
                  </a>
                </div>
                <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 print:text-black italic">
                  TypeScript, Node.js, Baileys WebSockets, Unix Domain Sockets, systemd, Linux
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700 dark:text-slate-300 print:text-black">
                  <li>Engineered a deterministic remote control plane allowing terminal-based CLI agents (e.g., Claude Code) to be supervised via WhatsApp.</li>
                  <li>Architected dual-process daemon architecture with token-authenticated Unix Domain Socket IPC for secure command dispatching.</li>
                  <li>Implemented real-time bidirectional streaming of terminal stdout/stderr chunks with auto-reconnection and session persistence.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs sm:text-sm">
                  <div className="font-bold text-slate-900 dark:text-white print:text-black">
                    ReqForge — AI Requirements Engineering &amp; PRD Platform
                  </div>
                  <a
                    href="https://github.com/hanzlaahmadcheema/ReqForge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-sky-600 dark:text-cyan-400 hover:underline print:text-black"
                  >
                    github.com/hanzlaahmadcheema/ReqForge
                  </a>
                </div>
                <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 print:text-black italic">
                  Next.js, React, TypeScript, Google Gemini 2.0 API, Tailwind CSS
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700 dark:text-slate-300 print:text-black">
                  <li>Developed an AI Studio application that transforms ambiguous product briefs into structured, IEEE 830-compliant Software Requirement Specifications (SRS/PRD).</li>
                  <li>Designed multi-stage prompt orchestration pipelines with strict JSON schema validation and export capabilities (Markdown, PDF).</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs sm:text-sm">
                  <div className="font-bold text-slate-900 dark:text-white print:text-black">
                    Franchise Expense Reconciliation System
                  </div>
                  <a
                    href="https://github.com/hanzlaahmadcheema/franchise-expense-system"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-sky-600 dark:text-cyan-400 hover:underline print:text-black"
                  >
                    github.com/hanzlaahmadcheema/franchise-expense-system
                  </a>
                </div>
                <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 print:text-black italic">
                  Node.js, Express.js, PostgreSQL, Prisma ORM, Tailwind CSS
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700 dark:text-slate-300 print:text-black">
                  <li>Built an enterprise operational accounting system deployed in production at Jazz Franchise 7301 for daily petty cash and expense reconciliation.</li>
                  <li>Structured tamper-resistant audit logs and shift closure verification, ensuring 100% financial accuracy across physical cash handoffs.</li>
                </ul>
              </div>

              {/* Project 4 */}
              <div className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs sm:text-sm">
                  <div className="font-bold text-slate-900 dark:text-white print:text-black">
                    Pepsi Stock Balance Portal
                  </div>
                  <a
                    href="https://github.com/hanzlaahmadcheema/pepsi-stock-balance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-sky-600 dark:text-cyan-400 hover:underline print:text-black"
                  >
                    github.com/hanzlaahmadcheema/pepsi-stock-balance
                  </a>
                </div>
                <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 print:text-black italic">
                  Next.js 15, React, TypeScript, Prisma ORM, SQLite / PostgreSQL
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700 dark:text-slate-300 print:text-black">
                  <li>Built a commercial beverage distribution and inventory reconciliation platform tracking delivery truck stock vs empty crate returns.</li>
                  <li>Implemented real-time batch reconciliation algorithms preventing inventory variance across warehouse dispatch cycles.</li>
                </ul>
              </div>

              {/* Project 5 */}
              <div className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs sm:text-sm">
                  <div className="font-bold text-slate-900 dark:text-white print:text-black">
                    whatsapp-widget-daemon
                  </div>
                  <a
                    href="https://github.com/hanzlaahmadcheema/whatsapp-widget-daemon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-sky-600 dark:text-cyan-400 hover:underline print:text-black"
                  >
                    github.com/hanzlaahmadcheema/whatsapp-widget-daemon
                  </a>
                </div>
                <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 print:text-black italic">
                  Node.js, Baileys, Unix Domain Sockets, Linux IPC
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700 dark:text-slate-300 print:text-black">
                  <li>Developed a low-overhead headless background daemon over Baileys WebSockets providing desktop widget frameworks with live WhatsApp event data over local Unix sockets.</li>
                </ul>
              </div>
            </section>

            {/* Education */}
            <section className="space-y-2">
              <h2 className="text-xs sm:text-sm font-bold font-mono tracking-wider text-slate-900 dark:text-white uppercase border-b border-slate-200 dark:border-slate-800 pb-1 print:border-black print:text-black">
                EDUCATION
              </h2>
              <div className="space-y-1 text-xs sm:text-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="font-bold text-slate-900 dark:text-white print:text-black">
                    Bachelor of Science in Computer Science (BSCS)
                  </div>
                  <div className="font-mono text-xs text-slate-500 dark:text-slate-400 print:text-black">
                    2022 – 2026
                  </div>
                </div>
                <div className="text-slate-600 dark:text-slate-400 italic print:text-black">
                  Riphah International University, Lahore, Pakistan
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 print:text-black pt-0.5">
                  <strong className="font-semibold text-slate-900 dark:text-slate-100 print:text-black">Relevant Coursework:</strong>{" "}
                  Data Structures &amp; Algorithms, Operating Systems, Database Systems, Computer Networks, Software Engineering, Object-Oriented Programming, Theory of Automata.
                </p>
              </div>
            </section>

            {/* Verified Certifications & Credentials */}
            <section className="space-y-2.5">
              <h2 className="text-xs sm:text-sm font-bold font-mono tracking-wider text-slate-900 dark:text-white uppercase border-b border-slate-200 dark:border-slate-800 pb-1 print:border-black print:text-black">
                VERIFIED CERTIFICATIONS &amp; CREDENTIALS
              </h2>
              <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300 print:text-black">
                <div>
                  <strong className="font-semibold text-slate-900 dark:text-slate-100 print:text-black">Google Cloud Skills Boost:</strong>
                  <ul className="list-disc list-outside pl-4 space-y-0.5 mt-0.5">
                    <li>Responsible AI: Applying AI Principles with Google Cloud (Oct 2026)</li>
                    <li>Introduction to Large Language Models (Oct 2026)</li>
                    <li>Introduction to Generative AI (Oct 2026)</li>
                  </ul>
                </div>
                <div>
                  <strong className="font-semibold text-slate-900 dark:text-slate-100 print:text-black">Cisco Networking Academy:</strong>
                  <ul className="list-disc list-outside pl-4 space-y-0.5 mt-0.5">
                    <li>Python Essentials 1 (Oct 2026)</li>
                    <li>Linux Unhatched (Oct 2026)</li>
                    <li>Introduction to Cybersecurity (Oct 2026)</li>
                    <li>Networking Basics (Oct 2026)</li>
                    <li>Computer Hardware Basics (Oct 2026)</li>
                    <li>Operating Systems Basics (May 2026)</li>
                    <li>JavaScript Essentials 1 &amp; 2 (Jan &amp; Feb 2026)</li>
                    <li>C++ Essentials 2 (May 2025)</li>
                    <li>Introduction to IoT (2024)</li>
                  </ul>
                </div>
                <div>
                  <strong className="font-semibold text-slate-900 dark:text-slate-100 print:text-black">Language Proficiency:</strong>
                  <ul className="list-disc list-outside pl-4 space-y-0.5 mt-0.5">
                    <li>fondi Inc: CEFR B2 Independent English Proficiency Certification (Sep 2024)</li>
                  </ul>
                </div>
              </div>
            </section>
          </article>
        )}

        {/* View Mode 2: PDF Embed */}
        {viewMode === "pdf" && (
          <div className="p-3 sm:p-4 rounded-2xl bg-white dark:bg-[#0B101D] border border-slate-200/90 dark:border-slate-800/80 shadow-md space-y-3">
            <div className="flex items-center justify-between px-2 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span>PDF PREVIEW: Hanzla_Ahmad_Resume_ATS.pdf (2 Pages)</span>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
              >
                <span>Full Screen</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="w-full h-[75vh] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950">
              <iframe
                src="/resume.pdf#view=FitH"
                title="Hanzla Ahmad ATS Resume PDF"
                className="w-full h-full border-none"
              />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
