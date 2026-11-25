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

const NOTES_SETUP_CHECKS = [
  { cmd: "code --version", detail: "VS Code is installed" },
  { cmd: "git --version", detail: "Git is installed" },
  { cmd: "github.com", detail: "Nord's GitHub account is ready" },
  { cmd: "npm install -g @anthropic-ai/claude-code", detail: "Claude Code is installed" },
  { cmd: "claude", detail: "Claude Code starts" },
  { cmd: "ollama pull qwen3:1.7b", detail: "The Qwen3 1.7B model is downloaded" },
  { cmd: "ollama list", detail: "The model shows up as ready" },
];

const NOTES_BUILD_STEPS = [
  {
    step: "Make the project folder",
    detail: "mkdir task-tool, then cd task-tool and git init",
  },
  {
    step: "Start the project",
    detail: "npm init -y, then open the folder in VS Code",
  },
  {
    step: "Write the task list",
    detail: "A simple list that holds tasks and deadlines",
  },
  {
    step: "Add plain-words input",
    detail: "Type a task in normal words — the tool reads the task and the date from it",
  },
  {
    step: "Add the reminder",
    detail: "The tool shows what is due today and what is coming next",
  },
  {
    step: "Run it and test",
    detail: "Try a real task, see what breaks, fix it together",
  },
];

const NOTES_COMMANDS = [
  { cmd: "code --version", detail: "Check VS Code" },
  { cmd: "git --version", detail: "Check Git" },
  { cmd: "git init", detail: "Start tracking this folder" },
  { cmd: "npm init -y", detail: "Create a Node.js project" },
  { cmd: "npm install -g @anthropic-ai/claude-code", detail: "Install Claude Code" },
  { cmd: "claude", detail: "Start Claude Code" },
  { cmd: "ollama pull qwen3:1.7b", detail: "Download the Qwen3 1.7B model" },
  { cmd: "ollama run qwen3:1.7b", detail: "Chat with the model on your own computer" },
  { cmd: "ollama list", detail: "See downloaded models" },
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

        {/* Session notes */}
        <section className="p-4 sm:p-6 rounded-2xl bg-white/90 dark:bg-[#0B101D] border border-slate-200/90 dark:border-slate-800/80 shadow-sm space-y-5">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-sky-600 dark:text-cyan-400" />
            <h2 className="text-base sm:text-lg font-bold font-mono text-slate-900 dark:text-white">
              Session notes — today&apos;s trial
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Our shared notes for the trial. Hanzla explains, Nord types, and
            we tick things off together as we go — so Nord leaves with a
            complete record to practise from.
          </p>

          <div>
            <h3 className="text-sm font-bold font-mono text-slate-900 dark:text-white">
              How we work together
            </h3>
            <ol className="mt-2 space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <span className="font-semibold text-slate-900 dark:text-white">
                  1. Hanzla explains
                </span>{" "}
                — one step at a time, in plain words.
              </li>
              <li>
                <span className="font-semibold text-slate-900 dark:text-white">
                  2. Hanzla shows it once.
                </span>
              </li>
              <li>
                <span className="font-semibold text-slate-900 dark:text-white">
                  3. Nord types it himself.
                </span>
              </li>
              <li>
                <span className="font-semibold text-slate-900 dark:text-white">
                  4. Nord explains it back
                </span>{" "}
                — that is how we know it stuck.
              </li>
            </ol>
          </div>

          <div>
            <h3 className="text-sm font-bold font-mono text-slate-900 dark:text-white">
              Today&apos;s session
            </h3>
            <ul className="mt-2 space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <span className="font-mono font-semibold text-slate-900 dark:text-white">
                  5:00 – 5:25
                </span>{" "}
                — Basics: GitHub, AI agents, open source
              </li>
              <li>
                <span className="font-mono font-semibold text-slate-900 dark:text-white">
                  5:25 – 5:35
                </span>{" "}
                — Setup check
              </li>
              <li>
                <span className="font-mono font-semibold text-slate-900 dark:text-white">
                  5:35 – 6:30
                </span>{" "}
                — Build the task tool, version 1
              </li>
              <li>
                <span className="font-mono font-semibold text-slate-900 dark:text-white">
                  6:30 – 6:50
                </span>{" "}
                — Test it on real tasks
              </li>
              <li>
                <span className="font-mono font-semibold text-slate-900 dark:text-white">
                  6:50 – 7:00
                </span>{" "}
                — Wrap-up and practice for the week
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold font-mono text-slate-900 dark:text-white">
              Part 1 — Basics
            </h3>
            <ul className="mt-2 space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <span className="font-semibold text-slate-900 dark:text-white">
                  GitHub:
                </span>{" "}
                a place to store code and track every change. A repository is
                one project folder with history.
              </li>
              <li>
                <span className="font-semibold text-slate-900 dark:text-white">
                  AI agent:
                </span>{" "}
                a program that takes a goal, uses tools, and works through
                steps on its own — with the human checking its work.
              </li>
              <li>
                <span className="font-semibold text-slate-900 dark:text-white">
                  Open source:
                </span>{" "}
                code anyone can read, use, and improve. We use open tools and
                we give back what we learn.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold font-mono text-slate-900 dark:text-white">
              Setup check — tick off as we confirm each one
            </h3>
            <ul className="mt-2 space-y-2">
              {NOTES_SETUP_CHECKS.map((c) => (
                <li key={c.cmd} className="flex items-start gap-2.5 text-sm">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 shrink-0 accent-sky-600 dark:accent-cyan-500"
                  />
                  <span>
                    <code className="font-mono text-[13px] font-semibold text-slate-900 dark:text-white">
                      {c.cmd}
                    </code>
                    <span className="block text-slate-600 dark:text-slate-400">
                      {c.detail}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold font-mono text-slate-900 dark:text-white">
              Build — the task tool, version 1
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              What it does: Nord types a task in plain words, and the tool
              pulls out the task and the deadline, keeps a simple list, and
              reminds him about it.
            </p>
            <ul className="mt-2 space-y-2">
              {NOTES_BUILD_STEPS.map((s) => (
                <li key={s.step} className="flex items-start gap-2.5 text-sm">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 shrink-0 accent-sky-600 dark:accent-cyan-500"
                  />
                  <span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {s.step}
                    </span>
                    <span className="block text-slate-600 dark:text-slate-400">
                      {s.detail}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold font-mono text-slate-900 dark:text-white">
              Commands reference
            </h3>
            <ul className="mt-2 space-y-1.5">
              {NOTES_COMMANDS.map((c) => (
                <li key={c.cmd} className="text-sm">
                  <code className="font-mono text-[13px] font-semibold text-slate-900 dark:text-white">
                    {c.cmd}
                  </code>
                  <span className="text-slate-600 dark:text-slate-400">
                    {" "}
                    — {c.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold font-mono text-slate-900 dark:text-white">
              Nord&apos;s questions
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Every question Nord asks, we write down here with its answer.
              Hanzla updates this list after the session.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold font-mono text-slate-900 dark:text-white">
              Practice this week
            </h3>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-slate-600 dark:text-slate-400">
              <li>Run the task tool on three real tasks from your own work.</li>
              <li>
                Write a short summary of the session in a markdown file in
                the project folder.
              </li>
              <li>
                In Claude, try a fresh chat for each new task, and try the
                /compact command in a long chat.
              </li>
              <li>Install anything from the setup check that was still missing.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold font-mono text-slate-900 dark:text-white">
              Next session
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Date and topic agreed at the end of today&apos;s trial. Likely
              topic: version 2 of the task tool — saving tasks to a file,
              priorities, and dates that repeat.
            </p>
          </div>
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
