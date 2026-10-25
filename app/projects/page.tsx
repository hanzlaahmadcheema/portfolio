"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ARCHIVE_PROJECTS } from "@/data/archive";
import { ArrowLeft, Search, Github, ExternalLink, Code2 } from "lucide-react";
import { FloatingDock } from "@/components/floating-dock";
import { Footer } from "@/components/footer";

export default function ProjectsArchivePage() {
  const [search, setSearch] = useState("");
  const [languageFilter, setLanguageFilter] = useState("all");

  const languages = useMemo(() => {
    const set = new Set<string>();
    ARCHIVE_PROJECTS.forEach((p) => {
      if (p.language && p.language !== "N/A" && p.language !== "None") {
        set.add(p.language);
      }
    });
    return Array.from(set).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    return ARCHIVE_PROJECTS.filter((p) => {
      // Language filter
      if (languageFilter !== "all" && p.language !== languageFilter) return false;

      // Search query
      if (!search.trim()) return true;
      const q = search.toLowerCase();
      const matchName = p.name.toLowerCase().includes(q);
      const matchDesc = p.description.toLowerCase().includes(q);
      const matchLang = p.language.toLowerCase().includes(q);
      const matchTopic = p.topics.some((t) => t.toLowerCase().includes(q));

      return matchName || matchDesc || matchLang || matchTopic;
    });
  }, [search, languageFilter]);

  const getLanguageColor = (lang: string) => {
    switch (lang.toLowerCase()) {
      case "typescript":
        return "bg-[#3178C6]";
      case "javascript":
        return "bg-[#F7DF1E]";
      case "python":
        return "bg-[#3572A5]";
      case "c++":
      case "cpp":
        return "bg-[#F34B7D]";
      case "java":
        return "bg-[#B07219]";
      case "c#":
      case "csharp":
        return "bg-[#178600]";
      case "astro":
        return "bg-[#FF5D01]";
      case "dart":
        return "bg-[#00B4AB]";
      case "liquid":
        return "bg-[#6772E5]";
      case "assembly":
        return "bg-[#6E4C13]";
      default:
        return "bg-slate-400";
    }
  };

  return (
    <main className="relative min-h-screen bg-slate-50 dark:bg-[#070A11] bg-grid-pattern selection:bg-cyan-500/20 selection:text-cyan-900 dark:selection:text-cyan-300 transition-colors duration-200">
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-sky-200/30 dark:from-cyan-950/20 via-transparent to-transparent pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 space-y-8">
        {/* Navigation & Header */}
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-sky-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Overview</span>
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
            <div>
              <span className="text-xs font-mono font-bold text-sky-600 dark:text-cyan-400 tracking-wider">
                ARCHIVE // {ARCHIVE_PROJECTS.length} PUBLIC REPOSITORIES
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-mono mt-1">
                Engineering Directory
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl font-sans">
                Complete catalog of public software repositories, headless daemons, automation utilities, and open-source packages built by Hanzla Ahmad.
              </p>
            </div>

            <a
              href="https://github.com/hanzlaahmadcheema"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 dark:bg-slate-900 dark:border-slate-800 dark:hover:border-slate-700 dark:text-slate-200 transition-colors self-start sm:self-auto shrink-0 shadow-sm"
            >
              <Github className="w-4 h-4 text-sky-600 dark:text-cyan-400" />
              <span>github.com/hanzlaahmadcheema</span>
              <ExternalLink className="w-3 h-3 text-slate-400 dark:text-slate-500" />
            </a>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="p-4 rounded-xl bg-white/80 dark:bg-[#0B101D] border border-slate-200/90 dark:border-slate-800/80 shadow-sm space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by project name, description, language, or topic tag..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm font-mono bg-slate-50 dark:bg-[#070A12] border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-sky-500 dark:focus:border-cyan-500 transition-colors"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            {/* Language filter pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-slate-500 mr-1 flex items-center gap-1">
                <Code2 className="w-3 h-3" /> Lang:
              </span>
              <button
                onClick={() => setLanguageFilter("all")}
                className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
                  languageFilter === "all"
                    ? "bg-sky-600 text-white dark:bg-cyan-500 dark:text-slate-950 font-bold shadow-sm"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800"
                }`}
              >
                All ({ARCHIVE_PROJECTS.length})
              </button>
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguageFilter(lang)}
                  className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
                    languageFilter === lang
                      ? "bg-sky-600 text-white dark:bg-cyan-500 dark:text-slate-950 font-bold shadow-sm"
                      : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs font-mono text-slate-500 px-1">
          <span>
            Showing <strong className="text-slate-800 dark:text-slate-300">{filteredProjects.length}</strong> of {ARCHIVE_PROJECTS.length} public repositories
          </span>
          {search && (
            <button
              onClick={() => setSearch("")}
              className="text-sky-600 dark:text-cyan-400 hover:underline"
            >
              Clear search
            </button>
          )}
        </div>

        {/* Dense Archive List */}
        <div className="space-y-3">
          {filteredProjects.map((project) => (
            <div
              key={project.name}
              className="p-4 sm:p-5 rounded-xl bg-white/80 dark:bg-[#0B101D] border border-slate-200/90 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm hover:shadow-md dark:hover:shadow-lg transition-all space-y-2.5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className={`w-2 h-2 rounded-full shrink-0 ${getLanguageColor(project.language)}`} />
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm sm:text-base font-bold text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span>{project.name}</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-sky-600 dark:group-hover:text-cyan-400" />
                  </a>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-center text-xs font-mono text-slate-600 dark:text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    {project.language || "Multi"}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                {project.description}
              </p>

              {project.topics.length > 0 && (
                <div className="flex flex-wrap gap-1 pt-1">
                  {project.topics.map((topic) => (
                    <span
                      key={topic}
                      onClick={() => setSearch(topic)}
                      className="cursor-pointer px-1.5 py-0.5 text-[10px] font-mono rounded bg-slate-100 hover:bg-slate-200 border border-slate-200 dark:bg-slate-900/80 dark:hover:bg-slate-800 dark:border-slate-800/90 text-slate-600 dark:text-slate-400 hover:text-sky-700 dark:hover:text-cyan-300 transition-colors"
                    >
                      #{topic}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}

          {filteredProjects.length === 0 && (
            <div className="text-center py-12 rounded-xl bg-white/80 dark:bg-[#0B101D] border border-slate-200 dark:border-slate-800 space-y-2">
              <p className="font-mono text-sm text-slate-500 dark:text-slate-400">No matching public repositories found.</p>
              <button
                onClick={() => {
                  setSearch("");
                  setLanguageFilter("all");
                }}
                className="text-xs font-mono text-sky-600 dark:text-cyan-400 hover:underline"
              >
                Reset search
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <Footer />
      </div>

      <FloatingDock />
    </main>
  );
}
