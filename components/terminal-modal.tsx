"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  X,
  Maximize2,
  Minimize2,
  Terminal as TerminalIcon,
} from "lucide-react";
import { ARCHIVE_PROJECTS } from "@/data/archive";

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Virtual File System Node
interface VFSNode {
  name: string;
  type: "file" | "dir" | "executable" | "link";
  size?: string;
  permissions?: string;
  modified?: string;
  content?: string;
  url?: string;
  children?: Record<string, VFSNode>;
}

// Complete Virtual File System
const ROOT_VFS: VFSNode = {
  name: "hanzla",
  type: "dir",
  children: {
    "about.txt": {
      name: "about.txt",
      type: "file",
      size: "1.4KB",
      permissions: "-rw-r--r--",
      modified: "Oct 25 12:00",
      content: `Hanzla Ahmad (Cheemæ) — Full-Stack & Systems Developer
Location: Lahore, Pakistan • Asia/Karachi (PKT / UTC+5)
Status: Available for high-impact contracts & systems engineering

ENGINEERING PHILOSOPHY:
=======================
Full-Stack and Systems Developer focused on engineering resilient software platforms,
deterministic background control planes, and production-grade AI pipelines. I specialize
in bridging low-level system environments with modern web architectures—delivering
applications that remain stable under real operational pressure.

My core discipline centers on building robust software from the ground up: architecting
type-safe client surfaces in Next.js and React, writing long-running headless daemons
and IPC bridges on Linux, and designing tamper-resistant relational database schemas.
Whether resolving cash reconciliation discrepancies for physical commercial franchises
or automating multi-stage LLM discovery workflows, I prioritize deterministic state,
zero data loss, and sub-second responsiveness.

From bare-metal Linux VPS deployment, Docker containerization, and Nginx reverse proxies
to edge-distributed databases and cloud pipelines, I own the complete engineering lifecycle
from schema design to production monitoring.`,
    },
    "engineer.config.ts": {
      name: "engineer.config.ts",
      type: "file",
      size: "2.8KB",
      permissions: "-rw-r--r--",
      modified: "Oct 25 14:30",
      content: `/**
 * @file engineer.config.ts
 * @author Hanzla Ahmad (Cheemæ)
 * @status PRODUCTION_ACTIVE
 */

export const engineer = {
  name: "Hanzla Ahmad",
  role: "Full-Stack & Systems Developer",
  location: "Lahore, Pakistan (UTC+5)",
  status: "Available for high-impact contracts & systems engineering",
  
  stack: {
    frontend: ["Next.js 15 (App Router)", "TypeScript", "React 19", "Tailwind CSS"],
    backend: ["Node.js", "Python", "REST APIs", "Express.js"],
    persistence: ["PostgreSQL", "SQLite (WAL)", "Prisma ORM", "Cloudflare D1"],
    infrastructure: ["Docker", "Linux CLI", "Ubuntu VPS", "Nginx", "Tailscale"],
    intelligence: ["Generative AI", "LLM Prompt Pipelines", "Gemini 2.0 API"]
  },

  flagshipSystems: [
    {
      name: "WA-Agent",
      type: "Deterministic Remote WhatsApp Control Plane",
      runtime: "Headless Linux Daemon + SQLite WAL persistence"
    },
    {
      name: "Franchise Expense Management System",
      type: "Production Operational Ledger Platform",
      deployment: "Active at Jazz Franchise 7301 for daily reconciliations"
    },
    {
      name: "ReqForge",
      type: "AI Requirements Discovery & PRD Synthesis Engine",
      url: "https://ha-reqforge.vercel.app"
    },
    {
      name: "Pepsi Stock Balance Portal",
      type: "Route Distribution & Crate Reconciliation",
      stack: "Next.js 15 + Prisma ORM + SQLite"
    }
  ],

  contact: {
    email: "hanzlaahmadch@gmail.com",
    phone: "+92 326 6900001",
    whatsapp: "https://wa.me/923266900001",
    github: "https://github.com/hanzlaahmadcheema",
    linkedin: "https://linkedin.com/in/hanzlaahmadcheema"
  }
} as const;`,
    },
    "hiring.md": {
      name: "hiring.md",
      type: "file",
      size: "2.1KB",
      permissions: "-rw-r--r--",
      modified: "Oct 25 14:45",
      content: `# HIRING & COLLABORATION PROFILE // HANZLA AHMAD
===================================================

1. FOR TECHNICAL RECRUITERS & HIRING MANAGERS:
----------------------------------------------
• Target Titles: Senior Full-Stack Engineer, Linux Systems Engineer, Founding Engineer
• Work Formats: Remote (Worldwide), Hybrid (Lahore), Relocation Considered
• Production Track Record: 4+ Years Experience • 10 Production Systems • 30+ Public Repositories
• Core Disciplines: Next.js 15, TypeScript, React 19, Node.js, Python, Linux Daemons (systemd), PostgreSQL, SQLite WAL, Docker, Gemini AI Pipelines.

2. FOR FOUNDERS & CLIENTS (PROJECT SCOPE):
------------------------------------------
• Focus Areas: Turn-key Web Platforms, Headless Linux Services, Commercial POS & Ledgers, AI Agents & PRD Synthesis Engines.
• Standards: Multi-stage Docker, Zero-Downtime Systemd Supervision, WAL-mode persistence, sub-50ms execution.
• Availability: Immediate engagement for high-impact contracts & founding roles.

DIRECT CONTACT CHANNELS:
• WhatsApp: https://wa.me/923266900001 (Phone: +92 326 6900001)
• Email: hanzlaahmadch@gmail.com
• LinkedIn: https://linkedin.com/in/hanzlaahmadcheema
• GitHub: https://github.com/hanzlaahmadcheema`,
    },
    ".bashrc": {
      name: ".bashrc",
      type: "file",
      size: "512B",
      permissions: "-rw-r--r--",
      modified: "Oct 20 09:00",
      content: `# ~/.bashrc - Hanzla Ahmad's Systems Environment
export PS1="\\[\\033[01;32m\\]hanzla\\[\\033[00m\\]@\\[\\033[01;36m\\]cheema\\[\\033[00m\\]:\\[\\033[01;34m\\]\\w\\[\\033[00m\\]\\$ "
alias ll="ls -la"
alias la="ls -a"
alias projects="cd ~/projects && ls"
alias contact="cd ~/contact && ls"
alias fetch="neofetch"
alias cls="clear"`,
    },

    // CAPABILITIES DIRECTORY
    capabilities: {
      name: "capabilities",
      type: "dir",
      size: "4.0KB",
      permissions: "drwxr-xr-x",
      modified: "Oct 25 13:00",
      children: {
        "01_web_architecture.txt": {
          name: "01_web_architecture.txt",
          type: "file",
          size: "420B",
          permissions: "-rw-r--r--",
          modified: "Oct 25 13:00",
          content: `DOMAIN 01: Full-Stack & Modern Web Architecture
----------------------------------------------
• Next.js 15 App Router & React 19 Server Components (RSC)
• Type-safe Server Actions & end-to-end data validation
• Responsive, high-contrast interfaces with Tailwind CSS v4
• Micro-motion interactions with Framer Motion & CSS variables
• Sub-second Time-to-First-Byte (TTFB) & 95+ Lighthouse ratings`,
        },
        "02_linux_daemons.txt": {
          name: "02_linux_daemons.txt",
          type: "file",
          size: "450B",
          permissions: "-rw-r--r--",
          modified: "Oct 25 13:00",
          content: `DOMAIN 02: Linux Systems, Shell & Headless Daemons
-------------------------------------------------
• Low-level background daemon engineering under systemd
• Process supervision, restart recovery, and crash backoff
• Unix Domain Socket IPC & local loopback WebSocket bridges
• Automated Bash automation, cron schedules, and log rotation
• Real-time system telemetry and process signal handlers (SIGTERM/SIGHUP)`,
        },
        "03_cloud_devops.txt": {
          name: "03_cloud_devops.txt",
          type: "file",
          size: "410B",
          permissions: "-rw-r--r--",
          modified: "Oct 25 13:00",
          content: `DOMAIN 03: Cloud Infrastructure, DevOps & Edge
---------------------------------------------
• Bare-metal Ubuntu Linux VPS orchestration & hardened SSH
• Docker multi-stage containerization & Docker Compose clusters
• Nginx reverse proxying, SSL termination, and rate-limiting
• Cloudflare Workers, Edge routing, and Cloudflare D1 databases
• Private Tailscale WireGuard mesh networking for secure remote nodes`,
        },
        "04_data_persistence.txt": {
          name: "04_data_persistence.txt",
          type: "file",
          size: "430B",
          permissions: "-rw-r--r--",
          modified: "Oct 25 13:00",
          content: `DOMAIN 04: Data Persistence & Relational Schemas
-----------------------------------------------
• PostgreSQL schema modeling with foreign key constraints & indexes
• SQLite with Write-Ahead Logging (WAL) for bulletproof local daemons
• Type-safe ORMs: Prisma ORM and Drizzle ORM
• Multi-table ACID transaction boundaries preventing partial writes
• Automated migration pipelines and schema drift verification`,
        },
        "05_generative_ai.txt": {
          name: "05_generative_ai.txt",
          type: "file",
          size: "440B",
          permissions: "-rw-r--r--",
          modified: "Oct 25 13:00",
          content: `DOMAIN 05: Generative AI & Autonomous Pipelines
----------------------------------------------
• Gemini 2.0 API & structured JSON output pipelines
• Context-aware auto-reply bots and intent classification engines
• Retrieval-Augmented Generation (RAG) and semantic document search
• Autonomous agentic workflows with strict validation gates
• Hallucination reduction through strict temperature & prompt contracts`,
        },
        "06_retail_pos.txt": {
          name: "06_retail_pos.txt",
          type: "file",
          size: "390B",
          permissions: "-rw-r--r--",
          modified: "Oct 25 13:00",
          content: `DOMAIN 06: E-Commerce & Retail POS Operations
--------------------------------------------
• Real-world dual-shift commercial register cash reconciliation
• Tamper-evident ledger logs with immutable audit records
• Shopify custom Liquid theme development & checkout optimization
• Thermal receipt printing integration & barcode scanning pipelines
• Route inventory reconciliation for distribution trucks (Pepsi routes)`,
        },
      },
    },

    // PROJECTS DIRECTORY
    projects: {
      name: "projects",
      type: "dir",
      size: "4.0KB",
      permissions: "drwxr-xr-x",
      modified: "Oct 25 14:00",
      children: {
        "wa-agent": {
          name: "wa-agent",
          type: "dir",
          size: "4.0KB",
          permissions: "drwxr-xr-x",
          modified: "Oct 25 14:00",
          children: {
            "README.md": {
              name: "README.md",
              type: "file",
              size: "1.2KB",
              permissions: "-rw-r--r--",
              modified: "Oct 25 14:00",
              content: `# WA-Agent — Deterministic WhatsApp Control Plane
Runtime: 24/7 Headless Linux Daemon
Database: SQLite WAL Mode
Performance: Sub-50ms execution latency

ARCHITECTURAL OVERVIEW:
Headless background terminal supervisor and deterministic remote control plane operating over WhatsApp.
Features stateful command parsing, auto-reconnect backoff, and tamper-resistant local logging.

Key Highlights:
• Zero UI dependency: runs as a persistent systemd service
• SQLite WAL mode ensures crash resilience and concurrent lock-free reads
• End-to-end command encryption and authorized sender filtering
• GitHub: https://github.com/hanzlaahmadcheema/WA-Agent`,
            },
            "metrics.txt": {
              name: "metrics.txt",
              type: "file",
              size: "180B",
              permissions: "-rw-r--r--",
              modified: "Oct 25 14:00",
              content: `METRICS // WA-AGENT:
• Latency: < 50ms command execution
• Uptime: 99.95% on Ubuntu Linux VPS
• Storage: SQLite WAL with zero write deadlocks
• Memory footprint: ~38MB RSS`,
            },
            "stack.json": {
              name: "stack.json",
              type: "file",
              size: "220B",
              permissions: "-rw-r--r--",
              modified: "Oct 25 14:00",
              content: `{\n  "runtime": "Node.js 22 LTS",\n  "language": "TypeScript",\n  "database": "SQLite (WAL)",\n  "protocol": "WhatsApp Web RPC",\n  "service": "systemd daemon",\n  "os": "Ubuntu 24.04 LTS"\n}`,
            },
            "repo.url": {
              name: "repo.url",
              type: "link",
              size: "54B",
              permissions: "lrwxrwxrwx",
              modified: "Oct 25 14:00",
              content: "https://github.com/hanzlaahmadcheema/WA-Agent",
              url: "https://github.com/hanzlaahmadcheema/WA-Agent",
            },
          },
        },
        "franchise-expense": {
          name: "franchise-expense",
          type: "dir",
          size: "4.0KB",
          permissions: "drwxr-xr-x",
          modified: "Oct 25 14:00",
          children: {
            "README.md": {
              name: "README.md",
              type: "file",
              size: "1.1KB",
              permissions: "-rw-r--r--",
              modified: "Oct 25 14:00",
              content: `# Franchise Expense Management System
Deployment: Live in Production at Jazz Franchise 7301 (Chichawatni)
Auditing: 100% Dual-Shift Reconciliation

ARCHITECTURAL OVERVIEW:
Production operational finance and multi-shift ledger platform active at Jazz Franchise 7301.
Handles daily cash drawers, supplier disbursement auditing, role-based shift handover,
and financial reporting with tamper-proof records.

Key Highlights:
• Prevents multi-shift register discrepancies with dual-signature verification
• Role-based access control (Admin, Shift Manager, Cashier)
• Real-time expense breakdown charts and PDF export for accounting audits
• GitHub: https://github.com/hanzlaahmadcheema/franchise-expense-system`,
            },
            "repo.url": {
              name: "repo.url",
              type: "link",
              size: "68B",
              permissions: "lrwxrwxrwx",
              modified: "Oct 25 14:00",
              content: "https://github.com/hanzlaahmadcheema/franchise-expense-system",
              url: "https://github.com/hanzlaahmadcheema/franchise-expense-system",
            },
          },
        },
        reqforge: {
          name: "reqforge",
          type: "dir",
          size: "4.0KB",
          permissions: "drwxr-xr-x",
          modified: "Oct 25 14:00",
          children: {
            "README.md": {
              name: "README.md",
              type: "file",
              size: "1.1KB",
              permissions: "-rw-r--r--",
              modified: "Oct 25 14:00",
              content: `# ReqForge — AI Requirements Engineering Platform
Live App: https://ha-reqforge.vercel.app/
Impact: 75% Reduction in Client Discovery Time

ARCHITECTURAL OVERVIEW:
AI-assisted discovery engine converting unstructured client conversations and voice transcripts
into rigorous IEEE 830 PRDs, architecture specifications, and sprint backlogs.

Key Highlights:
• Next.js 15 App Router with streaming server responses
• Gemini 2.0 API with structured schema extraction
• Export to Markdown, PDF, and Linear/Jira compatible tickets
• GitHub: https://github.com/hanzlaahmadcheema/ReqForge`,
            },
            "live.url": {
              name: "live.url",
              type: "link",
              size: "34B",
              permissions: "lrwxrwxrwx",
              modified: "Oct 25 14:00",
              content: "https://ha-reqforge.vercel.app/",
              url: "https://ha-reqforge.vercel.app/",
            },
            "repo.url": {
              name: "repo.url",
              type: "link",
              size: "52B",
              permissions: "lrwxrwxrwx",
              modified: "Oct 25 14:00",
              content: "https://github.com/hanzlaahmadcheema/ReqForge",
              url: "https://github.com/hanzlaahmadcheema/ReqForge",
            },
          },
        },
        "pepsi-stock-balance": {
          name: "pepsi-stock-balance",
          type: "dir",
          size: "4.0KB",
          permissions: "drwxr-xr-x",
          modified: "Oct 25 14:00",
          children: {
            "README.md": {
              name: "README.md",
              type: "file",
              size: "950B",
              permissions: "-rw-r--r--",
              modified: "Oct 25 14:00",
              content: `# Pepsi Stock Balance — Distribution Route Portal
Stack: Next.js 15, Prisma ORM, SQLite
Coverage: 140+ Route SKUs & Daily Delivery Trucks

ARCHITECTURAL OVERVIEW:
Local-first route inventory portal built to reconcile delivery vehicle morning load-outs
against evening returns, bottle deposits, and warehouse dispatch sheets. Zero stock mismatch.
GitHub: https://github.com/hanzlaahmadcheema/pepsi-stock-balance`,
            },
            "repo.url": {
              name: "repo.url",
              type: "link",
              size: "63B",
              permissions: "lrwxrwxrwx",
              modified: "Oct 25 14:00",
              content: "https://github.com/hanzlaahmadcheema/pepsi-stock-balance",
              url: "https://github.com/hanzlaahmadcheema/pepsi-stock-balance",
            },
          },
        },
        "github-repo-agent-skill": {
          name: "github-repo-agent-skill",
          type: "dir",
          size: "4.0KB",
          permissions: "drwxr-xr-x",
          modified: "Oct 25 14:00",
          children: {
            "README.md": {
              name: "README.md",
              type: "file",
              size: "820B",
              permissions: "-rw-r--r--",
              modified: "Oct 25 14:00",
              content: `# github-repo-agent-skill — Agentic Verification Engine
Language: Python 3.11+
Compatibility: Claude, Codex, Gemini, Antigravity

Autonomous skill executing evidence-based repository audits, PR hygiene verification,
metadata synchronization, and release package validation.
GitHub: https://github.com/hanzlaahmadcheema/github-repo-agent-skill`,
            },
            "repo.url": {
              name: "repo.url",
              type: "link",
              size: "67B",
              permissions: "lrwxrwxrwx",
              modified: "Oct 25 14:00",
              content: "https://github.com/hanzlaahmadcheema/github-repo-agent-skill",
              url: "https://github.com/hanzlaahmadcheema/github-repo-agent-skill",
            },
          },
        },
        "whatsapp-widget-daemon": {
          name: "whatsapp-widget-daemon",
          type: "dir",
          size: "4.0KB",
          permissions: "drwxr-xr-x",
          modified: "Oct 25 14:00",
          children: {
            "README.md": {
              name: "README.md",
              type: "file",
              size: "800B",
              permissions: "-rw-r--r--",
              modified: "Oct 25 14:00",
              content: `# whatsapp-widget-daemon
Headless WebSocket and IPC bridge daemon connecting web frontend widgets to WhatsApp messaging workflows.
GitHub: https://github.com/hanzlaahmadcheema/whatsapp-widget-daemon`,
            },
            "repo.url": {
              name: "repo.url",
              type: "link",
              size: "66B",
              permissions: "lrwxrwxrwx",
              modified: "Oct 25 14:00",
              content: "https://github.com/hanzlaahmadcheema/whatsapp-widget-daemon",
              url: "https://github.com/hanzlaahmadcheema/whatsapp-widget-daemon",
            },
          },
        },
        "whatsapp-contact-exporter": {
          name: "whatsapp-contact-exporter",
          type: "dir",
          size: "4.0KB",
          permissions: "drwxr-xr-x",
          modified: "Oct 25 14:00",
          children: {
            "README.md": {
              name: "README.md",
              type: "file",
              size: "790B",
              permissions: "-rw-r--r--",
              modified: "Oct 25 14:00",
              content: `# whatsapp-contact-exporter
Standalone cross-platform CLI tool for selective WhatsApp address book extraction and VCF export.
GitHub: https://github.com/hanzlaahmadcheema/whatsapp-contact-exporter`,
            },
            "repo.url": {
              name: "repo.url",
              type: "link",
              size: "69B",
              permissions: "lrwxrwxrwx",
              modified: "Oct 25 14:00",
              content: "https://github.com/hanzlaahmadcheema/whatsapp-contact-exporter",
              url: "https://github.com/hanzlaahmadcheema/whatsapp-contact-exporter",
            },
          },
        },
        "twitter-ai-extension": {
          name: "twitter-ai-extension",
          type: "dir",
          size: "4.0KB",
          permissions: "drwxr-xr-x",
          modified: "Oct 25 14:00",
          children: {
            "README.md": {
              name: "README.md",
              type: "file",
              size: "810B",
              permissions: "-rw-r--r--",
              modified: "Oct 25 14:00",
              content: `# Twitter/X Context-Aware AI Auto-Reply Extension
Browser extension leveraging LLMs for context-aware reply synthesis with zero hallucination.
GitHub: https://github.com/hanzlaahmadcheema/X-Twitter-Auto-Reply-10x-Extension`,
            },
            "repo.url": {
              name: "repo.url",
              type: "link",
              size: "78B",
              permissions: "lrwxrwxrwx",
              modified: "Oct 25 14:00",
              content: "https://github.com/hanzlaahmadcheema/X-Twitter-Auto-Reply-10x-Extension",
              url: "https://github.com/hanzlaahmadcheema/X-Twitter-Auto-Reply-10x-Extension",
            },
          },
        },
        kernalx: {
          name: "kernalx",
          type: "dir",
          size: "4.0KB",
          permissions: "drwxr-xr-x",
          modified: "Oct 25 14:00",
          children: {
            "README.md": {
              name: "README.md",
              type: "file",
              size: "820B",
              permissions: "-rw-r--r--",
              modified: "Oct 25 14:00",
              content: `# KernalX — Operating System Architecture Simulator
Language: Java & JavaFX
Features: CPU scheduling (Round Robin, SRTF), LRU paging simulation, Semaphore mutex, OSHI hardware monitoring.
GitHub: https://github.com/hanzlaahmadcheema/KernalX`,
            },
            "repo.url": {
              name: "repo.url",
              type: "link",
              size: "51B",
              permissions: "lrwxrwxrwx",
              modified: "Oct 25 14:00",
              content: "https://github.com/hanzlaahmadcheema/KernalX",
              url: "https://github.com/hanzlaahmadcheema/KernalX",
            },
          },
        },
        batterymoniter: {
          name: "batterymoniter",
          type: "dir",
          size: "4.0KB",
          permissions: "drwxr-xr-x",
          modified: "Oct 25 14:00",
          children: {
            "README.md": {
              name: "README.md",
              type: "file",
              size: "810B",
              permissions: "-rw-r--r--",
              modified: "Oct 25 14:00",
              content: `# BatteryMoniter — System Tray Hardware Watcher
Language: Python (PySide6 / Qt)
Features: Multi-tier battery threshold alerts, system tray icon, audio warnings, battery cycle logging.
GitHub: https://github.com/hanzlaahmadcheema/BatteryMoniter`,
            },
            "repo.url": {
              name: "repo.url",
              type: "link",
              size: "58B",
              permissions: "lrwxrwxrwx",
              modified: "Oct 25 14:00",
              content: "https://github.com/hanzlaahmadcheema/BatteryMoniter",
              url: "https://github.com/hanzlaahmadcheema/BatteryMoniter",
            },
          },
        },
        "all_public_repos.txt": {
          name: "all_public_repos.txt",
          type: "file",
          size: "4.8KB",
          permissions: "-rw-r--r--",
          modified: "Oct 25 14:30",
          content: ARCHIVE_PROJECTS.map(
            (p, idx) =>
              `${String(idx + 1).padStart(2, "0")}. ${p.name.padEnd(35)} [${p.language.padEnd(10)}] -> ${p.url}`
          ).join("\n"),
        },
      },
    },

    // EXPERIENCE DIRECTORY
    experience: {
      name: "experience",
      type: "dir",
      size: "4.0KB",
      permissions: "drwxr-xr-x",
      modified: "Oct 25 13:30",
      children: {
        "ha-entertainment.txt": {
          name: "ha-entertainment.txt",
          type: "file",
          size: "620B",
          permissions: "-rw-r--r--",
          modified: "Oct 25 13:30",
          content: `COMPANY: HA Entertainment
ROLE: Founder & Lead Systems Engineer
PERIOD: 2024 - Present
LOCATION: Lahore, Pakistan

KEY CONTRIBUTIONS:
• Built and deployed production media streaming pipelines with low-latency Nginx caching proxies.
• Architected background daemon infrastructure for automated catalog updates and metadata scraping.
• Integrated payment gateways with tamper-resistant webhook signature verification.`,
        },
        "medbills-mbs.txt": {
          name: "medbills-mbs.txt",
          type: "file",
          size: "590B",
          permissions: "-rw-r--r--",
          modified: "Oct 25 13:30",
          content: `COMPANY: MedBills MBS
ROLE: Information Technology Administrator
PERIOD: Nov 2025 - Oct 2026
LOCATION: Remote / Hybrid

KEY CONTRIBUTIONS:
• Administer clinical IT infrastructure and ensure strict HIPAA data compliance standards.
• Automated server backup pipelines with encrypted off-site disaster recovery mirrors.
• Maintained 99.98% infrastructure availability across local and cloud services.`,
        },
        "ajwa-mart.txt": {
          name: "ajwa-mart.txt",
          type: "file",
          size: "580B",
          permissions: "-rw-r--r--",
          modified: "Oct 25 13:30",
          content: `COMPANY: Ajwa Mart Sweets & Bakers
ROLE: IT Systems & POS Specialist
PERIOD: 2024 - 2024
LOCATION: Chichawatni, Pakistan

KEY CONTRIBUTIONS:
• Managed high-volume dual-shift POS operations and automated inventory reconciliation.
• Engineered daily cash balance scripts eliminating end-of-day register discrepancies.
• Configured network thermal printers and barcode scanners for zero-downtime sales desks.`,
        },
        "it-beam.txt": {
          name: "it-beam.txt",
          type: "file",
          size: "680B",
          permissions: "-rw-r--r--",
          modified: "Oct 25 14:30",
          content: `COMPANY: IT Beam
ROLE: MERN Stack Developer Intern
PERIOD: Jul 2026 - Sep 2026
LOCATION: Lahore, Pakistan (On-site)

KEY CONTRIBUTIONS:
• Contributed to full-stack engineering of an LMS platform using MongoDB, Express.js, React, and Node.js.
• Built course management, student enrollment, quiz evaluation, and assessment features.
• Designed and integrated authenticated RESTful APIs with role-based access control (RBAC).
• Developed reusable TypeScript & React UI components and optimized database schemas.`,
        },
        "developers-hub.txt": {
          name: "developers-hub.txt",
          type: "file",
          size: "520B",
          permissions: "-rw-r--r--",
          modified: "Oct 25 13:30",
          content: `COMPANY: DevelopersHub Corporation©
ROLE: Software Engineering Intern
PERIOD: 2024 - 2024
LOCATION: Lahore, Pakistan

KEY CONTRIBUTIONS:
• Built responsive web components in React and TypeScript with Tailwind styling.
• Developed REST API endpoints in Node.js/Express with input validation and error handling.`,
        },
      },
    },

    // CONTACT DIRECTORY (also handles "contact info")
    contact: {
      name: "contact",
      type: "dir",
      size: "4.0KB",
      permissions: "drwxr-xr-x",
      modified: "Oct 25 12:00",
      children: {
        "email.txt": {
          name: "email.txt",
          type: "file",
          size: "120B",
          permissions: "-rw-r--r--",
          modified: "Oct 25 12:00",
          content: `hanzlaahmadch@gmail.com\n\nRun 'get email' to copy to clipboard or 'open email' to launch mail client.`,
        },
        "whatsapp.url": {
          name: "whatsapp.url",
          type: "link",
          size: "30B",
          permissions: "lrwxrwxrwx",
          modified: "Oct 25 14:00",
          content: "https://wa.me/923266900001",
          url: "https://wa.me/923266900001",
        },
        "phone.txt": {
          name: "phone.txt",
          type: "file",
          size: "20B",
          permissions: "-rw-r--r--",
          modified: "Oct 25 14:00",
          content: "+92 326 6900001\nDirect WhatsApp / Line",
        },
        "github.url": {
          name: "github.url",
          type: "link",
          size: "46B",
          permissions: "lrwxrwxrwx",
          modified: "Oct 25 12:00",
          content: "https://github.com/hanzlaahmadcheema",
          url: "https://github.com/hanzlaahmadcheema",
        },
        "linkedin.url": {
          name: "linkedin.url",
          type: "link",
          size: "47B",
          permissions: "lrwxrwxrwx",
          modified: "Oct 25 12:00",
          content: "https://linkedin.com/in/hanzlaahmadcheema",
          url: "https://linkedin.com/in/hanzlaahmadcheema",
        },
        "location.txt": {
          name: "location.txt",
          type: "file",
          size: "68B",
          permissions: "-rw-r--r--",
          modified: "Oct 25 12:00",
          content: "Lahore, Pakistan • Asia/Karachi (PKT / UTC+5)\nCoordinate: 31.5204° N, 74.3587° E",
        },
      },
    },

    // BIN DIRECTORY
    bin: {
      name: "bin",
      type: "dir",
      size: "4.0KB",
      permissions: "drwxr-xr-x",
      modified: "Oct 25 10:00",
      children: {
        neofetch: {
          name: "neofetch",
          type: "executable",
          size: "8.2KB",
          permissions: "-rwxr-xr-x",
          modified: "Oct 25 10:00",
          content: "Neofetch CLI system telemetry script",
        },
        matrix: {
          name: "matrix",
          type: "executable",
          size: "4.1KB",
          permissions: "-rwxr-xr-x",
          modified: "Oct 25 10:00",
          content: "Interactive Matrix rain visualizer",
        },
        status: {
          name: "status",
          type: "executable",
          size: "3.5KB",
          permissions: "-rwxr-xr-x",
          modified: "Oct 25 10:00",
          content: "Daemon process supervisor status monitor",
        },
        quote: {
          name: "quote",
          type: "executable",
          size: "1.2KB",
          permissions: "-rwxr-xr-x",
          modified: "Oct 25 10:00",
          content: "Deterministic systems engineering aphorisms",
        },
      },
    },
  },
};

// Command History Entry
interface OutputEntry {
  id: string;
  command: string;
  path: string;
  output: React.ReactNode;
}

export function TerminalModal({ isOpen, onClose }: TerminalModalProps) {
  const [currentPath, setCurrentPath] = useState<string>("/home/hanzla");
  const [prevPath, setPrevPath] = useState<string>("/home/hanzla");
  const [input, setInput] = useState<string>("");
  const [history, setHistory] = useState<OutputEntry[]>([]);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [isMaximized, setIsMaximized] = useState<boolean>(false);
  const [isMatrixActive, setIsMatrixActive] = useState<boolean>(false);
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus input when terminal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Scroll to bottom whenever history updates
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, isMatrixActive]);

  // Helper: Display path with ~ shorthand
  const getDisplayPath = (fullPath: string): string => {
    if (fullPath === "/home/hanzla") return "~";
    if (fullPath.startsWith("/home/hanzla/")) {
      return "~" + fullPath.slice("/home/hanzla".length);
    }
    return fullPath;
  };

  // Helper: Resolve relative or absolute path against currentPath (with CDPATH fallback to ~)
  const resolvePath = (base: string, target: string): string => {
    const cleanTarget = target.trim();
    if (
      cleanTarget === "contact info" ||
      cleanTarget === '"contact info"' ||
      cleanTarget === "'contact info'" ||
      cleanTarget.toLowerCase() === "contact info"
    ) {
      return "/home/hanzla/contact";
    }

    if (!cleanTarget || cleanTarget === "~") return "/home/hanzla";
    if (cleanTarget === "/") return "/home/hanzla";

    let parts: string[];
    if (cleanTarget.startsWith("/")) {
      parts = cleanTarget.split("/").filter(Boolean);
    } else if (cleanTarget.startsWith("~/")) {
      parts = ["home", "hanzla", ...cleanTarget.slice(2).split("/").filter(Boolean)];
    } else {
      // 1. Try relative to base
      parts = base.split("/").filter(Boolean);
      const targetParts = cleanTarget.split("/").filter(Boolean);
      for (const p of targetParts) {
        if (p === ".") continue;
        if (p === "..") {
          if (parts.length > 2) parts.pop();
        } else {
          parts.push(p);
        }
      }
      const candidate = "/" + parts.join("/");
      if (getNode(candidate)) {
        return candidate;
      }

      // 2. CDPATH fallback: check under /home/hanzla
      const homeParts = ["home", "hanzla", ...targetParts];
      const homeCandidate = "/" + homeParts.join("/");
      if (getNode(homeCandidate)) {
        return homeCandidate;
      }
    }

    if (parts.length < 2 || parts[0] !== "home" || parts[1] !== "hanzla") {
      return "/home/hanzla";
    }

    return "/" + parts.join("/");
  };

  // Helper: Retrieve node from VFS
  const getNode = (path: string): VFSNode | null => {
    const parts = path.split("/").filter(Boolean);
    let current: VFSNode = ROOT_VFS;
    for (let i = 2; i < parts.length; i++) {
      const part = parts[i];
      if (!current.children || !current.children[part]) {
        return null;
      }
      current = current.children[part];
    }
    return current;
  };

  // Execute Command Logic
  const executeCommand = (cmdText: string) => {
    const trimmed = cmdText.trim();
    if (!trimmed) {
      setHistory((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          command: "",
          path: getDisplayPath(currentPath),
          output: null,
        },
      ]);
      return;
    }

    setCmdHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const tokens = trimmed.split(" ").filter(Boolean);
    const cmd = tokens[0].toLowerCase();
    const args = tokens.slice(1);
    const fullArg = args.join(" ").trim();

    let outputNode: React.ReactNode = null;

    switch (cmd) {
      case "help":
      case "?": {
        outputNode = (
          <div className="space-y-3 py-1 font-mono text-xs text-slate-700 dark:text-slate-300">
            <div className="text-sky-700 dark:text-cyan-400 font-bold border-b border-slate-200 dark:border-slate-800 pb-1">
              SYSTEM COMMANDS (zsh 5.9)
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
              <div>
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">hire / recruiter</span>
                <span className="text-slate-600 dark:text-slate-400 ml-2">— Recruiter & Client collaboration profile</span>
              </div>
              <div>
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">whatsapp / wa</span>
                <span className="text-slate-600 dark:text-slate-400 ml-2">— Direct WhatsApp line (+92 326 6900001)</span>
              </div>
              <div>
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">projects</span>
                <span className="text-slate-600 dark:text-slate-400 ml-2">— List flagship systems & repositories</span>
              </div>
              <div>
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">about</span>
                <span className="text-slate-600 dark:text-slate-400 ml-2">— Display background & philosophy</span>
              </div>
              <div>
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">resume</span>
                <span className="text-slate-600 dark:text-slate-400 ml-2">— Display career track record</span>
              </div>
              <div>
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">contact</span>
                <span className="text-slate-600 dark:text-slate-400 ml-2">— Display WhatsApp, email & socials</span>
              </div>
              <div>
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">skills</span>
                <span className="text-slate-600 dark:text-slate-400 ml-2">— Display technical capabilities</span>
              </div>
              <div>
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">status</span>
                <span className="text-slate-600 dark:text-slate-400 ml-2">— Supervised daemon monitor (systemd)</span>
              </div>
              <div>
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">neofetch</span>
                <span className="text-slate-600 dark:text-slate-400 ml-2">— Host specifications & Linux telemetry</span>
              </div>
              <div>
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">ls [-la] [dir]</span>
                <span className="text-slate-600 dark:text-slate-400 ml-2">— List directory contents</span>
              </div>
              <div>
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">cd [dir]</span>
                <span className="text-slate-600 dark:text-slate-400 ml-2">— Change directory (cd projects, cd ..)</span>
              </div>
              <div>
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">cat [file]</span>
                <span className="text-slate-600 dark:text-slate-400 ml-2">— Print file contents (cat about.txt)</span>
              </div>
              <div>
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">pwd</span>
                <span className="text-slate-600 dark:text-slate-400 ml-2">— Print working directory</span>
              </div>
              <div>
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">get [target]</span>
                <span className="text-slate-600 dark:text-slate-400 ml-2">— Quick fetch (email, github, wa-agent)</span>
              </div>
              <div>
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">matrix</span>
                <span className="text-slate-600 dark:text-slate-400 ml-2">— Digital stream animation mode</span>
              </div>
              <div>
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">clear</span>
                <span className="text-slate-600 dark:text-slate-400 ml-2">— Clear terminal buffer</span>
              </div>
              <div>
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">exit</span>
                <span className="text-slate-600 dark:text-slate-400 ml-2">— Close terminal session</span>
              </div>
            </div>
            <div className="text-[11px] text-slate-500 pt-1">
              Press Tab to autocomplete. Arrow Up/Down cycles history.
            </div>
          </div>
        );
        break;
      }

      case "projects":
      case "work":
      case "portfolio": {
        setPrevPath(currentPath);
        setCurrentPath("/home/hanzla/projects");
        const projectsNode = ROOT_VFS.children?.["projects"];
        const children = projectsNode?.children || {};
        const projectKeys = Object.keys(children).filter((k) => children[k].type === "dir");

        outputNode = (
          <div className="space-y-2 py-1 font-mono text-xs">
            <div className="text-slate-500 border-b border-slate-200 dark:border-slate-800 pb-1 flex items-center justify-between">
              <span className="text-sky-700 dark:text-cyan-400 font-bold">~/projects (10 Flagships + 30+ Public Repositories)</span>
              <span className="text-[10px] text-slate-400 dark:text-slate-500">click name to inspect</span>
            </div>

            <div className="space-y-1">
              {projectKeys.map((key) => {
                const getDesc = (k: string) => {
                  switch (k) {
                    case "wa-agent":
                      return "WhatsApp remote control plane (headless daemon, SQLite WAL)";
                    case "franchise-expense":
                      return "Operational ledger platform (Jazz Franchise 7301)";
                    case "reqforge":
                      return "AI requirements engineering & PRD discovery engine";
                    case "pepsi-stock-balance":
                      return "Route inventory & vehicle delivery reconciliation";
                    case "github-repo-agent-skill":
                      return "Autonomous verification engine for agent workflows";
                    case "whatsapp-widget-daemon":
                      return "Headless WebSocket and IPC daemon bridge";
                    case "whatsapp-contact-exporter":
                      return "Cross-platform CLI contact extraction tool";
                    case "twitter-ai-extension":
                      return "Context-aware AI auto-reply browser extension";
                    case "kernalx":
                      return "Operating system architecture simulator (JavaFX)";
                    case "batterymoniter":
                      return "System tray battery watcher with audio alerts";
                    default:
                      return "";
                  }
                };

                return (
                  <div
                    key={key}
                    onClick={() => executeCommand(`cd ${key}`)}
                    className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between py-1 px-1.5 rounded hover:bg-slate-200/60 dark:hover:bg-slate-800/60 cursor-pointer transition-colors"
                  >
                    <span className="text-sky-700 dark:text-cyan-400 hover:underline font-bold w-64 shrink-0">
                      {key}/
                    </span>
                    <span className="text-slate-600 dark:text-slate-400 text-[11px] truncate">
                      {getDesc(key)}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[11px]">
              <span
                onClick={() => executeCommand("cat all_public_repos.txt")}
                className="text-emerald-700 dark:text-emerald-400 hover:underline cursor-pointer font-medium"
              >
                all_public_repos.txt (click to print complete catalog)
              </span>
              <a
                href="/projects"
                target="_blank"
                rel="noreferrer"
                className="text-slate-500 hover:text-sky-600 dark:hover:text-slate-300 transition-colors"
              >
                web directory [↗]
              </a>
            </div>
          </div>
        );
        break;
      }

      case "about":
      case "bio": {
        outputNode = (
          <div className="py-2 px-3 rounded bg-slate-100/90 dark:bg-[#050811] border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300 font-mono text-xs whitespace-pre-wrap leading-relaxed max-h-[50vh] overflow-y-auto">
            {ROOT_VFS.children?.["about.txt"]?.content}
          </div>
        );
        break;
      }

      case "resume":
      case "cv": {
        outputNode = (
          <div className="py-3 px-4 rounded-xl bg-slate-100/90 dark:bg-[#050811] border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-mono text-xs space-y-2 leading-relaxed">
            <div className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-2">
              <span>●</span> Direct Verified Credentials & CV Access
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              For verified employment offers, direct client engagements, or background verification, Hanzla Ahmad&apos;s official CV is provided directly upon verified request.
            </p>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap gap-3">
              <a
                href="https://wa.me/923266900001?text=Hi%20Hanzla,%20requesting%20your%20official%20CV%20for%20an%20opportunity."
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold"
              >
                ➔ Request on WhatsApp (+92 326 6900001)
              </a>
              <a
                href="mailto:hanzlaahmadch@gmail.com?subject=CV%20Request%20-%20Hanzla%20Ahmad"
                className="text-sky-600 dark:text-cyan-400 hover:underline font-semibold"
              >
                ➔ Request via Email (hanzlaahmadch@gmail.com)
              </a>
            </div>
          </div>
        );
        break;
      }

      case "contact":
      case "contact-info":
      case "contact_info": {
        setPrevPath(currentPath);
        setCurrentPath("/home/hanzla/contact");
        outputNode = (
          <div className="space-y-2 py-1 font-mono text-xs text-slate-700 dark:text-slate-300">
            <div className="text-sky-700 dark:text-cyan-400 font-bold border-b border-slate-200 dark:border-slate-800 pb-1">
              CONTACT & REACHABILITY:
            </div>
            <div className="space-y-1.5 pl-1">
              <div>
                <span className="text-slate-500 w-24 inline-block">whatsapp:</span>
                <a
                  href="https://wa.me/923266900001"
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-700 dark:text-emerald-400 hover:underline font-bold"
                >
                  +92 326 6900001 (wa.me/923266900001)
                </a>
                <span className="text-slate-400 dark:text-slate-500 text-[10px] ml-2">(direct chat)</span>
              </div>
              <div>
                <span className="text-slate-500 w-24 inline-block">email:</span>
                <span
                  onClick={() => executeCommand("get email")}
                  className="text-emerald-700 dark:text-emerald-400 hover:underline cursor-pointer font-bold"
                >
                  hanzlaahmadch@gmail.com
                </span>
                <span className="text-slate-400 dark:text-slate-500 text-[10px] ml-2">(click to copy)</span>
              </div>
              <div>
                <span className="text-slate-500 w-24 inline-block">github:</span>
                <a
                  href="https://github.com/hanzlaahmadcheema"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-700 dark:text-cyan-400 hover:underline"
                >
                  https://github.com/hanzlaahmadcheema
                </a>
              </div>
              <div>
                <span className="text-slate-500 w-24 inline-block">linkedin:</span>
                <a
                  href="https://linkedin.com/in/hanzlaahmadcheema"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-700 dark:text-sky-400 hover:underline"
                >
                  https://linkedin.com/in/hanzlaahmadcheema
                </a>
              </div>
              <div>
                <span className="text-slate-500 w-24 inline-block">location:</span>
                <span className="text-slate-800 dark:text-slate-200">Lahore, Pakistan (PKT / UTC+5)</span>
              </div>
            </div>
          </div>
        );
        break;
      }

      case "hire":
      case "hiring":
      case "recruiter":
      case "hr": {
        outputNode = (
          <div className="space-y-3 py-1 font-mono text-xs text-slate-700 dark:text-slate-300">
            <div className="text-sky-700 dark:text-cyan-400 font-bold border-b border-slate-200 dark:border-slate-800 pb-1 flex items-center justify-between">
              <span>HIRING & COLLABORATION PROFILE</span>
              <span className="text-emerald-700 dark:text-emerald-400 font-bold">STATUS: AVAILABLE</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* For HR & Recruiters */}
              <div className="p-2.5 rounded bg-slate-100/90 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
                <div className="text-sky-700 dark:text-cyan-300 font-bold text-[11px] uppercase tracking-wider">
                  01 // For Recruiters & Hiring Managers
                </div>
                <div className="text-[11px] text-slate-600 dark:text-slate-400 space-y-1">
                  <div><span className="font-semibold text-slate-800 dark:text-slate-200">Target Roles:</span> Senior Full-Stack Engineer, Linux Systems Engineer, Founding Engineer</div>
                  <div><span className="font-semibold text-slate-800 dark:text-slate-200">Work Formats:</span> Remote Worldwide • Hybrid (Lahore) • Relocation Considered</div>
                  <div><span className="font-semibold text-slate-800 dark:text-slate-200">Experience:</span> 4+ Years Production • 10 Systems • 30+ Repos</div>
                  <div><span className="font-semibold text-slate-800 dark:text-slate-200">Disciplines:</span> Next.js 15, TypeScript, Node.js, Linux Daemons, PostgreSQL, Docker, AI Pipelines</div>
                </div>
                <div className="pt-1 flex items-center gap-2">
                  <a
                    href="https://wa.me/923266900001?text=Hi%20Hanzla,%20I%20am%20a%20recruiter%20and%20would%20like%20to%20discuss%20an%20engineering%20role."
                    target="_blank"
                    rel="noreferrer"
                    className="px-2 py-0.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[10px] transition-colors"
                  >
                    Chat on WhatsApp [↗]
                  </a>
                  <a
                    href="mailto:hanzlaahmadch@gmail.com?subject=Engineering%20Role%20Discussion%20-%20Hanzla%20Ahmad"
                    className="px-2 py-0.5 rounded bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-[10px] transition-colors"
                  >
                    Email Brief
                  </a>
                </div>
              </div>

              {/* For Founders & Project Clients */}
              <div className="p-2.5 rounded bg-slate-100/90 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
                <div className="text-sky-700 dark:text-cyan-300 font-bold text-[11px] uppercase tracking-wider">
                  02 // For Founders & Project Clients
                </div>
                <div className="text-[11px] text-slate-600 dark:text-slate-400 space-y-1">
                  <div><span className="font-semibold text-slate-800 dark:text-slate-200">Scope:</span> Custom Web Platforms, Linux Daemons, Dual-Shift Ledgers, LLM/RAG Agents</div>
                  <div><span className="font-semibold text-slate-800 dark:text-slate-200">Standards:</span> Multi-stage Docker, Zero-Downtime systemd, WAL storage, Sub-50ms execution</div>
                  <div><span className="font-semibold text-slate-800 dark:text-slate-200">Availability:</span> Immediate contract kickoff • Direct founder-to-engineer communication</div>
                </div>
                <div className="pt-1 flex items-center gap-2">
                  <a
                    href="https://wa.me/923266900001?text=Hi%20Hanzla,%20I%20have%20a%20project%20and%20would%20like%20to%20discuss%20scope%20and%20timeline."
                    target="_blank"
                    rel="noreferrer"
                    className="px-2 py-0.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[10px] transition-colors"
                  >
                    WhatsApp Project Chat [↗]
                  </a>
                  <a
                    href="mailto:hanzlaahmadch@gmail.com?subject=Project%20Scope%20Inquiry%20-%20Hanzla%20Ahmad"
                    className="px-2 py-0.5 rounded bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-[10px] transition-colors"
                  >
                    Email RFP
                  </a>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-slate-500 flex items-center justify-between">
              <span>Direct Phone/WhatsApp: +92 326 6900001</span>
              <span>Type 'whatsapp' to open WhatsApp directly</span>
            </div>
          </div>
        );
        break;
      }

      case "whatsapp":
      case "wa": {
        window.open("https://wa.me/923266900001", "_blank");
        outputNode = (
          <div className="space-y-1.5 py-1 font-mono text-xs text-slate-700 dark:text-slate-300">
            <div className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-2">
              <span>WHATSAPP DIRECT CONNECTION</span>
            </div>
            <div>
              <span className="text-slate-500 w-24 inline-block">phone:</span>
              <span
                onClick={() => executeCommand("get phone")}
                className="text-emerald-700 dark:text-emerald-400 hover:underline cursor-pointer font-bold"
              >
                +92 326 6900001
              </span>
              <span className="text-slate-400 dark:text-slate-500 text-[10px] ml-2">(click to copy)</span>
            </div>
            <div>
              <span className="text-slate-500 w-24 inline-block">direct link:</span>
              <a
                href="https://wa.me/923266900001"
                target="_blank"
                rel="noreferrer"
                className="text-sky-700 dark:text-cyan-400 hover:underline font-bold"
              >
                https://wa.me/923266900001
              </a>
            </div>
            <div className="text-slate-500 text-[11px] pt-0.5">
              Opening WhatsApp chat in a new tab for direct hiring and project scoping.
            </div>
          </div>
        );
        break;
      }

      case "email":
      case "mail": {
        executeCommand("get email");
        return;
      }

      case "skills":
      case "tech":
      case "stack": {
        setPrevPath(currentPath);
        setCurrentPath("/home/hanzla/capabilities");
        outputNode = (
          <div className="space-y-2 py-1 font-mono text-xs">
            <div className="text-sky-700 dark:text-cyan-400 font-bold border-b border-slate-200 dark:border-slate-800 pb-1">
              CORE DOMAINS (6 PILLARS)
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2 rounded bg-slate-100/90 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                <span className="text-sky-700 dark:text-cyan-300 font-bold">1. Web Architecture:</span> Next.js 15, React 19, TypeScript, Tailwind CSS
              </div>
              <div className="p-2 rounded bg-slate-100/90 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                <span className="text-sky-700 dark:text-cyan-300 font-bold">2. Linux Daemons:</span> Systemd, Headless services, Unix sockets, Bash
              </div>
              <div className="p-2 rounded bg-slate-100/90 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                <span className="text-sky-700 dark:text-cyan-300 font-bold">3. Cloud & Edge:</span> Docker, Ubuntu VPS, Nginx, Cloudflare D1
              </div>
              <div className="p-2 rounded bg-slate-100/90 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                <span className="text-sky-700 dark:text-cyan-300 font-bold">4. Persistence:</span> PostgreSQL, SQLite WAL mode, Prisma, Drizzle
              </div>
              <div className="p-2 rounded bg-slate-100/90 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                <span className="text-sky-700 dark:text-cyan-300 font-bold">5. Generative AI:</span> Gemini 2.0 API, RAG, Autonomous agent skills
              </div>
              <div className="p-2 rounded bg-slate-100/90 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                <span className="text-sky-700 dark:text-cyan-300 font-bold">6. Retail POS:</span> Multi-shift cash reconciliations, route distribution
              </div>
            </div>
            <div className="text-[10px] text-slate-500 pt-1">
              In ~/capabilities. Type 'cat 01_web_architecture.txt' for specifications.
            </div>
          </div>
        );
        break;
      }

      case "home": {
        setPrevPath(currentPath);
        setCurrentPath("/home/hanzla");
        executeCommand("ls");
        return;
      }

      case "back": {
        executeCommand("cd ..");
        return;
      }

      case "pwd": {
        outputNode = <div className="text-cyan-300">{currentPath}</div>;
        break;
      }

      case "whoami": {
        outputNode = (
          <div className="space-y-1 text-slate-300 font-mono text-xs">
            <div className="text-emerald-400 font-bold">hanzla (UID 1000, GID 1000)</div>
            <div className="text-slate-400">Full-Stack & Systems Developer // Cheemæ</div>
            <div className="text-slate-400">Host: cheema-node (Ubuntu 24.04 LTS x86_64)</div>
          </div>
        );
        break;
      }

      case "date": {
        const now = new Date();
        const pktTime = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Karachi",
          dateStyle: "full",
          timeStyle: "long",
        }).format(now);
        outputNode = <div className="text-slate-300 font-mono text-xs">{pktTime} (PKT / UTC+5)</div>;
        break;
      }

      case "clear":
      case "cls": {
        setHistory([]);
        return;
      }

      case "exit":
      case "quit": {
        onClose();
        return;
      }

      case "matrix": {
        setIsMatrixActive(true);
        outputNode = (
          <div className="text-emerald-400 font-bold animate-pulse font-mono text-xs">
            Matrix stream initialized. Press ESC or click Close to exit.
          </div>
        );
        break;
      }

      case "quote": {
        const quotes = [
          `"Simplicity is prerequisite for reliability." — Edsger W. Dijkstra`,
          `"Controlling complexity is the essence of computer programming." — Brian Kernighan`,
          `"Make it work, make it right, make it fast — in that strict order." — Kent Beck`,
          `"Deterministic systems are built on reproducible state, not optimistic concurrency."`,
          `"There is no cloud; it's just someone else's Linux computer supervised by systemd."`,
          `"Premature optimization is the root of all evil; premature distributed systems is the rest."`,
        ];
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        outputNode = <div className="text-amber-300 italic py-1 font-mono text-xs">{randomQuote}</div>;
        break;
      }

      case "sudo": {
        outputNode = (
          <div className="text-red-400 space-y-1 font-mono text-xs">
            <div>[sudo] password for hanzla: **********</div>
            <div className="font-bold">hanzla is not in the sudoers file. This incident will be reported to /var/log/auth.log.</div>
          </div>
        );
        break;
      }

      case "echo": {
        outputNode = <div className="text-slate-300 font-mono text-xs">{fullArg}</div>;
        break;
      }

      case "uname": {
        outputNode = (
          <div className="text-slate-300 font-mono text-xs">
            Linux cheema-node 6.8.0-45-generic #45-Ubuntu SMP PREEMPT_DYNAMIC x86_64 GNU/Linux
          </div>
        );
        break;
      }

      case "neofetch":
      case "fetch":
      case "specs": {
        outputNode = (
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 py-2 text-xs font-mono">
            <pre className="text-cyan-400 select-none leading-tight shrink-0 hidden sm:block">
{`          ___          
         (.. \\         
         (<> |         
        / __  \\        
       ( /  \\ /|       
      _/\\ __)/_)       
      \\/-____\\/        
    LINUX X86_64       `}
            </pre>
            <div className="space-y-1">
              <div className="text-emerald-400 font-bold">
                hanzla<span className="text-slate-400">@</span>cheema-node
              </div>
              <div className="text-slate-600">--------------------------</div>
              <div><span className="text-cyan-400">OS:</span> Ubuntu 24.04.1 LTS (Linux x86_64)</div>
              <div><span className="text-cyan-400">Host:</span> ThinkPad / High-Performance Node</div>
              <div><span className="text-cyan-400">Kernel:</span> 6.8.0-45-generic</div>
              <div><span className="text-cyan-400">Uptime:</span> 142 days, 18 hours, 32 mins</div>
              <div><span className="text-cyan-400">Shell:</span> zsh 5.9 (x86_64-pc-linux-gnu)</div>
              <div><span className="text-cyan-400">Terminal:</span> browser-pty v2.4.0</div>
              <div><span className="text-cyan-400">CPU:</span> Intel Core i7 (8 Cores @ 4.80GHz)</div>
              <div><span className="text-cyan-400">Memory:</span> 6144MiB / 16384MiB (38% used)</div>
              <div><span className="text-cyan-400">Daemons:</span> WA-Agent, Nginx, PostgreSQL, Tailscale</div>
              <div><span className="text-cyan-400">Location:</span> Lahore, Pakistan (PKT / UTC+5)</div>
              <div><span className="text-cyan-400">Status:</span> <span className="text-emerald-400">Available for systems engineering</span></div>
              <div className="flex gap-1.5 pt-2">
                <span className="w-4 h-2.5 bg-black inline-block rounded-xs" />
                <span className="w-4 h-2.5 bg-red-500 inline-block rounded-xs" />
                <span className="w-4 h-2.5 bg-green-500 inline-block rounded-xs" />
                <span className="w-4 h-2.5 bg-yellow-500 inline-block rounded-xs" />
                <span className="w-4 h-2.5 bg-blue-500 inline-block rounded-xs" />
                <span className="w-4 h-2.5 bg-purple-500 inline-block rounded-xs" />
                <span className="w-4 h-2.5 bg-cyan-500 inline-block rounded-xs" />
                <span className="w-4 h-2.5 bg-white inline-block rounded-xs" />
              </div>
            </div>
          </div>
        );
        break;
      }

      case "status":
      case "top":
      case "htop": {
        outputNode = (
          <div className="space-y-2 py-1 text-xs font-mono">
            <div className="text-sky-700 dark:text-cyan-400 font-bold flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-1">
              <span>SUPERVISED SERVICES (systemd)</span>
              <span className="text-[11px] text-emerald-700 dark:text-emerald-400 font-bold">ACTIVE (5/5)</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-slate-700 dark:text-slate-300">
                <thead>
                  <tr className="text-slate-500 text-[11px] border-b border-slate-200 dark:border-slate-800/80">
                    <th className="pb-1 pr-3">UNIT</th>
                    <th className="pb-1 pr-3">LOAD</th>
                    <th className="pb-1 pr-3">ACTIVE</th>
                    <th className="pb-1 pr-3">SUB</th>
                    <th className="pb-1">PID / DESCRIPTION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800/40 text-xs">
                  <tr>
                    <td className="py-1 text-sky-700 dark:text-cyan-300 font-medium pr-3">wa-agent.service</td>
                    <td className="py-1 text-slate-500 dark:text-slate-400 pr-3">loaded</td>
                    <td className="py-1 text-emerald-700 dark:text-emerald-400 font-bold pr-3">active</td>
                    <td className="py-1 text-emerald-600 dark:text-emerald-300 pr-3">running</td>
                    <td className="py-1 text-slate-700 dark:text-slate-300">1024 (WhatsApp Control Plane)</td>
                  </tr>
                  <tr>
                    <td className="py-1 text-sky-700 dark:text-cyan-300 font-medium pr-3">nginx.service</td>
                    <td className="py-1 text-slate-500 dark:text-slate-400 pr-3">loaded</td>
                    <td className="py-1 text-emerald-700 dark:text-emerald-400 font-bold pr-3">active</td>
                    <td className="py-1 text-emerald-600 dark:text-emerald-300 pr-3">running</td>
                    <td className="py-1 text-slate-700 dark:text-slate-300">812 (Reverse Proxy / Ports 80, 443)</td>
                  </tr>
                  <tr>
                    <td className="py-1 text-sky-700 dark:text-cyan-300 font-medium pr-3">postgresql.service</td>
                    <td className="py-1 text-slate-500 dark:text-slate-400 pr-3">loaded</td>
                    <td className="py-1 text-emerald-700 dark:text-emerald-400 font-bold pr-3">active</td>
                    <td className="py-1 text-emerald-600 dark:text-emerald-300 pr-3">running</td>
                    <td className="py-1 text-slate-700 dark:text-slate-300">904 (PostgreSQL 16 Engine)</td>
                  </tr>
                  <tr>
                    <td className="py-1 text-sky-700 dark:text-cyan-300 font-medium pr-3">tailscale.service</td>
                    <td className="py-1 text-slate-500 dark:text-slate-400 pr-3">loaded</td>
                    <td className="py-1 text-emerald-700 dark:text-emerald-400 font-bold pr-3">active</td>
                    <td className="py-1 text-emerald-600 dark:text-emerald-300 pr-3">running</td>
                    <td className="py-1 text-slate-700 dark:text-slate-300">650 (WireGuard Mesh 100.84.21.9)</td>
                  </tr>
                  <tr>
                    <td className="py-1 text-sky-700 dark:text-cyan-300 font-medium pr-3">pyside6-battery.service</td>
                    <td className="py-1 text-slate-500 dark:text-slate-400 pr-3">loaded</td>
                    <td className="py-1 text-emerald-700 dark:text-emerald-400 font-bold pr-3">active</td>
                    <td className="py-1 text-emerald-600 dark:text-emerald-300 pr-3">running</td>
                    <td className="py-1 text-slate-700 dark:text-slate-300">1140 (Hardware Watcher Daemon)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="text-[11px] text-slate-500 pt-1">
              Memory: 6.14GB / 16GB (38%) • Load average: 0.22, 0.18, 0.14
            </div>
          </div>
        );
        break;
      }

      case "cd": {
        let target = fullArg;
        if (!target || target === "~") {
          setPrevPath(currentPath);
          setCurrentPath("/home/hanzla");
          outputNode = null;
          break;
        }

        if (target === "-") {
          const next = prevPath;
          setPrevPath(currentPath);
          setCurrentPath(next);
          outputNode = <div className="text-cyan-300 font-mono text-xs">{next}</div>;
          break;
        }

        if (target.toLowerCase() === "contact info" || target.toLowerCase() === "contact-info") {
          target = "contact";
        }

        const candidatePath = resolvePath(currentPath, target);
        const node = getNode(candidatePath);

        if (!node) {
          outputNode = (
            <div className="text-red-400 font-mono text-xs">
              cd: no such file or directory: {target}
            </div>
          );
        } else if (node.type !== "dir") {
          outputNode = (
            <div className="text-red-400 font-mono text-xs">
              cd: not a directory: {target}
            </div>
          );
        } else {
          setPrevPath(currentPath);
          setCurrentPath(candidatePath);
          outputNode = null;
        }
        break;
      }

      case "ls":
      case "dir":
      case "ll":
      case "la": {
        const isLong = cmd === "ll" || args.includes("-l") || args.includes("-la") || args.includes("-al");
        const isAll = cmd === "la" || args.includes("-a") || args.includes("-la") || args.includes("-al");

        let targetArg = args.filter((a) => !a.startsWith("-")).join(" ").trim();
        if (targetArg.toLowerCase() === "contact info") targetArg = "contact";
        const targetPath = targetArg ? resolvePath(currentPath, targetArg) : currentPath;

        const targetNode = getNode(targetPath);

        if (!targetNode) {
          outputNode = (
            <div className="text-red-400 font-mono text-xs">
              ls: cannot access '{targetArg}': No such file or directory
            </div>
          );
        } else if (targetNode.type !== "dir") {
          outputNode = <div className="text-slate-300 font-mono text-xs">{targetNode.name}</div>;
        } else {
          const children = targetNode.children || {};
          const names = Object.keys(children).filter((name) => {
            if (name.startsWith(".") && !isAll) return false;
            return true;
          });

          if (isLong) {
            outputNode = (
              <div className="space-y-1 text-xs font-mono py-1">
                <div className="text-slate-500 text-[11px]">total {names.length * 4}</div>
                {names.map((name) => {
                  const item = children[name];
                  const isDir = item.type === "dir";
                  const isExec = item.type === "executable";
                  const isLink = item.type === "link";
                  return (
                    <div key={name} className="flex items-center gap-3 sm:gap-4 font-mono">
                      <span className="text-slate-500 w-24 shrink-0">
                        {item.permissions || (isDir ? "drwxr-xr-x" : "-rw-r--r--")}
                      </span>
                      <span className="text-slate-500 w-12 text-right shrink-0">{item.size || "4.0K"}</span>
                      <span className="text-slate-500 w-24 shrink-0 hidden sm:inline">
                        {item.modified || "Oct 25 12:00"}
                      </span>
                      <span
                        className={`font-semibold cursor-pointer hover:underline ${
                          isDir
                            ? "text-sky-700 dark:text-cyan-400"
                            : isExec
                            ? "text-emerald-700 dark:text-emerald-400"
                            : isLink
                            ? "text-sky-600 dark:text-sky-300"
                            : name.endsWith(".ts") || name.endsWith(".json")
                            ? "text-amber-700 dark:text-amber-300"
                            : "text-slate-800 dark:text-slate-200"
                        }`}
                        onClick={() => {
                          if (isDir) {
                            executeCommand(`cd ${name}`);
                          } else {
                            executeCommand(`cat ${name}`);
                          }
                        }}
                      >
                        {name}
                        {isDir ? "/" : isExec ? "*" : isLink ? "@" : ""}
                      </span>
                    </div>
                  );
                })}
              </div>
            );
          } else {
            // Standard Unix multi-column listing
            outputNode = (
              <div className="flex flex-wrap gap-x-6 gap-y-1.5 py-1 text-xs font-mono">
                {names.map((name) => {
                  const item = children[name];
                  const isDir = item.type === "dir";
                  const isExec = item.type === "executable";
                  const isLink = item.type === "link";

                  return (
                    <span
                      key={name}
                      onClick={() => {
                        if (isDir) {
                          executeCommand(`cd ${name}`);
                        } else {
                          executeCommand(`cat ${name}`);
                        }
                      }}
                      className={`cursor-pointer hover:underline font-semibold ${
                        isDir
                          ? "text-sky-700 dark:text-cyan-400"
                          : isExec
                          ? "text-emerald-700 dark:text-emerald-400"
                          : isLink
                          ? "text-sky-600 dark:text-sky-300"
                          : name.endsWith(".ts") || name.endsWith(".json")
                          ? "text-amber-700 dark:text-amber-300"
                          : "text-slate-800 dark:text-slate-200"
                      }`}
                    >
                      {name}{isDir ? "/" : isExec ? "*" : isLink ? "@" : ""}
                    </span>
                  );
                })}
              </div>
            );
          }
        }
        break;
      }

      case "cat":
      case "head":
      case "more":
      case "less": {
        if (!fullArg) {
          outputNode = <div className="text-amber-400 font-mono text-xs">cat: missing file argument</div>;
          break;
        }

        const filePath = resolvePath(currentPath, fullArg);
        const node = getNode(filePath);

        if (!node) {
          outputNode = (
            <div className="text-red-400 font-mono text-xs">
              cat: {fullArg}: No such file or directory
            </div>
          );
        } else if (node.type === "dir") {
          outputNode = (
            <div className="text-red-400 font-mono text-xs">
              cat: {fullArg}: Is a directory
            </div>
          );
        } else {
          outputNode = (
            <div className="py-2.5 px-3.5 rounded bg-[#050811] border border-slate-800 text-slate-300 font-mono text-xs whitespace-pre-wrap leading-relaxed max-h-[50vh] overflow-y-auto">
              {node.content}
            </div>
          );
        }
        break;
      }

      case "get":
      case "curl":
      case "fetch_item": {
        const item = fullArg.toLowerCase();
        if (!item) {
          outputNode = (
            <div className="space-y-1 text-slate-300 font-mono text-xs">
              <div className="text-cyan-400 font-bold">GET UTILITY</div>
              <div>Usage: get &lt;target&gt; (e.g. get email, get github, get resume, get wa-agent)</div>
            </div>
          );
          break;
        }

        if (item === "email") {
          navigator.clipboard.writeText("hanzlaahmadch@gmail.com");
          setCopyFeedback("Copied to clipboard");
          setTimeout(() => setCopyFeedback(null), 3000);
          outputNode = (
            <div className="space-y-1 text-emerald-400 font-mono text-xs">
              <div className="font-bold">Copied to clipboard: hanzlaahmadch@gmail.com</div>
              <div className="text-slate-400">
                mailto: <a href="mailto:hanzlaahmadch@gmail.com" className="text-cyan-400 hover:underline">hanzlaahmadch@gmail.com</a>
              </div>
            </div>
          );
        } else if (item === "whatsapp" || item === "wa") {
          window.open("https://wa.me/923266900001", "_blank");
          outputNode = (
            <div className="text-emerald-400 font-mono text-xs">
              Opening WhatsApp (https://wa.me/923266900001)
            </div>
          );
        } else if (item === "phone" || item === "tel") {
          navigator.clipboard.writeText("+92 326 6900001");
          setCopyFeedback("Copied to clipboard");
          setTimeout(() => setCopyFeedback(null), 3000);
          outputNode = (
            <div className="space-y-1 text-emerald-400 font-mono text-xs">
              <div className="font-bold">Copied to clipboard: +92 326 6900001</div>
              <div className="text-slate-400">
                WhatsApp: <a href="https://wa.me/923266900001" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">https://wa.me/923266900001</a>
              </div>
            </div>
          );
        } else if (item === "hire" || item === "recruiter" || item === "hr") {
          executeCommand("hire");
          return;
        } else if (item === "resume") {
          executeCommand("resume");
          return;
        } else if (item === "github") {
          window.open("https://github.com/hanzlaahmadcheema", "_blank");
          outputNode = (
            <div className="text-emerald-400 font-mono text-xs">
              Opening https://github.com/hanzlaahmadcheema
            </div>
          );
        } else if (item === "linkedin") {
          window.open("https://linkedin.com/in/hanzlaahmadcheema", "_blank");
          outputNode = (
            <div className="text-emerald-400 font-mono text-xs">
              Opening https://linkedin.com/in/hanzlaahmadcheema
            </div>
          );
        } else if (item === "wa-agent" || item === "wa") {
          window.open("https://github.com/hanzlaahmadcheema/WA-Agent", "_blank");
          outputNode = (
            <div className="text-emerald-400 font-mono text-xs">
              Opening WA-Agent repository
            </div>
          );
        } else if (item === "reqforge") {
          window.open("https://ha-reqforge.vercel.app/", "_blank");
          outputNode = (
            <div className="text-emerald-400 font-mono text-xs">
              Opening ReqForge platform
            </div>
          );
        } else if (item === "franchise" || item === "franchise-expense") {
          window.open("https://github.com/hanzlaahmadcheema/franchise-expense-system", "_blank");
          outputNode = (
            <div className="text-emerald-400 font-mono text-xs">
              Opening Franchise Expense System repository
            </div>
          );
        } else {
          const checkNode = getNode(resolvePath(currentPath, fullArg));
          if (checkNode && checkNode.url) {
            window.open(checkNode.url, "_blank");
            outputNode = (
              <div className="text-emerald-400 font-mono text-xs">
                Opening {checkNode.url}
              </div>
            );
          } else if (checkNode && checkNode.content) {
            outputNode = (
              <div className="py-2.5 px-3.5 rounded bg-[#050811] border border-slate-800 text-slate-300 font-mono text-xs whitespace-pre-wrap leading-relaxed max-h-[50vh] overflow-y-auto">
                {checkNode.content}
              </div>
            );
          } else {
            outputNode = (
              <div className="text-amber-400 font-mono text-xs">
                get: '{fullArg}' not recognized.
              </div>
            );
          }
        }
        break;
      }

      case "open": {
        const target = fullArg.toLowerCase();
        if (target === "whatsapp" || target === "wa") {
          window.open("https://wa.me/923266900001", "_blank");
          outputNode = <div className="text-emerald-400 font-mono text-xs">Opening WhatsApp (wa.me/923266900001)</div>;
        } else if (target === "hire" || target === "hiring" || target === "recruiter") {
          executeCommand("hire");
          return;
        } else if (target === "github") {
          window.open("https://github.com/hanzlaahmadcheema", "_blank");
          outputNode = <div className="text-emerald-400 font-mono text-xs">Opening github.com/hanzlaahmadcheema</div>;
        } else if (target === "linkedin") {
          window.open("https://linkedin.com/in/hanzlaahmadcheema", "_blank");
          outputNode = <div className="text-emerald-400 font-mono text-xs">Opening linkedin.com/in/hanzlaahmadcheema</div>;
        } else if (target === "email" || target === "mail") {
          window.location.href = "mailto:hanzlaahmadch@gmail.com";
          outputNode = <div className="text-emerald-400 font-mono text-xs">Launching mailto:hanzlaahmadch@gmail.com</div>;
        } else if (target === "projects" || target === "archive") {
          window.location.href = "/projects";
          outputNode = <div className="text-emerald-400 font-mono text-xs">Navigating to /projects</div>;
        } else if (target.startsWith("http://") || target.startsWith("https://")) {
          window.open(fullArg, "_blank");
          outputNode = <div className="text-emerald-400 font-mono text-xs">Opening {fullArg}</div>;
        } else {
          outputNode = (
            <div className="text-amber-400 font-mono text-xs">
              open: unknown target '{fullArg}'
            </div>
          );
        }
        break;
      }

      default: {
        const lower = trimmed.toLowerCase();
        if (lower.includes("hire") || lower.includes("recruit") || lower.includes("job") || lower.includes("contract")) {
          executeCommand("hire");
          return;
        }
        if (lower.includes("whatsapp") || lower === "wa") {
          executeCommand("whatsapp");
          return;
        }
        if (lower.includes("project") || lower.includes("work")) {
          executeCommand("projects");
          return;
        }
        if (lower.includes("about") || lower.includes("who")) {
          executeCommand("about");
          return;
        }
        if (lower.includes("contact") || lower.includes("reach") || lower.includes("email")) {
          executeCommand("contact");
          return;
        }
        if (lower.includes("resume") || lower.includes("cv")) {
          executeCommand("resume");
          return;
        }
        if (lower.includes("skill") || lower.includes("stack")) {
          executeCommand("skills");
          return;
        }
        if (lower.includes("status")) {
          executeCommand("status");
          return;
        }
        if (lower.includes("neofetch") || lower.includes("spec")) {
          executeCommand("neofetch");
          return;
        }

        outputNode = (
          <div className="space-y-1 font-mono text-xs">
            <div className="text-red-400">
              zsh: command not found: {trimmed}
            </div>
            <div className="text-slate-500 text-[11px]">
              Type <span className="text-cyan-300 font-bold">'help'</span> for available commands (e.g. projects, contact, about, ls, cd).
            </div>
          </div>
        );
      }
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        command: trimmed,
        path: getDisplayPath(currentPath),
        output: outputNode,
      },
    ]);
  };

  // Keyboard Handlers
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const value = input;
      setInput("");
      executeCommand(value);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextIndex = historyIndex === -1 ? cmdHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(cmdHistory[nextIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      if (historyIndex < cmdHistory.length - 1) {
        const nextIndex = historyIndex + 1;
        setHistoryIndex(nextIndex);
        setInput(cmdHistory[nextIndex]);
      } else {
        setHistoryIndex(-1);
        setInput("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      handleTabCompletion();
    } else if (e.key === "Escape" && isMatrixActive) {
      setIsMatrixActive(false);
    }
  };

  // Tab Autocompletion Engine
  const handleTabCompletion = () => {
    const raw = input.trimStart();
    const tokens = raw.split(" ");

    if (tokens.length === 1) {
      const partial = tokens[0].toLowerCase();
      const allCommands = [
        "hire",
        "whatsapp",
        "wa",
        "projects",
        "about",
        "resume",
        "contact",
        "skills",
        "help",
        "ls",
        "cd",
        "cat",
        "pwd",
        "get",
        "open",
        "neofetch",
        "status",
        "whoami",
        "date",
        "matrix",
        "quote",
        "clear",
        "exit",
        "sudo",
      ];
      const matches = allCommands.filter((c) => c.startsWith(partial));
      if (matches.length === 1) {
        setInput(matches[0] + " ");
      }
      return;
    }

    const cmd = tokens[0];
    const partialArg = tokens.slice(1).join(" ");
    const currentNode = getNode(currentPath);
    if (!currentNode || !currentNode.children) return;

    const childNames = Object.keys(currentNode.children);
    const matches = childNames.filter((name) =>
      name.toLowerCase().startsWith(partialArg.toLowerCase())
    );

    if (matches.length === 1) {
      const match = matches[0];
      const isDir = currentNode.children[match]?.type === "dir";
      setInput(`${cmd} ${match}${isDir ? "/" : " "}`);
    }
  };

  if (!isOpen) return null;

  // Clean, Minimalist Monospace Command Actions
  const CLI_ACTIONS = [
    { label: "hire", cmd: "hire" },
    { label: "whatsapp", cmd: "whatsapp" },
    { label: "projects", cmd: "projects" },
    { label: "contact", cmd: "contact" },
    { label: "about", cmd: "about" },
    { label: "skills", cmd: "skills" },
    { label: "status", cmd: "status" },
    { label: "neofetch", cmd: "neofetch" },
    { label: "matrix", cmd: "matrix" },
    { label: "help", cmd: "help" },
    { label: "clear", cmd: "clear" },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/25 dark:bg-slate-950/40 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className={`relative flex flex-col bg-white/90 dark:bg-slate-900/65 backdrop-blur-2xl border border-slate-200/90 dark:border-white/10 rounded-xl shadow-2xl shadow-slate-900/20 dark:shadow-cyan-950/40 overflow-hidden font-mono transition-all duration-200 ${
          isMaximized
            ? "w-[98vw] h-[95vh] max-w-none"
            : "w-full max-w-3xl h-[80vh] sm:h-[75vh]"
        }`}
        onClick={(e) => {
          e.stopPropagation();
          inputRef.current?.focus();
        }}
      >
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-100/90 dark:bg-slate-900/75 backdrop-blur-md border-b border-slate-200 dark:border-white/10 shrink-0 select-none">
          <div className="flex items-center gap-2">
            {/* macOS Window Controls */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={onClose}
                className="w-3 h-3 rounded-full bg-[#FF5F56] hover:brightness-110 transition-all flex items-center justify-center group"
                title="Close"
              >
                <X className="w-2 h-2 text-black/60 opacity-0 group-hover:opacity-100" />
              </button>
              <button
                onClick={() => setHistory([])}
                className="w-3 h-3 rounded-full bg-[#FFBD2E] hover:brightness-110 transition-all"
                title="Clear terminal buffer"
              />
              <button
                onClick={() => setIsMaximized(!isMaximized)}
                className="w-3 h-3 rounded-full bg-[#27C93F] hover:brightness-110 transition-all"
                title="Toggle fullscreen"
              />
            </div>

            <div className="flex items-center gap-1.5 ml-3 text-slate-700 dark:text-slate-300 text-xs font-semibold">
              <TerminalIcon className="w-3.5 h-3.5 text-sky-600 dark:text-cyan-400" />
              <span>hanzla@cheema-node:</span>
              <span className="text-sky-600 dark:text-cyan-400">{getDisplayPath(currentPath)}</span>
              <span className="text-slate-400 dark:text-slate-500 text-[10px] hidden sm:inline">(zsh 5.9)</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs">
            {copyFeedback && (
              <span className="text-[11px] text-emerald-800 dark:text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800/40 font-mono">
                {copyFeedback}
              </span>
            )}
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1 text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-white/5 rounded transition-colors"
              title={isMaximized ? "Restore window" : "Maximize window"}
            >
              {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-white/5 rounded transition-colors"
              title="Close terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Minimalist Command Tags Bar */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50/70 dark:bg-slate-950/40 backdrop-blur-md border-b border-slate-200 dark:border-white/5 overflow-x-auto text-[11px] shrink-0 no-scrollbar">
          <span className="text-slate-400 dark:text-slate-500 text-[10px] font-mono tracking-wider shrink-0 mr-1">
            RUN:
          </span>
          {CLI_ACTIONS.map((item) => (
            <button
              key={item.label}
              onClick={(e) => {
                e.stopPropagation();
                executeCommand(item.cmd);
                inputRef.current?.focus();
              }}
              className="px-2 py-0.5 rounded bg-white hover:bg-slate-100 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 hover:border-slate-300 dark:border-white/10 dark:hover:border-cyan-500/30 text-slate-700 hover:text-sky-700 dark:text-slate-300 dark:hover:text-cyan-300 transition-colors shrink-0 font-mono text-[11px] shadow-xs"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Terminal Screen & Logs Area */}
        <div className="flex-1 p-3 sm:p-4 overflow-y-auto space-y-3 font-mono text-xs leading-relaxed text-slate-800 dark:text-slate-200 bg-white/40 dark:bg-slate-950/40">
          {/* Classic UNIX Login MOTD */}
          <div className="space-y-1 text-slate-600 dark:text-slate-400 text-xs border-b border-slate-200 dark:border-white/10 pb-3">
            <div className="text-slate-900 dark:text-white font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              <span>cheema-node (Ubuntu 24.04.1 LTS x86_64, Linux 6.8.0-45-generic)</span>
            </div>
            <div>
              Type <span className="text-sky-700 dark:text-cyan-400 font-bold">'help'</span> for available commands, or <span className="text-sky-700 dark:text-cyan-400 font-bold">'projects'</span>, <span className="text-sky-700 dark:text-cyan-400 font-bold">'contact'</span>, <span className="text-sky-700 dark:text-cyan-400 font-bold">'about'</span> to explore.
            </div>
          </div>

          {/* Matrix Animation Mode */}
          {isMatrixActive && (
            <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/40 text-emerald-400 font-mono text-xs space-y-2 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-emerald-900/60 pb-2">
                <span className="font-bold text-emerald-300">MATRIX TELEMETRY ACTIVE</span>
                <button
                  onClick={() => setIsMatrixActive(false)}
                  className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-700 text-emerald-300 hover:bg-emerald-900 transition-colors text-[10px]"
                >
                  Close (ESC)
                </button>
              </div>
              <div className="space-y-1 select-none font-mono opacity-90 leading-tight">
                <div>01001000 01100001 01101110 01111010 01101100 01100001 00100000 01000001</div>
                <div>01101000 01101101 01100001 01100100 00100000 01000011 01101000 01100101</div>
                <div>01100101 01101101 01111001 00101110 00100000 01010011 01111001 01110011</div>
                <div>01110100 01100101 01101101 01110011 00100000 01000100 01100001 01100101</div>
                <div className="text-emerald-300 font-bold">
                  [DETERMINISTIC_STATE]: WA-Agent active • SQLite WAL committed • System OK
                </div>
              </div>
            </div>
          )}

          {/* Command History Stream */}
          {history.map((entry) => (
            <div key={entry.id} className="space-y-1.5">
              {entry.command && (
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold">hanzla@cheema</span>
                  <span className="text-slate-400 dark:text-slate-500">:</span>
                  <span className="text-sky-700 dark:text-cyan-400 font-bold">{entry.path}</span>
                  <span className="text-slate-400">$</span>
                  <span className="text-slate-900 dark:text-slate-100 font-medium">{entry.command}</span>
                </div>
              )}
              {entry.output && <div className="pl-0 sm:pl-2">{entry.output}</div>}
            </div>
          ))}

          {/* Active Prompt Line */}
          <div className="flex items-center gap-2 text-xs pt-1">
            <span className="text-emerald-700 dark:text-emerald-400 font-bold shrink-0">hanzla@cheema</span>
            <span className="text-slate-400 dark:text-slate-500 shrink-0">:</span>
            <span className="text-sky-700 dark:text-cyan-400 font-bold shrink-0">{getDisplayPath(currentPath)}</span>
            <span className="text-slate-400 shrink-0">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              autoComplete="off"
              autoCapitalize="off"
              spellCheck="false"
              className="flex-1 bg-transparent border-none outline-none text-slate-900 dark:text-slate-100 font-mono text-xs focus:ring-0 p-0"
              placeholder=""
            />
          </div>

          <div ref={terminalEndRef} />
        </div>

        {/* Footer Telemetry Status Bar */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-2 text-[10px] bg-slate-100/90 dark:bg-slate-900/75 backdrop-blur-md border-t border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 shrink-0 select-none">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              <span className="text-slate-700 dark:text-slate-300 font-semibold">TTY: /dev/pts/1</span>
            </div>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-600">|</span>
            <span className="hidden sm:inline font-mono">VFS: IN-MEMORY (SYNC)</span>
          </div>
          <div className="flex items-center gap-2 font-mono">
            <span className="hidden sm:inline">TAB: AUTOCOMPLETE</span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-600">•</span>
            <span className="text-sky-700 dark:text-cyan-400 font-semibold">PKT (UTC+5)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
