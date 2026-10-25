# Hanzla Ahmad (Cheemæ) — Engineering Portfolio

> **Full-Stack & Systems Developer**  
> Focused on resilient software platforms, deterministic Linux daemons, and production AI pipelines.

[![Next.js 16](https://img.shields.io/badge/Next.js-16.4.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.3.0-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald?style=flat-square)](LICENSE)

---

## Overview

This repository houses the personal portfolio, system architecture showcase, and interactive browser terminal for **Hanzla Ahmad**. Built with Next.js 16 (App Router), React 19 Server Components, and Tailwind CSS v4, the platform emphasizes deterministic design, high conversion for recruiters and clients, and zero visual slop.

### Key Architectural Highlights

- **Interactive UNIX Terminal (`zsh 5.9` simulation):** In-memory Virtual File System (`VFSNode`) supporting POSIX-like commands (`ls`, `cd`, `cat`, `pwd`, `neofetch`, `status`, `matrix`, `quote`, `hire`, `whatsapp`). Features full tab completion, arrow history, and command output rendering.
- **Dual-Pathway Hiring Profile (`03 // HIRING & COLLABORATION PROFILE`):** Tailored blueprints for Technical Recruiters/Hiring Managers (Target roles, formats, production track record) and Founders/Project Clients (MVPs, headless daemons, POS ledgers, AI discovery pipelines).
- **Direct Reachability & WhatsApp API (`wa.me/923266900001`):** Integrated one-click WhatsApp chat action across the Hero, Hiring Section, Contact Cards, Floating Dock, and CLI.
- **Public Repositories Catalog (`/projects`):** Exhaustive catalog of 40 open-source repositories and 10 production flagship systems with search, filtering by language/domain, and direct source links. Zero private repositories exposed.
- **Dual-Theme Engineering:** Native Light and Dark themes with zero CSS flashing, backdrop-blur frosted glass headers, and custom monospace typography.

---

## Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | [Next.js 16 (Turbopack)](https://nextjs.org/), [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) (Strict mode) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/), CSS Variables |
| **Icons & Motion** | [Lucide React](https://lucide.dev/), CSS animations |
| **Architecture** | React Server Components (RSC), Client Islands, Virtual In-Memory File System |

---

## Project Structure

```text
portfolio/
├── app/
│   ├── globals.css          # Tailwind CSS v4 styles & theme tokens
│   ├── layout.tsx           # Metadata, viewport, and root layout
│   ├── page.tsx             # Main single-page developer showcase
│   └── projects/            # Full 40-repo searchable archive directory
├── components/
│   ├── capabilities-section.tsx  # 6 Architectural Pillars
│   ├── contact-section.tsx       # WhatsApp card & official email touchpoints
│   ├── experience-section.tsx    # Career track record timeline
│   ├── floating-dock.tsx         # Bottom signature navigation dock & theme toggle
│   ├── footer.tsx                # Telemetry & copyright footer
│   ├── hero-section.tsx          # Hero profile, recruiter signal strip & CTAs
│   ├── hiring-section.tsx        # Dual-audience recruiter & founder profile
│   ├── projects-section.tsx      # 10 Featured Flagship Systems
│   └── terminal-modal.tsx        # Full-featured interactive UNIX terminal
├── data/
│   ├── archive.ts           # 40 Public repositories registry
│   └── resume.ts            # Profile content, capabilities & experience data
└── public/
    ├── avatar.jpg           # Profile portrait
    └── banner.png           # Social banner
```

---

## Getting Started

### Prerequisites

- **Node.js**: `20.x` or `>=22.x`
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### Installation

```bash
# Clone the repository
git clone https://github.com/hanzlaahmadcheema/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start Turbopack development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Compile and optimize production build
npm run build

# Start production server
npm run start
```

---

## Interactive Terminal Commands

Visitors can launch the browser terminal by pressing the terminal button or running `>_ interactive terminal`:

| Command | Action |
| :--- | :--- |
| `hire` / `recruiter` | Display dual-audience hiring profile & direct interview channels |
| `whatsapp` / `wa` | Open direct WhatsApp chat line (`+92 326 6900001`) |
| `projects` | List flagship systems & public repositories |
| `skills` | Display 6 architectural capabilities pillars |
| `status` | View simulated supervised daemon status (`systemd`) |
| `neofetch` | Display host specifications & Linux telemetry |
| `ls` / `cd` / `cat` | Navigate the in-memory Virtual File System |
| `matrix` | Launch digital stream animation mode |
| `clear` | Clear terminal output buffer |

---

## License

This project is open-source and available under the [MIT License](LICENSE).
