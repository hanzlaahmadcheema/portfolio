export interface Project {
  title: string;
  category: "flagship" | "ai" | "daemon";
  href?: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: string[];
  links: {
    icon: string;
    type: string;
    href: string;
  }[];
  metrics?: string;
  architecture?: {
    summary: string;
    tradeoffs: string;
    stackChoice: string;
  };
}

export interface ResumeData {
  name: string;
  initials: string;
  alias: string;
  url: string;
  resumeUrl: string;
  resumeDocxUrl: string;
  location: string;
  locationLink: string;
  timezone: string;
  headline: string;
  overview: string[];
  avatarUrl: string;
  bannerUrl: string;
  skills: string[];
  capabilities: {
    index: string;
    title: string;
    description: string;
    deliverables: string[];
    tags: string[];
  }[];
  contact: {
    email: string;
    tel: string;
    whatsappUrl: string;
    social: Record<string, { name: string; url: string; icon: string }>;
  };
  work: {
    company: string;
    href: string;
    badges: string[];
    location: string;
    title: string;
    start: string;
    end: string;
    description: string;
  }[];
  education: {
    degree: string;
    institution: string;
    location: string;
    start: string;
    end: string;
    coursework: string[];
  }[];
  certifications: {
    issuer: string;
    name: string;
    date: string;
  }[];
  projects: Project[];
}

export const DATA: ResumeData = {
  name: "Hanzla Ahmad",
  initials: "HA",
  alias: "Cheemæ",
  url: "https://hanzlaahmad.com",
  resumeUrl: "/resume.pdf",
  resumeDocxUrl: "/resume.docx",
  location: "Lahore, Pakistan",
  locationLink: "https://www.google.com/maps/place/Lahore,+Pakistan",
  timezone: "Asia/Karachi",
  headline: "Full-Stack & Systems Software Engineer",

  // Expansive Overview (Zero project names mentioned)
  overview: [
    "Full-Stack and Systems Developer focused on engineering resilient software platforms, deterministic background control planes, and production-grade AI pipelines. I specialize in bridging low-level system environments with modern web architectures—delivering applications that remain stable under real operational pressure.",
    "My core discipline centers on building robust software from the ground up: architecting type-safe client surfaces in Next.js and React, writing long-running headless daemons and IPC bridges on Linux, and designing tamper-resistant relational database schemas. Whether resolving cash reconciliation discrepancies for physical commercial franchises or automating multi-stage LLM discovery workflows, I prioritize deterministic state, zero data loss, and sub-second responsiveness.",
    "From bare-metal Linux VPS deployment, Docker containerization, and Nginx reverse proxies to edge-distributed databases and cloud pipelines, I own the complete engineering lifecycle from schema design to production monitoring."
  ],

  avatarUrl: "/avatar.jpg",
  bannerUrl: "/banner.png",

  skills: [
    "TypeScript",
    "Next.js 15",
    "React 19",
    "Python",
    "Node.js",
    "Tailwind CSS",
    "PostgreSQL",
    "SQLite",
    "Prisma ORM",
    "Docker",
    "Linux Systems (Ubuntu)",
    "Nginx Reverse Proxy",
    "Cloudflare Workers & D1",
    "Generative AI & LLMs",
    "RAG & Vector Search",
    "Tailscale Mesh VPN",
    "Bash & Shell Scripting",
    "CI/CD Pipelines",
    "Shopify & Liquid",
    "RESTful & WebSocket APIs",
  ],

  capabilities: [
    {
      index: "01",
      title: "Full-Stack & Modern Web Architecture",
      description:
        "Architecting modern Next.js 15 App Router platforms, React 19 surfaces, type-safe Server Actions, and responsive interfaces with extreme performance.",
      deliverables: [
        "React Server Components (RSC) & Streaming SSR",
        "Type-safe end-to-end data fetching & validations",
        "Responsive, accessible design with Tailwind CSS & micro-motion",
      ],
      tags: ["Next.js 15", "TypeScript", "React 19", "Tailwind CSS"],
    },
    {
      index: "02",
      title: "Linux Systems, Shell & Headless Daemons",
      description:
        "Low-level daemon engineering, process supervision, Unix Domain Socket IPC, background terminal controllers, and automated shell scripting.",
      deliverables: [
        "Headless long-running service daemons with auto-recovery",
        "Inter-Process Communication (IPC) via Unix Domain Sockets",
        "Linux CLI automation, task supervisors, and telemetry monitors",
      ],
      tags: ["Linux (Ubuntu)", "Bash / Shell", "Unix Sockets IPC", "Node Daemons"],
    },
    {
      index: "03",
      title: "Cloud Infrastructure, DevOps & Edge",
      description:
        "Deploying and securing containerized production software across cloud VPS, edge workers, reverse proxies, and automated deployment pipelines.",
      deliverables: [
        "Docker & Docker Compose container orchestration",
        "Nginx reverse proxy, SSL/TLS certificates & WebSocket routing",
        "Cloudflare Workers, D1 distributed edge databases & Tailscale VPN",
        "Automated CI/CD workflows using GitHub Actions",
      ],
      tags: ["Docker", "Nginx", "VPS Deployment", "Cloudflare", "CI/CD"],
    },
    {
      index: "04",
      title: "Data Persistence & Relational Schemas",
      description:
        "Designing normalized relational models, transactional ledgers, local-first SQLite architectures, and zero-downtime database migrations.",
      deliverables: [
        "PostgreSQL & Prisma ORM schema modeling and migrations",
        "High-performance SQLite with Write-Ahead Logging (WAL)",
        "Audit-logged double-entry bookkeeping & multi-shift reconciliations",
      ],
      tags: ["PostgreSQL", "SQLite WAL", "Prisma ORM", "MongoDB"],
    },
    {
      index: "05",
      title: "Generative AI & Autonomous Pipelines",
      description:
        "Integrating multimodal LLMs into operational tooling, building retrieval-augmented generation (RAG) systems, and strict prompt engineering.",
      deliverables: [
        "Automated specification synthesis from unstructured inputs",
        "Semantic search and memory vaults using vector embeddings",
        "Multi-agent operational skills with verified approval gates",
      ],
      tags: ["Gemini 2.0 API", "AI Agents", "Prompt Engineering", "RAG Pipelines"],
    },
    {
      index: "06",
      title: "E-Commerce & Retail POS Operations",
      description:
        "End-to-end commerce platforms, custom Shopify Liquid theme development, and physical Point-of-Sale (POS) hardware synchronization.",
      deliverables: [
        "Custom Shopify Liquid section templates & catalog management",
        "Point-of-Sale (POS) stock deductions & multi-vendor credit ledgers",
        "Automated nightly financial reporting & inventory audits",
      ],
      tags: ["Shopify Liquid", "POS Systems", "Inventory Tracking", "Retail Ops"],
    },
  ],

  contact: {
    email: "hello@hanzlaahmad.com",
    tel: "+92 326 6900001",
    whatsappUrl: "https://wa.me/923266900001?text=Hi%20Hanzla,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20/%20role.",
    social: {
      WhatsApp: {
        name: "WhatsApp",
        url: "https://wa.me/923266900001?text=Hi%20Hanzla,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20/%20role.",
        icon: "message-circle",
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/hanzlaahmadcheema",
        icon: "github",
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/hanzlaahmadcheema",
        icon: "linkedin",
      },
      Email: {
        name: "Email",
        url: "mailto:hello@hanzlaahmad.com",
        icon: "mail",
      },
    },
  },

  work: [
    {
      company: "HA Entertainment",
      href: "https://linkedin.com/in/hanzlaahmadcheema",
      badges: ["Production", "Venture"],
      location: "Lahore, Pakistan",
      title: "Founder & Lead Systems Engineer",
      start: "Jun 2020",
      end: "Present",
      description:
        "Architected and deployed full-stack media infrastructure and custom operational software. Directed continuous deployment pipelines across Vercel and VPS servers, managed DNS/SSL, and integrated scalable REST backends with responsive web surfaces.",
    },
    {
      company: "MedBills MBS",
      href: "https://linkedin.com/in/hanzlaahmadcheema",
      badges: ["Enterprise", "Remote"],
      location: "Lahore, Pakistan",
      title: "Information Technology Administrator",
      start: "Nov 2025",
      end: "Oct 2026",
      description:
        "Overseeing core IT operations and mission-critical web infrastructure. Designed and launched a high-accessibility medical portal with structured data workflows, role-based controls, and operational troubleshooting.",
    },
    {
      company: "Ajwa Mart Sweets & Bakers",
      href: "https://linkedin.com/in/hanzlaahmadcheema",
      badges: ["Retail Operations"],
      location: "Chichawatni, Pakistan",
      title: "IT Systems & POS Specialist",
      start: "Jul 2021",
      end: "Present",
      description:
        "Engineered remote Point-of-Sale (POS) synchronization and stock inventory tracking across 140+ retail units. Built custom Shopify theme sections and automated daily sales reconciliation reports.",
    },
    {
      company: "IT Beam",
      href: "https://linkedin.com/in/hanzlaahmadcheema",
      badges: ["MERN Stack", "Internship"],
      location: "Lahore, Pakistan",
      title: "MERN Stack Developer Intern",
      start: "Jul 2026",
      end: "Sep 2026",
      description:
        "Contributed to full-stack engineering of a Learning Management System (LMS) platform using MongoDB, Express.js, React.js, and Node.js. Built course management, quiz assessment modules, and role-based access control with secure RESTful APIs.",
    },
    {
      company: "DevelopersHub Corporation©",
      href: "https://linkedin.com/in/hanzlaahmadcheema",
      badges: ["Contract"],
      location: "Remote",
      title: "Software Engineering Intern",
      start: "Mar 2025",
      end: "May 2025",
      description:
        "Collaborated on agile feature delivery, code reviews, and Git branching workflows. Optimized REST API endpoints and authored comprehensive integration test suites.",
    },
  ],

  education: [
    {
      degree: "Bachelor of Science in Computer Science (BSCS)",
      institution: "Riphah International University",
      location: "Lahore, Pakistan",
      start: "2022",
      end: "2026",
      coursework: [
        "Data Structures & Algorithms",
        "Operating Systems",
        "Database Systems",
        "Computer Networks",
        "Software Engineering",
        "Object-Oriented Programming",
        "Theory of Automata",
      ],
    },
  ],

  certifications: [
    {
      issuer: "Google Cloud Skills Boost",
      name: "Responsible AI: Applying AI Principles with Google Cloud",
      date: "Oct 2026",
    },
    {
      issuer: "Google Cloud Skills Boost",
      name: "Introduction to Large Language Models",
      date: "Oct 2026",
    },
    {
      issuer: "Google Cloud Skills Boost",
      name: "Introduction to Generative AI",
      date: "Oct 2026",
    },
    {
      issuer: "Cisco Networking Academy",
      name: "Python Essentials 1",
      date: "Oct 2026",
    },
    {
      issuer: "Cisco Networking Academy",
      name: "Linux Unhatched",
      date: "Oct 2026",
    },
    {
      issuer: "Cisco Networking Academy",
      name: "Introduction to Cybersecurity",
      date: "Oct 2026",
    },
    {
      issuer: "Cisco Networking Academy",
      name: "Networking Basics",
      date: "Oct 2026",
    },
    {
      issuer: "Cisco Networking Academy",
      name: "Computer Hardware Basics",
      date: "Oct 2026",
    },
    {
      issuer: "Cisco Networking Academy",
      name: "Operating Systems Basics",
      date: "May 2026",
    },
    {
      issuer: "Cisco Networking Academy",
      name: "JavaScript Essentials 1 & 2",
      date: "Jan & Feb 2026",
    },
    {
      issuer: "Cisco Networking Academy",
      name: "C++ Essentials 2",
      date: "May 2025",
    },
    {
      issuer: "Cisco Networking Academy",
      name: "Introduction to IoT",
      date: "2024",
    },
    {
      issuer: "fondi Inc",
      name: "CEFR B2 Independent English Proficiency Certification",
      date: "Sep 2024",
    },
  ],

  // 100% PUBLIC Featured Systems & Open-Source Projects Only
  projects: [
    {
      title: "WA-Agent — Deterministic WhatsApp Control Plane",
      category: "flagship",
      href: "https://github.com/hanzlaahmadcheema/WA-Agent",
      dates: "2026",
      active: true,
      description:
        "Headless background terminal supervisor and deterministic remote control plane operating over WhatsApp with SQLite persistence and automated process recovery.",
      technologies: ["TypeScript", "Node.js", "WhatsApp Web", "SQLite WAL", "Linux CLI", "Bash"],
      links: [
        {
          type: "Source Code",
          href: "https://github.com/hanzlaahmadcheema/WA-Agent",
          icon: "github",
        },
      ],
      metrics: "24/7 Headless Linux Daemon • SQLite WAL • Sub-50ms Execution",
      architecture: {
        summary:
          "Bridges authenticated WhatsApp Web sessions to a supervised Node.js terminal runner with strict input sandboxing, command whitelisting, and stateful WAL SQLite logging.",
        tradeoffs:
          "Chose SQLite WAL over external DBMS to ensure zero-network local dependency and guaranteed transactional recovery across process restarts.",
        stackChoice:
          "TypeScript on Node.js ensures type safety across terminal process spawns and incoming payload deserialization.",
      },
    },
    {
      title: "Franchise Expense Management System",
      category: "flagship",
      href: "https://github.com/hanzlaahmadcheema/franchise-expense-system",
      dates: "2026",
      active: true,
      description:
        "Production operational finance and multi-shift ledger platform active at Jazz Franchise 7301 for daily cash reconciliations and supplier audit trails.",
      technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
      links: [
        {
          type: "Source Code",
          href: "https://github.com/hanzlaahmadcheema/franchise-expense-system",
          icon: "github",
        },
      ],
      metrics: "Live at Jazz Franchise 7301 • Daily Reconciliations • 100% Auditability",
      architecture: {
        summary:
          "Custom double-entry bookkeeping ledger tailored to telecom franchise workflows, supporting shift changeovers, verified manager sign-offs, and automated balance sheets.",
        tradeoffs:
          "Enforced strict server-side audit logs with immutable timestamps over client calculations to eliminate cash handover discrepancies.",
        stackChoice:
          "React with Tailwind CSS enables rapid cashier input on touchscreen terminals, while PostgreSQL ensures relational integrity across financial ledgers.",
      },
    },
    {
      title: "ReqForge — AI Requirements Engineering Platform",
      category: "flagship",
      href: "https://ha-reqforge.vercel.app",
      dates: "2026",
      active: true,
      description:
        "AI-assisted discovery engine converting unstructured client conversations and voice memos into formal PRDs, architecture specifications, and backlog tasks.",
      technologies: ["Next.js 15", "TypeScript", "Gemini 2.0 API", "Tailwind CSS", "Vercel"],
      links: [
        {
          type: "Live App",
          href: "https://ha-reqforge.vercel.app",
          icon: "globe",
        },
        {
          type: "Source Code",
          href: "https://github.com/hanzlaahmadcheema/ReqForge",
          icon: "github",
        },
      ],
      metrics: "75% Reduction in Client Discovery Time • Production Vercel Deployment",
      architecture: {
        summary:
          "Multi-stage LLM pipeline that extracts functional requirements, user personas, boundary constraints, and generates standardized markdown specifications ready for engineering sprint kickoff.",
        tradeoffs:
          "Employed streaming structured outputs to eliminate latency perception during complex specification generation.",
        stackChoice:
          "Next.js 15 App Router Server Actions directly invoke LLM APIs, preventing client token leakage while keeping rendering server-side.",
      },
    },
    {
      title: "Pepsi Stock Balance — Distribution Route Portal",
      category: "flagship",
      href: "https://github.com/hanzlaahmadcheema/pepsi-stock-balance",
      dates: "2026",
      active: true,
      description:
        "Local-first route inventory portal built with Next.js 15, Prisma ORM, and SQLite to reconcile delivery vehicle inventory against warehouse dispatch sheets.",
      technologies: ["Next.js 15", "TypeScript", "Prisma ORM", "SQLite", "Tailwind CSS"],
      links: [
        {
          type: "Source Code",
          href: "https://github.com/hanzlaahmadcheema/pepsi-stock-balance",
          icon: "github",
        },
      ],
      metrics: "140+ Route SKUs Tracked • Prisma Type-Safe Schema • Zero Stock Mismatch",
      architecture: {
        summary:
          "Streamlines route dispatching by tracking loaded crates, real-time field drop deductions, and returned empty bottles with immediate net balance validation.",
        tradeoffs:
          "Used SQLite with Prisma ORM to allow offline field functionality on driver tablets with instant sync when network reconnects.",
        stackChoice:
          "Prisma ORM provides compile-time guarantee that crate count arithmetic matches across loading, delivery, and return cycles.",
      },
    },
    {
      title: "github-repo-agent-skill — Agentic Verification Engine",
      category: "ai",
      href: "https://github.com/hanzlaahmadcheema/github-repo-agent-skill",
      dates: "2026",
      active: true,
      description:
        "Cross-agent operational skill following modern agentic engineering standards for auditing, improving, releasing, and verifying GitHub repositories with strict approval gates.",
      technologies: ["Python", "AI Agents", "GitHub REST API", "Automation", "CI/CD"],
      links: [
        {
          type: "Source Code",
          href: "https://github.com/hanzlaahmadcheema/github-repo-agent-skill",
          icon: "github",
        },
      ],
      metrics: "Autonomous Agent Tooling • Strict Approval Gates • Release Automation",
      architecture: {
        summary:
          "Implements evidence-based audit trees, issue parsing, and automated metadata reconciliation for repository verification workflows.",
        tradeoffs:
          "Enforced human-in-the-loop approval gates before commit dispatches to prevent unintended mutations.",
        stackChoice:
          "Python typing system guarantees deterministic tool calling across AI agent frameworks.",
      },
    },
    {
      title: "whatsapp-widget-daemon — Headless WebSocket IPC",
      category: "daemon",
      href: "https://github.com/hanzlaahmadcheema/whatsapp-widget-daemon",
      dates: "2025",
      active: true,
      description:
        "Ultra-lightweight headless daemon connecting to WhatsApp WebSockets without Chromium/Puppeteer, broadcasting real-time unread states over Unix Domain Socket IPC for Linux desktop status bars.",
      technologies: ["TypeScript", "Node.js", "Baileys", "Unix Domain Sockets", "Waybar / Linux"],
      links: [
        {
          type: "Source Code",
          href: "https://github.com/hanzlaahmadcheema/whatsapp-widget-daemon",
          icon: "github",
        },
      ],
      metrics: "<25MB Memory Footprint • Unix Domain Socket IPC • Zero Browser Overhead",
      architecture: {
        summary:
          "Direct WebSocket client maintaining end-to-end encryption without headless browsers, exposing a fast JSON Unix socket polled by Waybar and QuickShell desktop widgets.",
        tradeoffs:
          "Direct protocol implementation requires strict session re-authentication handling but uses 95% less RAM than Puppeteer.",
        stackChoice:
          "Node.js with Baileys provides reliable binary protocol parsing with minimal CPU usage.",
      },
    },
    {
      title: "whatsapp-contact-exporter — Standalone Cross-Platform CLI",
      category: "daemon",
      href: "https://github.com/hanzlaahmadcheema/whatsapp-contact-exporter",
      dates: "2025",
      active: true,
      description:
        "Production CLI utility and standalone single-binary application to export unsaved contacts from group chats to structured CSV and VCF formats, packaged with automated GitHub Actions CI/CD.",
      technologies: ["TypeScript", "Node.js", "Vitest", "GitHub Actions", "Packaging CLI"],
      links: [
        {
          type: "Source Code",
          href: "https://github.com/hanzlaahmadcheema/whatsapp-contact-exporter",
          icon: "github",
        },
      ],
      metrics: "Cross-Platform Binaries (Linux/macOS/Windows) • 100% Unit Test Pass Rate",
      architecture: {
        summary:
          "Parses raw session sync dumps, validates E.164 phone numbers, de-duplicates records, and compiles single-file executables via automated multi-architecture CI/CD pipelines.",
        tradeoffs:
          "Bundling runtime into standalone binaries increased artifact size (~40MB) but eliminated Node.js installation prerequisites for end users.",
        stackChoice:
          "Vitest provides sub-second test execution for edge-case contact deduplication rules.",
      },
    },
    {
      title: "Twitter/X Context-Aware AI Auto-Reply Extension",
      category: "ai",
      href: "https://github.com/hanzlaahmadcheema/X-Twitter-Auto-Reply-10x-Extension",
      dates: "2025",
      active: true,
      description:
        "Manifest V3 Chrome Extension parsing tweet threads, sentiment, and user context to synthesize relevant, high-signal engineering replies via LLM.",
      technologies: ["JavaScript", "Chrome Extensions API (MV3)", "Prompt Engineering", "DOM Parser"],
      links: [
        {
          type: "Source Code",
          href: "https://github.com/hanzlaahmadcheema/X-Twitter-Auto-Reply-10x-Extension",
          icon: "github",
        },
      ],
      metrics: "Manifest V3 Compliant • Sub-800ms Synthesis • Content Script Automation",
      architecture: {
        summary:
          "Injects non-invasive overlay buttons into Twitter's DOM, extracts tweet ancestry, and streams contextual reply candidates directly into the composer.",
        tradeoffs:
          "Used client-side DOM parsing to bypass rate-limited public APIs while maintaining user authorization.",
        stackChoice:
          "Lightweight vanilla JavaScript content script ensures sub-5ms DOM insertion with zero page performance penalty.",
      },
    },
    {
      title: "KernalX — Operating System Architecture Simulator",
      category: "daemon",
      href: "https://github.com/hanzlaahmadcheema/KernalX",
      dates: "2025",
      active: true,
      description:
        "Comprehensive desktop OS simulator featuring visual CPU scheduling algorithms (Round Robin, Priority, FCFS), LRU page replacement, semaphore synchronization, and real host hardware telemetry via OSHI.",
      technologies: ["Java", "JavaFX", "OSHI Hardware Monitor", "Multithreading", "Algorithms"],
      links: [
        {
          type: "Source Code",
          href: "https://github.com/hanzlaahmadcheema/KernalX",
          icon: "github",
        },
      ],
      metrics: "Real-Time Host OSHI Monitoring • 5 Scheduling Algorithms • Memory Paging Visualizer",
      architecture: {
        summary:
          "Simulates kernel-level process management with discrete event timing, memory frame allocation tables, and visual concurrency synchronization graphs.",
        tradeoffs:
          "Used JavaFX desktop rendering over web canvas to handle 60fps concurrent algorithm step execution with zero GC pauses.",
        stackChoice:
          "Java thread primitives accurately demonstrate race conditions and semaphore locking mechanisms.",
      },
    },
    {
      title: "BatteryMoniter — System Tray Hardware Watcher",
      category: "daemon",
      href: "https://github.com/hanzlaahmadcheema/BatteryMoniter",
      dates: "2025",
      active: true,
      description:
        "Lightweight system tray utility built with Python and PySide6, featuring real-time battery charge monitoring, audio alerts for overcharge protection, and native notifications.",
      technologies: ["Python", "PySide6", "Qt", "Desktop Application", "Windows/Linux"],
      links: [
        {
          type: "Source Code",
          href: "https://github.com/hanzlaahmadcheema/BatteryMoniter",
          icon: "github",
        },
      ],
      metrics: "Low Resource Footprint • System Tray Hooks • Real-Time Power Telemetry",
      architecture: {
        summary:
          "Background event loop reading ACPI power states and battery percentages, executing configurable alert thresholds to prevent battery degradation.",
        tradeoffs:
          "Qt event loops selected over simple polling to guarantee immediate state reaction with negligible CPU utilization.",
        stackChoice:
          "PySide6 provides native desktop system tray styling and responsive alert sound integration.",
      },
    },
  ],
};
