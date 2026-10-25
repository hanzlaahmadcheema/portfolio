"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Home,
  Layers,
  Briefcase,
  Terminal,
  Mail,
  ArrowUp,
  Archive,
  Sun,
  Moon,
  UserCheck,
} from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import { useTheme } from "./theme-provider";
import { DATA } from "@/data/resume";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

interface FloatingDockProps {
  onOpenTerminal?: () => void;
}

export function FloatingDock({ onOpenTerminal }: FloatingDockProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-4 sm:bottom-6 inset-x-0 z-50 flex justify-center items-center pointer-events-none px-2 sm:px-4">
      <nav className="pointer-events-auto flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full bg-white/90 dark:bg-[#0A0F1D]/90 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800/80 shadow-xl shadow-slate-900/10 dark:shadow-2xl dark:shadow-cyan-950/25 transition-all max-w-[calc(100vw-1rem)] overflow-x-auto no-scrollbar">
        {/* 1. Home */}
        <Link
          href="/"
          title="Overview / Home"
          className="group relative p-2 sm:p-2.5 rounded-full text-slate-600 hover:text-sky-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-cyan-400 dark:hover:bg-slate-800/60 transition-colors shrink-0"
        >
          <Home className="w-4 h-4 transition-transform group-hover:scale-110" />
          <span className="hidden sm:inline absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[11px] font-mono rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-sm whitespace-nowrap">
            Home
          </span>
        </Link>

        {/* 2. Capabilities (hidden on mobile to prevent overcrowding) */}
        <a
          href="/#capabilities"
          title="Capabilities"
          className="hidden sm:flex group relative p-2 sm:p-2.5 rounded-full text-slate-600 hover:text-sky-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-cyan-400 dark:hover:bg-slate-800/60 transition-colors shrink-0"
        >
          <Layers className="w-4 h-4 transition-transform group-hover:scale-110" />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[11px] font-mono rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-sm whitespace-nowrap">
            Capabilities
          </span>
        </a>

        {/* 3. Featured Projects */}
        <a
          href="/#projects"
          title="Featured Projects"
          className="group relative p-2 sm:p-2.5 rounded-full text-slate-600 hover:text-sky-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-cyan-400 dark:hover:bg-slate-800/60 transition-colors shrink-0"
        >
          <Briefcase className="w-4 h-4 transition-transform group-hover:scale-110" />
          <span className="hidden sm:inline absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[11px] font-mono rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-sm whitespace-nowrap">
            Projects
          </span>
        </a>

        {/* 4. Hiring Guide */}
        <a
          href="/#hiring"
          title="Hiring & Engagement Guide"
          className="group relative p-2 sm:p-2.5 rounded-full text-slate-600 hover:text-sky-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-cyan-400 dark:hover:bg-slate-800/60 transition-colors shrink-0"
        >
          <UserCheck className="w-4 h-4 transition-transform group-hover:scale-110" />
          <span className="hidden sm:inline absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[11px] font-mono rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-sm whitespace-nowrap">
            Hiring Guide
          </span>
        </a>

        {/* 5. Archive (hidden on mobile) */}
        <Link
          href="/projects"
          title="Archive Directory (30+ Repositories)"
          className="hidden sm:flex group relative p-2 sm:p-2.5 rounded-full text-slate-600 hover:text-sky-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-cyan-400 dark:hover:bg-slate-800/60 transition-colors shrink-0"
        >
          <Archive className="w-4 h-4 transition-transform group-hover:scale-110" />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[11px] font-mono rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm">
            Archive (30+)
          </span>
        </Link>

        <div className="w-[1px] h-4 sm:h-5 bg-slate-200 dark:bg-slate-800 mx-0.5 sm:mx-1 shrink-0" />

        {/* 6. WhatsApp direct trigger */}
        <a
          href={DATA.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Chat directly on WhatsApp (+92 326 6900001)"
          className="group relative p-2 sm:p-2.5 rounded-full text-emerald-600 hover:text-emerald-500 hover:bg-emerald-50 dark:text-emerald-400 dark:hover:text-emerald-300 dark:hover:bg-emerald-950/40 transition-colors shrink-0"
        >
          <WhatsAppIcon className="w-4 h-4 transition-transform group-hover:scale-110" />
          <span className="hidden sm:inline absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[11px] font-mono rounded bg-emerald-900 border border-emerald-700 text-emerald-100 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm">
            WhatsApp
          </span>
        </a>

        {/* 7. Terminal modal trigger */}
        {onOpenTerminal && (
          <button
            onClick={onOpenTerminal}
            title="Inspect System Terminal (zsh 5.9)"
            className="group relative p-2 sm:p-2.5 rounded-full text-slate-600 hover:text-emerald-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-emerald-400 dark:hover:bg-slate-800/60 transition-colors shrink-0"
          >
            <Terminal className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span className="hidden sm:inline absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[11px] font-mono rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm">
              Terminal
            </span>
          </button>
        )}

        {/* 8. Theme Toggle Button */}
        {mounted && (
          <button
            onClick={toggleTheme}
            title={resolvedTheme === "dark" ? "Switch to Light Theme" : "Switch to Dark Theme"}
            className="group relative p-2 sm:p-2.5 rounded-full text-slate-600 hover:text-amber-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-amber-300 dark:hover:bg-slate-800/60 transition-colors shrink-0"
          >
            {resolvedTheme === "dark" ? (
              <Sun className="w-4 h-4 transition-transform group-hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 transition-transform group-hover:-rotate-12" />
            )}
            <span className="hidden sm:inline absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[11px] font-mono rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm">
              {resolvedTheme === "dark" ? "Light Mode" : "Dark Mode"}
            </span>
          </button>
        )}

        {/* Desktop-only socials */}
        <div className="hidden sm:block w-[1px] h-5 bg-slate-200 dark:bg-slate-800 mx-1 shrink-0" />

        <a
          href={DATA.contact.social.GitHub.url}
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          className="hidden sm:flex group relative p-2.5 rounded-full text-slate-600 hover:text-sky-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-cyan-400 dark:hover:bg-slate-800/60 transition-colors shrink-0"
        >
          <Github className="w-4 h-4 transition-transform group-hover:scale-110" />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[11px] font-mono rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-sm whitespace-nowrap">
            GitHub
          </span>
        </a>

        <a
          href={DATA.contact.social.LinkedIn.url}
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          className="hidden sm:flex group relative p-2.5 rounded-full text-slate-600 hover:text-sky-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-cyan-400 dark:hover:bg-slate-800/60 transition-colors shrink-0"
        >
          <Linkedin className="w-4 h-4 transition-transform group-hover:scale-110" />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[11px] font-mono rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-sm whitespace-nowrap">
            LinkedIn
          </span>
        </a>

        <a
          href={`mailto:${DATA.contact.email}`}
          title="Email"
          className="hidden sm:flex group relative p-2.5 rounded-full text-slate-600 hover:text-sky-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-cyan-400 dark:hover:bg-slate-800/60 transition-colors shrink-0"
        >
          <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[11px] font-mono rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-sm whitespace-nowrap">
            Email
          </span>
        </a>

        {showScrollTop && (
          <>
            <div className="w-[1px] h-4 sm:h-5 bg-slate-200 dark:bg-slate-800 mx-0.5 sm:mx-1 shrink-0" />
            <button
              onClick={scrollToTop}
              title="Back to top"
              className="p-2 sm:p-2.5 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-800/60 transition-colors shrink-0"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </>
        )}
      </nav>
    </div>
  );
}
