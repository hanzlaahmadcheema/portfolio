"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Terminal,
  MapPin,
  Clock,
  ArrowRight,
  Mail,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import { DATA } from "@/data/resume";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

interface HeroSectionProps {
  onOpenTerminal?: () => void;
}

export function HeroSection({ onOpenTerminal }: HeroSectionProps) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative pt-12 pb-8 sm:pt-20 sm:pb-12">
      {/* Background ambient radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-sky-500/10 dark:bg-cyan-500/10 blur-[90px] pointer-events-none -z-10 rounded-full" />

      {/* Main Hero Header: Larger Avatar + Rich Header */}
      <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8 md:gap-10">
        <div className="flex-1 space-y-4">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-50 border border-emerald-200 text-emerald-800 dark:bg-emerald-500/10 dark:border-emerald-500/30 dark:text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse shrink-0" />
            <span className="hidden sm:inline">Open to Engineering Roles & Contract Projects</span>
            <span className="sm:hidden">Open to Roles & Projects</span>
          </div>

          {/* Name & Alias */}
          <div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-mono">
              {DATA.name}{" "}
              <span className="text-base sm:text-lg font-normal text-slate-500 tracking-normal">
                ({DATA.alias})
              </span>
            </h1>
            <p className="mt-1.5 text-base sm:text-xl text-sky-600 dark:text-cyan-400 font-mono font-medium">
              {DATA.headline}
            </p>
          </div>

          {/* Live Telemetry Info */}
          <div className="flex flex-wrap items-center gap-y-1 gap-x-5 text-xs font-mono text-slate-600 dark:text-slate-400 pt-1">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
              <span>{DATA.location} (Remote Worldwide / Relocation)</span>
            </div>
            {time && (
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                <span>{time} PKT (UTC+5)</span>
              </div>
            )}
          </div>
        </div>

        {/* Prominent, Large Profile Photo with Dual-Gradient Ambient Frame */}
        <div className="relative group shrink-0 self-center md:self-auto">
          <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500 via-indigo-500 to-emerald-500 rounded-3xl blur-md opacity-40 group-hover:opacity-75 transition duration-300" />
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-xl dark:shadow-2xl">
            <Image
              src={DATA.avatarUrl}
              alt={DATA.name}
              fill
              priority
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Expanded, High-Signal Overview */}
      <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80 space-y-4 text-sm sm:text-base leading-relaxed font-sans">
        {DATA.overview.map((paragraph, idx) => (
          <p key={idx} className="text-slate-700 dark:text-slate-300 font-normal">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Quick Recruiter & Client Signal Strip (Hiring TL;DR) */}
      <div className="mt-6 p-3 sm:p-4 rounded-xl bg-slate-100/70 dark:bg-[#0A0F1D]/80 border border-slate-200 dark:border-slate-800/90 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-xs font-mono">
        <div className="space-y-0.5">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Experience</span>
          <span className="text-slate-800 dark:text-slate-200 font-bold">4+ Years Prod</span>
        </div>
        <div className="space-y-0.5">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Track Record</span>
          <span className="text-slate-800 dark:text-slate-200 font-bold">10 Systems • 30+ Repos</span>
        </div>
        <div className="space-y-0.5">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Core Disciplines</span>
          <span className="text-sky-700 dark:text-cyan-400 font-bold">
            <span className="sm:hidden">Full-Stack • AI</span>
            <span className="hidden sm:inline">Full-Stack • Linux • AI</span>
          </span>
        </div>
        <div className="space-y-0.5">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Availability</span>
          <span className="hidden sm:inline text-emerald-700 dark:text-emerald-400 font-bold">Immediate (Full-Time/Contract)</span>
          <span className="sm:hidden text-emerald-700 dark:text-emerald-400 font-bold">Immediate (All Roles)</span>
        </div>
      </div>

      {/* Interactive Actions & Direct Hiring CTAs */}
      <div className="mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3">
        {/* WhatsApp Direct Chat Button */}
        <a
          href={DATA.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs font-mono font-bold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-950/20 transition-all hover:scale-[1.02] shrink-0"
          title="Chat directly on WhatsApp (+92 326 6900001)"
        >
          <WhatsAppIcon className="w-4 h-4" />
          <span>Chat on WhatsApp</span>
        </a>

        {/* View All Production Systems Link */}
        <a
          href="#projects"
          className="flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs font-mono font-medium rounded-lg bg-sky-600 hover:bg-sky-500 dark:bg-cyan-600 dark:hover:bg-cyan-500 text-white shadow-md shadow-sky-600/20 dark:shadow-cyan-950/30 transition-colors shrink-0"
        >
          <span>Production Systems</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>

        {/* Terminal Modal Trigger */}
        {onOpenTerminal && (
          <button
            onClick={onOpenTerminal}
            className="flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs font-mono font-medium rounded-lg bg-white hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 hover:border-slate-400 dark:border-slate-700 dark:hover:border-cyan-500/50 shadow-sm transition-all group shrink-0"
          >
            <Terminal className="w-3.5 h-3.5 text-sky-600 dark:text-cyan-400 group-hover:rotate-6 transition-transform" />
            <span>terminal</span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono ml-0.5">
              zsh
            </span>
          </button>
        )}

        {/* Social & Contact Icons */}
        <div className="flex items-center gap-1 sm:gap-1.5 w-full sm:w-auto justify-start sm:justify-start sm:ml-auto pt-2 sm:pt-0 text-slate-500 dark:text-slate-400">
          <a
            href={DATA.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp (+92 326 6900001)"
            aria-label="Chat on WhatsApp (+92 326 6900001)"
            className="p-2.5 rounded-lg hover:bg-slate-100 hover:text-emerald-600 dark:hover:bg-slate-800 dark:hover:text-emerald-400 transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4" />
          </a>
          <a
            href={DATA.contact.social.GitHub.url}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile (30+ Repos)"
            aria-label="GitHub Profile (30+ Repositories)"
            className="p-2.5 rounded-lg hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={DATA.contact.social.LinkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-lg hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${DATA.contact.email}`}
            title="Send Email"
            aria-label={`Send Email to ${DATA.contact.email}`}
            className="p-2.5 rounded-lg hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
