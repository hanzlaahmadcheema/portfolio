"use client";

import React, { useState } from "react";
import { HeroSection } from "@/components/hero-section";
import { CapabilitiesSection } from "@/components/capabilities-section";
import { ProjectsSection } from "@/components/projects-section";
import { HiringSection } from "@/components/hiring-section";
import { ExperienceSection } from "@/components/experience-section";
import { ContactSection } from "@/components/contact-section";
import { FloatingDock } from "@/components/floating-dock";
import { TerminalModal } from "@/components/terminal-modal";
import { Footer } from "@/components/footer";

export default function Home() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-slate-50 dark:bg-[#070A11] bg-grid-pattern selection:bg-cyan-500/20 selection:text-cyan-900 dark:selection:text-cyan-300 transition-colors duration-200">
      {/* Top ambient glow */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-sky-200/30 dark:from-cyan-950/20 via-transparent to-transparent pointer-events-none -z-10" />

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 pb-28 sm:pb-32">
        {/* Hero & Telemetry */}
        <HeroSection onOpenTerminal={() => setTerminalOpen(true)} />

        {/* Capabilities (6 Architectural Domains) */}
        <CapabilitiesSection />

        {/* Production Proof of Work (Flagship Systems & Portals) */}
        <ProjectsSection />

        {/* Hiring & Engagement Guide (For HR & Project Clients) */}
        <HiringSection />

        {/* Experience Timeline */}
        <ExperienceSection />

        {/* Contact & Connect */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </div>

      {/* Signature Floating Dock */}
      <FloatingDock onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Interactive System Terminal Modal */}
      <TerminalModal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </main>
  );
}
