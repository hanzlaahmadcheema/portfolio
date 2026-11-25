import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  CalendarClock,
  CheckCircle2,
  ExternalLink,
  FileText,
  Folder,
  ListChecks,
  Mail,
  Video,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Nord — AI Tutoring Hub",
  description:
    "Nord's private hub for AI tutoring with Hanzla Ahmad — the trial session, the session plan, setup checklist and learning resources.",
  robots: {
    index: false,
    follow: false,
  },
};

const MEET_URL = "https://meet.google.com/yff-miny-dsq";

const DRIVE_FOLDER_URL =
  "https://drive.google.com/drive/folders/1IdjDPaAKcTYjRxCOGszmwVnL2HbvRNYm";

const DRIVE_FILES = [
  "Nord_Session_Notes_Detailed_25_Nov_2026.pdf",
  "Nord_Trial_Slides_25_Nov_2026.pptx",
  "Nord_Trial_Run_Sheet_25_Nov_2026.pdf",
];

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
  { cmd: "github.com", detail: "Your GitHub account is ready" },
  { cmd: "npm install -g @anthropic-ai/claude-code", detail: "Claude Code is installed" },
  { cmd: "claude", detail: "Claude Code starts" },
  { cmd: "ollama pull qwen3:1.7b", detail: "The Qwen3 1.7B model is downloaded" },
  { cmd: "ollama list", detail: "The model shows up as ready" },
];

const NOTES_PLANNED_STEPS = [
  {
    step: "Planned Step A — Scaffold: the empty page",
    detail:
      "In a future build, the agent would create a simple single page — a heading, one input box, an “Add task” button, and an empty task list. Plain HTML, CSS and JavaScript. No login, no database, no framework.",
  },
  {
    step: "Planned Step B — Input and list",
    detail:
      "In a future build, typing a sentence and clicking “Add task” would add it to the list with a Done checkbox and a Delete button, saved in the browser so it is still there when the page is refreshed.",
  },
  {
    step: "Planned Step C — Extraction: task and deadline",
    detail:
      "In a future build, the tool would split a sentence like “Send the fee reminder to parents by Friday 3pm” into a clean task title and a deadline — and leave the deadline blank when there is none.",
  },
  {
    step: "Planned Step D — The basic reminder",
    detail:
      "In a future build, tasks due today would be highlighted amber, overdue tasks red, with a banner counting how many tasks are due today — for example “2 tasks due today”. No phone notifications yet.",
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

const PROMPT_TYPES = [
  {
    name: "Instruction prompt",
    detail:
      "Tells the AI exactly what to do. Example: “Write a polite fee reminder for parents, due Friday.” This is the most common type.",
  },
  {
    name: "Question prompt",
    detail:
      "Asks for information or an explanation. Example: “What is the difference between a chatbot and an agent, in plain words?”",
  },
  {
    name: "Context prompt",
    detail:
      "Gives the background first, before any task. Example: “I work in school admin. I handle fees, enrolments and parent calls. Remember this for what follows.”",
  },
  {
    name: "Example-based prompt",
    detail:
      "Shows the AI an example of what you want, then asks for the same pattern. Example: “Here is a parent message I liked. Write a new one in the same style.”",
  },
  {
    name: "Step-by-step prompt",
    detail:
      "Breaks the work into ordered steps. Example: “First list the tasks, then add a deadline to each one, then sort them by date.”",
  },
  {
    name: "Role prompt",
    detail:
      "Asks the AI to work in a particular role. Example: “Act as an experienced school administrator and review this notice.”",
  },
  {
    name: "Brainstorming prompt",
    detail:
      "Asks for ideas and options, not a final answer. Example: “Give me five ways to remind parents about fees without sounding harsh.”",
  },
  {
    name: "Rewrite / improve prompt",
    detail:
      "Gives the AI your draft and asks it to improve it. Example: “Make this message shorter, warmer, and clearer. Keep all the facts.”",
  },
  {
    name: "Review / check prompt",
    detail:
      "Asks the AI to check work against rules. Example: “Check this list — is anything missing, unclear, or duplicated?”",
  },
];

const PROMPT_TECHNIQUES = [
  {
    name: "Be specific and clear",
    detail:
      "Say exactly what you want, who it is for, and what “done” looks like. “Write a short notice” is vague; “Write a three-sentence notice for parents about Friday's early closing” is clear.",
  },
  {
    name: "Give context",
    detail:
      "The AI cannot see your desk, your school, or your last conversation. If a fact matters, put it in the prompt.",
  },
  {
    name: "Break big tasks into steps",
    detail:
      "Big work goes wrong when it is asked for all at once. Ask for one phase or one step, check it, then ask for the next. This is the same phase loop as in Hanzla's build method.",
  },
  {
    name: "Give an example",
    detail:
      "One good example teaches the AI your style, length, and tone faster than a long description. One example is often enough.",
  },
  {
    name: "Ask for step-by-step thinking",
    detail:
      "For a problem or a decision, add: “Think step by step and show your steps.” You can then check the reasoning, not just the answer.",
  },
  {
    name: "Set a role when it helps",
    detail:
      "“Act as a school administrator” or “Act as a careful proofreader” focuses the answer on that job's standards and language.",
  },
  {
    name: "Set rules and limits",
    detail:
      "State what the AI must do, what it must never do, and what to ask you about instead of guessing. Rules prevent the most common mistakes.",
  },
  {
    name: "Ask for the format you need",
    detail:
      "Say whether you want a list, a table, short paragraphs, a message ready to send, or code — and how long it should be. If you do not choose a format, the AI will choose one for you.",
  },
  {
    name: "Iterate",
    detail:
      "Your first prompt rarely needs to be your last. Read the answer, say what to keep and what to change, and prompt again. Improving in two or three short rounds is normal, professional work — not a failure.",
  },
  {
    name: "Let the AI ask questions",
    detail:
      "End a prompt with: “If anything is unclear, ask me before you start.” A good agent will ask one clear question instead of guessing wrong.",
  },
];

const BEST_PROMPT_STEPS = [
  {
    name: "1. Context — where we are",
    detail:
      "Tell the agent where we are right now — our current situation or position: what is happening, who is involved, what has already been done, and what problem we are solving. Without this, the agent has to guess your situation, and guessed context is the most common reason a good agent gives a wrong answer.",
  },
  {
    name: "2. Task — what to do",
    detail:
      "Say exactly what the agent needs to do — the one clear job in this prompt. One prompt, one main task. If there are three jobs, write them as three numbered tasks, or use three prompts in order.",
  },
  {
    name: "3. Example — what good looks like, if possible",
    detail:
      "Show an example of what you want, if you have one — a message you liked, a finished task, or the style to copy. Say what the example is for: “Copy this style” is different from “Copy this content.” If you have no example, skip this part — do not invent one.",
  },
  {
    name: "4. Rules — the rules to follow",
    detail:
      "Set the rules the agent must follow while it works: use fictional names only, do not add features that were not asked for, ask before running anything, keep real student details out. Rules are also where you set limits — length, tone, and what to leave out.",
  },
  {
    name: "5. Format — how to give it back",
    detail:
      "Say in which format you need the answer back: a short message ready to copy, a table, a numbered list, bullet points, or a single file. Add length and tone here too — for example, “three sentences, polite and warm.”",
  },
];

const PROMPT_CHECK = [
  "Have I told the agent where we are — our situation right now?",
  "Have I said exactly what it needs to do?",
  "Have I shown an example, if I have one?",
  "Have I set the rules and limits it must follow?",
  "Have I said in which format I need the answer?",
];

const WORKED_EXAMPLE = `Context: I work in school admin. It is the middle of term, fees for this term are due this Friday, and some parents have not paid yet. I need to remind them without sounding harsh. Task: Write a fee reminder message I can send to parents. Example: Here is the style I like — ‘Dear parents, a gentle reminder that this term's fees are due on Friday. Thank you to everyone who has already paid. Please contact the office if you need help.’ Write in this same warm, short style. Rules: Use no real names. Do not add payment amounts, bank details, or a late fee — I have not given you those. Keep it polite, with no pressure or threats. If you need a detail I have not given you, ask me instead of inventing it. Format: Give me one message only, in three short sentences, ready to copy and send — no heading, no explanation before or after it.`;

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

        {/* Trial session */}
        <section className="p-4 sm:p-6 rounded-2xl bg-white/90 dark:bg-[#0B101D] border border-slate-200/90 dark:border-slate-800/80 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <Video className="w-5 h-5 text-sky-600 dark:text-cyan-400" />
            <h2 className="text-base sm:text-lg font-bold font-mono text-slate-900 dark:text-white">
              Trial session — 25 November 2026
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-600 dark:text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <CalendarClock className="w-4 h-4 text-slate-400 dark:text-slate-500" />
              Wednesday 25 November 2026
            </span>
            <span>5:00 – 9:00 PM PKT / 8:00 PM – 12:00 midnight SGT</span>
            <span>4 hours</span>
            <span>Google Meet</span>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-400">
            This was a 4-hour discussion session. We talked through the ideas
            in detail: what AI is, how a chatbot differs from an agent,
            Hanzla&apos;s build method, how to write good prompts, and the
            idea of an admin task tool you could build one day. No app was
            created, started, or built — the session was discussion only, and
            everything we covered is written up in the session notes below.
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
              Session notes — the trial session
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Our shared notes for the trial session. Hanzla explains, you type,
            and we tick things off together as we go — so you leave with a
            complete record to practise from. This was a discussion session —
            no app was created or started.
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
                  3. You type it yourself.
                </span>
              </li>
              <li>
                <span className="font-semibold text-slate-900 dark:text-white">
                  4. You explain it back
                </span>{" "}
                — that is how we know it stuck.
              </li>
            </ol>
          </div>

          <div>
            <h3 className="text-sm font-bold font-mono text-slate-900 dark:text-white">
              Hanzla&apos;s method — how we build
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              This is how Hanzla builds software, and how you will learn to
              build it too. The chatbot plans with you, the agent only builds,
              and you stay in charge of every decision.
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200/90 dark:border-slate-800/80 bg-white dark:bg-[#0B101D]">
              <img
                src="/nord-workflow.svg"
                alt="Hanzla's software building workflow: chatbot context, agent setup, five documents, docs folder, finalise, the rule, and the phase loop"
                className="w-full"
              />
            </div>
            <ol className="mt-4 space-y-3">
              <li className="text-sm text-slate-600 dark:text-slate-400">
                <span className="font-semibold text-slate-900 dark:text-white">
                  1. Chatbot first.
                </span>{" "}
                Hanzla opens a chatbot — not an agent — and explains the full
                context: what we are building, the stack, the technologies,
                and the business model.
              </li>
              <li className="text-sm text-slate-600 dark:text-slate-400">
                <span className="font-semibold text-slate-900 dark:text-white">
                  2. Agent and setup.
                </span>{" "}
                Then Hanzla brings in an agent like Claude, sets up the
                project folder, and sets up Git. That is the first step before
                any code.
              </li>
              <li className="text-sm text-slate-600 dark:text-slate-400">
                <span className="font-semibold text-slate-900 dark:text-white">
                  3. Five documents.
                </span>{" "}
                Together with the chatbot, Hanzla prepares five core
                documents, in this order: Project Charter, Business
                Requirements Document, Product Requirements Document,
                Technical Feasibility and Architecture Document, Product
                Execution Plan. The chatbot asks questions one by one, and
                each document is finished before the next one starts.
              </li>
              <li className="text-sm text-slate-600 dark:text-slate-400">
                <span className="font-semibold text-slate-900 dark:text-white">
                  4. Docs folder.
                </span>{" "}
                Hanzla downloads all five documents and keeps them in a docs
                folder inside the project, where the agent can reach them.
              </li>
              <li className="text-sm text-slate-600 dark:text-slate-400">
                <span className="font-semibold text-slate-900 dark:text-white">
                  5. Finalise.
                </span>{" "}
                Hanzla reviews everything with the chatbot to finalise it.
                Then the real prompting begins.
              </li>
              <li className="text-sm text-slate-600 dark:text-slate-400">
                <span className="font-semibold text-slate-900 dark:text-white">
                  6. The rule.
                </span>{" "}
                The agent is only for implementation. All decisions are made
                by Hanzla, with the chatbot&apos;s help.
              </li>
              <li className="text-sm text-slate-600 dark:text-slate-400">
                <span className="font-semibold text-slate-900 dark:text-white">
                  7. The phase loop.
                </span>{" "}
                Hanzla gives the agent one phase at a time. The agent works on
                it and writes a report. Hanzla takes the report back to the
                chatbot, which checks it for anything missing. If something is
                missing, the chatbot gives the agent a new prompt to cover it.
                If everything is fixed, the chatbot prepares the next phase —
                and if a decision is needed, it asks Hanzla first. Then the
                loop repeats.
              </li>
            </ol>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
              Other documents — for example UI/UX — can be added later. These
              five are the starting core.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold font-mono text-slate-900 dark:text-white">
              What the four hours covered
            </h3>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-slate-600 dark:text-slate-400">
              <li>
                AI in one line, chatbot vs agent, GitHub, and open source and
                local models
              </li>
              <li>
                Hanzla&apos;s build method — chatbot first, then the agent,
                five documents, the docs folder, the rule, and the phase loop
              </li>
              <li>
                Prompting — how to ask well, the types of prompts, and the
                techniques that make a prompt work
              </li>
              <li>
                The best way to write a prompt — Context, Task, Example,
                Rules, Format
              </li>
              <li>
                The planned admin task tool idea — how it would work, and the
                planned build steps for a future build
              </li>
              <li>
                Your questions answered — why Claude forgets long chats,
                reminders when the app is closed, and keeping school data safe
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
              How the task tool would work — the idea we discussed
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              What it would do: you would type a task in plain words, and the
              tool would pull out the task and the deadline, keep a simple
              list, and remind you about it. This is the idea we discussed —
              no app was created or started in this session. A first version
              would not include voice input, image input, a dashboard, or
              phone push notifications; those would be later steps.
            </p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              The planned build steps for a future build — discussed, not
              done:
            </p>
            <ol className="mt-2 space-y-3">
              {NOTES_PLANNED_STEPS.map((s) => (
                <li key={s.step} className="text-sm text-slate-600 dark:text-slate-400">
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {s.step}
                  </span>
                  <span className="block">{s.detail}</span>
                </li>
              ))}
            </ol>
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
              Types of prompts
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Not every prompt does the same job. Knowing which type you are
              writing helps you write it well — and most real prompts are a
              mix of two or three types together. You do not need to name the
              type when you write. The point is the habit: before you send a
              prompt, ask yourself — am I instructing, asking, giving context,
              showing an example, or asking for a check?
            </p>
            <ul className="mt-2 space-y-2">
              {PROMPT_TYPES.map((t) => (
                <li key={t.name} className="text-sm text-slate-600 dark:text-slate-400">
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {t.name}:
                  </span>{" "}
                  {t.detail}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold font-mono text-slate-900 dark:text-white">
              Prompting techniques
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              These techniques work with every type of prompt above. You can
              use one, or combine several in a single prompt.
            </p>
            <ul className="mt-2 space-y-2">
              {PROMPT_TECHNIQUES.map((t) => (
                <li key={t.name} className="text-sm text-slate-600 dark:text-slate-400">
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {t.name}:
                  </span>{" "}
                  {t.detail}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
              Putting several together: “Act as an experienced school
              administrator. Write a fee reminder for parents, for this term,
              using fictional names only. Here is a message in the style I
              like: [example]. Keep it to three short, polite sentences, and
              ask me if any detail is missing before you write it.”
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold font-mono text-slate-900 dark:text-white">
              The best way to write a prompt
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              If you remember only one method from this session, remember this
              one. The best prompts have five parts, in this order. Think of
              it as briefing a capable new assistant who knows nothing about
              your school yet: first you tell her where things stand, then
              what to do, then what good looks like, then the rules, then how
              to hand the work back to you.
            </p>
            <p className="mt-2 text-sm font-mono font-bold text-slate-900 dark:text-white">
              Context + Task + Example + Rules + Format
            </p>
            <ol className="mt-2 space-y-3">
              {BEST_PROMPT_STEPS.map((s) => (
                <li key={s.name} className="text-sm text-slate-600 dark:text-slate-400">
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {s.name}
                  </span>
                  <span className="block">{s.detail}</span>
                </li>
              ))}
            </ol>
            <p className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">
              A complete example, using all five parts:
            </p>
            <div className="mt-2 rounded-xl border border-slate-200/90 dark:border-slate-800/80 bg-slate-50 dark:bg-[#0B101D] p-4">
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {WORKED_EXAMPLE}
              </p>
            </div>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
              Notice what each part prevents. Context stops the agent
              inventing your situation. The Task stops it doing a different
              job. The Example stops it using a tone you dislike. The Rules
              stop it adding amounts, details, or features you never approved.
              The Format stops it handing back an essay when you needed a
              message.
            </p>
            <p className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">
              A quick check before you press send:
            </p>
            <ul className="mt-2 space-y-1.5">
              {PROMPT_CHECK.map((q) => (
                <li key={q} className="flex items-start gap-2.5 text-sm">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 shrink-0 accent-sky-600 dark:accent-cyan-500"
                  />
                  <span className="text-slate-600 dark:text-slate-400">{q}</span>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              If all five answers are yes, your prompt is ready. Keep this
              five-part order as a habit, even for small prompts — but do not
              drop Context or Rules to save time. Those two parts protect you
              most.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold font-mono text-slate-900 dark:text-white">
              Your questions
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Every question you ask, we write it down here with its answer.
              Update this list right after the session.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold font-mono text-slate-900 dark:text-white">
              Practice this week
            </h3>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-slate-600 dark:text-slate-400">
              <li>
                Re-read these notes and pick out the three ideas that matter
                most for your admin work.
              </li>
              <li>
                Write one prompt using the full five-part method above —
                Context, Task, Example, Rules, Format — and check it against
                the five-question checklist before you send it.
              </li>
              <li>
                Write a short summary of this session in a markdown file — a
                few lines on what we discussed and what you learned.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold font-mono text-slate-900 dark:text-white">
              Next session
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Hanzla will catch up with you on 30 November to confirm the
              next session. The next session is tentatively planned for 1
              December. From 7 December, regular sessions are planned in
              Monday and Tuesday slots. If you would like extra time beyond
              the booked sessions, extra hours are booked the same way,
              through Freelancer, at $6 per hour.
            </p>
          </div>
        </section>

        {/* Session files — Nord folder */}
        <section className="p-4 sm:p-6 rounded-2xl bg-white/90 dark:bg-[#0B101D] border border-slate-200/90 dark:border-slate-800/80 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <Folder className="w-5 h-5 text-sky-600 dark:text-cyan-400" />
            <h2 className="text-base sm:text-lg font-bold font-mono text-slate-900 dark:text-white">
              Session files — Nord folder
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Everything from the trial session, in one shared Google Drive
            folder. The folder is shared with you as viewer — you can open
            and download the files.
          </p>

          <div>
            <a
              href={DRIVE_FOLDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-mono font-bold rounded-xl bg-sky-600 hover:bg-sky-500 dark:bg-cyan-600 dark:hover:bg-cyan-500 text-white shadow-sm transition-colors"
            >
              <Folder className="w-4 h-4" />
              Open the Nord folder in Google Drive
            </a>
          </div>

          <ul className="space-y-2">
            {DRIVE_FILES.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm">
                <FileText className="mt-0.5 h-4 w-4 shrink-0 text-slate-400 dark:text-slate-500" />
                <span className="font-mono text-[13px] text-slate-900 dark:text-white">
                  {f}
                </span>
              </li>
            ))}
          </ul>
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
