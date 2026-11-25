import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  CalendarClock,
  CheckCircle2,
  ExternalLink,
  ListChecks,
  Mail,
  Video,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Nord — AI Tutoring Hub",
  description:
    "Nord's private hub for AI tutoring with Hanzla Ahmad — today's trial, the session plan, setup checklist and learning resources.",
  robots: {
    index: false,
    follow: false,
  },
};

const MEET_URL = "https://meet.google.com/yff-miny-dsq";

const SESSIONS = [
  {
    n: "1",
    title: "AI foundations",
    detail: "Choosing tools and prompt engineering.",
  },
  {
    n: "2",
    title: "AI Agents",
    detail: "What they are, using one, and building a simple one.",
  },
  {
    n: "3",
    title: "Open source and GitHub",
    detail: "AI-assisted coding and local, private models.",
  },
  {
    n: "4",
    title: "Admin tool, part 1",
    detail: "Design and core build.",
  },
  {
    n: "5",
    title: "Admin tool, part 2",
    detail: "Reminders, dashboard, and handover with source code.",
  },
];

const SETUP = [
  {
    name: "VS Code",
    detail: "Your code editor.",
    url: "https://code.visualstudio.com/download",
  },
  {
    name: "Git",
    detail: "Tracks every change to your code.",
    url: "https://git-scm.com/downloads",
  },
  {
    name: "GitHub",
    detail: "Where your code lives online. Create a free account.",
    url: "https://github.com/signup",
  },
  {
    name: "Ollama",
    detail: "Runs AI models on your own computer.",
    url: "https://ollama.com/download",
  },
  {
    name: "Qwen3 1.7B model",
    detail: "A small, fast AI model that runs on your computer. In Ollama, run: ollama pull qwen3:1.7b",
    url: "https://ollama.com/library/qwen3:1.7b",
  },
  {
    name: "Claude Code",
    detail: "An AI coding assistant that works in your terminal.",
    url: "https://claude.com/product/claude-code",
  },
];

const RESOURCES = [
  {
    name: "Google — Generative AI on Google Cloud",
    detail: "A gentle introduction to generative AI.",
    url: "https://cloud.google.com/ai/generative-ai",
  },
  {
    name: "OpenAI — Prompt engineering guide",
    detail: "How to write prompts that get good results.",
    url: "https://platform.openai.com/docs/guides/prompt-engineering",
  },
  {
    name: "Anthropic — Building effective agents",
    detail: "How AI agents work, explained simply.",
    url: "https://www.anthropic.com/engineering/building-effective-agents",
  },
  {
    name: "OpenAI — A practical guide to building agents",
    detail: "A short guide to building your first agent (PDF).",
    url: "https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf",
  },
  {
    name: "Hugging Face — AI Agents Course",
    detail: "A free, hands-on course about AI agents.",
    url: "https://huggingface.co/learn/agents-course/unit0/introduction",
  },
  {
    name: "freeCodeCamp — Git and GitHub for Beginners",
    detail: "Git and GitHub, step by step.",
    url: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
  },
  {
    name: "Ollama",
    detail: "Run AI models on your own computer.",
    url: "https://ollama.com",
  },
];

export default function NordPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 dark:bg-[#070A11] bg-grid-pattern selection:bg-cyan-500/20 selection:text-cyan-900 dark:selection:text-cyan-300 transition-colors duration-200">
      {/* Top ambient glow */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-sky-200/30 dark:from-cyan-950/20 via-transparent to-transparent pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 space-y-6">
        {/* Back link */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-sky-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>cd /portfolio (Home)</span>
          </Link>
        </div>

        {/* Header */}
        <header className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold font-mono text-slate-900 dark:text-white">
            Nord — AI Tutoring Hub
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Your private hub for AI tutoring with Hanzla Ahmad — everything
            for your sessions in one place.
          </p>
        </header>

        {/* Today's trial */}
        <section className="p-4 sm:p-6 rounded-2xl bg-white/90 dark:bg-[#0B101D] border border-slate-200/90 dark:border-slate-800/80 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <Video className="w-5 h-5 text-sky-600 dark:text-cyan-400" />
            <h2 className="text-base sm:text-lg font-bold font-mono text-slate-900 dark:text-white">
              Today&apos;s trial
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-600 dark:text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <CalendarClock className="w-4 h-4 text-slate-400 dark:text-slate-500" />
              Wednesday 25 November 2026
            </span>
            <span>8:00 PM SGT / 5:00 PM PKT</span>
            <span>2 hours</span>
            <span>Google Meet</span>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-400">
            In today&apos;s 2-hour hands-on trial we build the first working
            version of your admin task tool: type a task in plain words, AI
            pulls out the task and the deadline, a simple task list, and a
            basic reminder. You do the typing — everything we build goes into
            your own GitHub.
          </p>

          <div>
            <a
              href={MEET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-mono font-bold rounded-xl bg-sky-600 hover:bg-sky-500 dark:bg-cyan-600 dark:hover:bg-cyan-500 text-white shadow-sm transition-colors"
            >
              <Video className="w-4 h-4" />
              Join the meeting
            </a>
          </div>
        </section>

        {/* Session plan */}
        <section className="p-4 sm:p-6 rounded-2xl bg-white/90 dark:bg-[#0B101D] border border-slate-200/90 dark:border-slate-800/80 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <ListChecks className="w-5 h-5 text-sky-600 dark:text-cyan-400" />
            <h2 className="text-base sm:text-lg font-bold font-mono text-slate-900 dark:text-white">
              Session plan — 5 sessions of 45 minutes
            </h2>
          </div>

          <ol className="space-y-3">
            {SESSIONS.map((s) => (
              <li key={s.n} className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 dark:bg-cyan-950/60 text-xs font-mono font-bold text-sky-700 dark:text-cyan-300">
                  {s.n}
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {s.title}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {s.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Setup checklist */}
        <section className="p-4 sm:p-6 rounded-2xl bg-white/90 dark:bg-[#0B101D] border border-slate-200/90 dark:border-slate-800/80 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-sky-600 dark:text-cyan-400" />
            <h2 className="text-base sm:text-lg font-bold font-mono text-slate-900 dark:text-white">
              Setup checklist
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Please have these installed before the trial, so we can spend our
            time building.
          </p>

          <ul className="divide-y divide-slate-200 dark:divide-slate-800/80">
            {SETUP.map((item) => (
              <li key={item.name} className="py-3 first:pt-0 last:pb-0">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-3"
                >
                  <span>
                    <span className="text-sm font-semibold text-sky-700 hover:text-sky-600 dark:text-cyan-300 dark:hover:text-cyan-400">
                      {item.name}
                    </span>
                    <span className="block text-sm text-slate-600 dark:text-slate-400">
                      {item.detail}
                    </span>
                  </span>
                  <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-slate-400 group-hover:text-sky-600 dark:group-hover:text-cyan-400 transition-colors" />
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Learning resources */}
        <section className="p-4 sm:p-6 rounded-2xl bg-white/90 dark:bg-[#0B101D] border border-slate-200/90 dark:border-slate-800/80 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-sky-600 dark:text-cyan-400" />
            <h2 className="text-base sm:text-lg font-bold font-mono text-slate-900 dark:text-white">
              Learning resources
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Reading and guides to explore between sessions.
          </p>

          <ul className="divide-y divide-slate-200 dark:divide-slate-800/80">
            {RESOURCES.map((item) => (
              <li key={item.name} className="py-3 first:pt-0 last:pb-0">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-3"
                >
                  <span>
                    <span className="text-sm font-semibold text-sky-700 hover:text-sky-600 dark:text-cyan-300 dark:hover:text-cyan-400">
                      {item.name}
                    </span>
                    <span className="block text-sm text-slate-600 dark:text-slate-400">
                      {item.detail}
                    </span>
                  </span>
                  <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-slate-400 group-hover:text-sky-600 dark:group-hover:text-cyan-400 transition-colors" />
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section className="p-4 sm:p-6 rounded-2xl bg-white/90 dark:bg-[#0B101D] border border-slate-200/90 dark:border-slate-800/80 shadow-sm space-y-2">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-sky-600 dark:text-cyan-400" />
            <h2 className="text-base sm:text-lg font-bold font-mono text-slate-900 dark:text-white">
              Questions?
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Email Hanzla at{" "}
            <a
              href="mailto:hello@hanzlaahmad.com"
              className="font-semibold text-sky-700 hover:text-sky-600 dark:text-cyan-300 dark:hover:text-cyan-400"
            >
              hello@hanzlaahmad.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
