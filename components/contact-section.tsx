"use client";

import React, { useState } from "react";
import { DATA } from "@/data/resume";
import {
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  Phone,
  MessageSquare,
  Clock,
  ExternalLink,
} from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import { ContactForm } from "@/components/contact-form";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(DATA.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(DATA.contact.tel);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-12 sm:py-20 border-t border-slate-200 dark:border-slate-800/80 space-y-8">
      <div className="max-w-xl mx-auto text-center space-y-3">
        <span className="text-xs font-mono font-bold text-sky-600 dark:text-cyan-400 tracking-wider">
          05 // INITIATE HIRING & PROJECT CONTACT
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono">
          Ready to Build or Hire? Let's Talk
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
          Open for full-time engineering appointments, high-impact consulting contracts, and turnkey software platform builds. Direct reachability guaranteed.
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        {/* Primary WhatsApp Direct Channel Card */}
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-slate-100/80 dark:from-emerald-950/30 dark:via-emerald-900/10 dark:to-[#0B101D] border-2 border-emerald-500/30 dark:border-emerald-500/40 shadow-xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-emerald-500 text-white shadow-md shadow-emerald-500/30 shrink-0">
                <WhatsAppIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    Direct WhatsApp
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300 font-semibold">
                    Fastest Response
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-sans mt-0.5">
                  Direct recruiter & client channel • Active daily (Asia/Karachi PKT)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-center font-mono">
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                {DATA.contact.tel}
              </span>
              <button
                onClick={copyPhone}
                className="p-1.5 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors"
                title="Copy phone number"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 border-t border-emerald-500/20">
            <a
              href={DATA.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full sm:flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-bold shadow-md shadow-emerald-950/20 transition-all hover:scale-[1.01]"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Start WhatsApp Chat ({DATA.contact.tel})</span>
            </a>

            <button
              onClick={copyPhone}
              className="flex items-center justify-center gap-1.5 w-full sm:w-auto py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-mono text-slate-700 dark:text-slate-300 transition-colors"
            >
              {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedPhone ? "Copied" : "Copy Number"}</span>
            </button>
          </div>
        </div>

        {/* Formspree Interactive Direct Dispatch Card */}
        <div className="p-5 sm:p-7 rounded-2xl bg-white/85 dark:bg-[#0B101D] border border-slate-200/90 dark:border-slate-800/90 shadow-xl space-y-5">
          <div className="border-b border-slate-200 dark:border-slate-800/80 pb-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-sky-50 dark:bg-cyan-950/40 border border-sky-200 dark:border-cyan-800/50 text-sky-600 dark:text-cyan-400">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono text-sm sm:text-base font-bold text-slate-900 dark:text-white block">
                  Send Direct Inquiry
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono block">
                  Formspree Verified Delivery to hello@hanzlaahmad.com
                </span>
              </div>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800/50 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Direct Pipeline
            </span>
          </div>

          <ContactForm />
        </div>

        {/* Email & Recruiter Channels */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white/80 dark:bg-[#0B101D] border border-slate-200/90 dark:border-slate-800 shadow-xl space-y-4">
          {/* Email Copy Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-[#070A12] border border-slate-200 dark:border-slate-800/90 gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="p-2 rounded-lg bg-sky-50 dark:bg-cyan-950/40 border border-sky-200 dark:border-cyan-800/50 text-sky-600 dark:text-cyan-400 shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-mono">
                  Official Inquiries & Formal Offers
                </span>
                <span className="text-xs sm:text-sm font-mono text-slate-800 dark:text-slate-200 select-all font-medium break-all">
                  {DATA.contact.email}
                </span>
              </div>
            </div>

            <button
              onClick={copyEmail}
              className="flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-mono rounded-lg bg-slate-200/80 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors shrink-0 font-medium w-full sm:w-auto shadow-sm"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />}
              <span>{copiedEmail ? "Copied Email" : "Copy Email"}</span>
            </button>
          </div>

          {/* Action Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 font-mono text-xs">
            <a
              href={`mailto:${DATA.contact.email}?subject=Engineering%20Inquiry%20-%20Hanzla%20Ahmad&body=Hi%20Hanzla,%0A%0AWe%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity%20/%20project.`}
              className="flex items-center justify-center gap-2 p-3 font-bold rounded-xl bg-sky-600 hover:bg-sky-500 dark:bg-cyan-600 dark:hover:bg-cyan-500 text-white shadow-md shadow-sky-600/20 dark:shadow-cyan-950/30 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Send Direct Email</span>
            </a>

            <a
              href={DATA.contact.social.LinkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3 font-medium rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              <span>LinkedIn InMail</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </a>

            <a
              href={DATA.contact.social.GitHub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3 font-medium rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 transition-colors"
            >
              <Github className="w-4 h-4 text-slate-700 dark:text-slate-300" />
              <span>Review Code</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
