"use client";

import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Send, CheckCircle2, AlertCircle, Loader2, RefreshCw, Sparkles, MessageSquare } from "lucide-react";

const INQUIRY_TYPES = [
  { id: "full_time", label: "Full-Time Role", badge: "Recruiters & HR" },
  { id: "contract_build", label: "Contract / MVP", badge: "Founders & Clients" },
  { id: "ai_systems", label: "AI & Daemon Systems", badge: "Engineering Leads" },
  { id: "consulting", label: "Technical Advisory", badge: "Consulting" },
];

export function ContactForm() {
  const [state, handleSubmit, reset] = useForm("mzeednql");
  const [selectedType, setSelectedType] = useState("Full-Time Role");

  if (state.succeeded) {
    return (
      <div className="p-6 sm:p-8 rounded-2xl bg-emerald-500/10 dark:bg-emerald-950/30 border border-emerald-500/30 text-center space-y-4 animate-in fade-in duration-300">
        <div className="inline-flex p-3 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-1.5">
          <h3 className="font-mono text-lg font-bold text-slate-900 dark:text-white">
            Inquiry Successfully Transmitted
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto font-sans leading-relaxed">
            Your message has been delivered directly to Hanzla Ahmad&apos;s primary inbox (
            <span className="font-mono text-slate-800 dark:text-slate-200 font-semibold">
              hello@hanzlaahmad.com
            </span>
            ). Typical response turnaround is within 12–24 hours.
          </p>
        </div>
        <div className="pt-2">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shadow-sm font-medium"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Send Another Inquiry</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
      {/* Hidden input to pass selected inquiry type to Formspree */}
      <input type="hidden" name="inquiry_type" value={selectedType} />

      {/* Inquiry Track Pills */}
      <div className="space-y-1.5">
        <label className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 block">
          01 // ENGAGEMENT TRACK
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {INQUIRY_TYPES.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setSelectedType(t.label)}
              className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                selectedType === t.label
                  ? "bg-sky-50 dark:bg-cyan-950/40 border-sky-500/60 dark:border-cyan-500/60 text-sky-900 dark:text-cyan-300 shadow-xs"
                  : "bg-slate-50/70 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700"
              }`}
            >
              <span className="text-[11px] font-bold truncate block">{t.label}</span>
              <span className="text-[9px] text-slate-400 dark:text-slate-500 block mt-1 font-sans">
                {t.badge}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Name and Email Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <label htmlFor="form-name" className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 block">
            02 // YOUR NAME / ORGANIZATION *
          </label>
          <input
            id="form-name"
            type="text"
            name="name"
            required
            placeholder="e.g. Alex Vance (Recruiter / Founder)"
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#070A12] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500/40 dark:focus:ring-cyan-500/40 font-mono text-xs transition-colors"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} className="text-[11px] text-rose-500 font-sans" />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="form-email" className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 block">
            03 // YOUR EMAIL ADDRESS *
          </label>
          <input
            id="form-email"
            type="email"
            name="email"
            required
            placeholder="name@company.com"
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#070A12] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500/40 dark:focus:ring-cyan-500/40 font-mono text-xs transition-colors"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-[11px] text-rose-500 font-sans" />
        </div>
      </div>

      {/* Optional WhatsApp / Phone for faster reach */}
      <div className="space-y-1.5">
        <label htmlFor="form-whatsapp" className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 block">
          04 // WHATSAPP OR DIRECT PHONE (OPTIONAL)
        </label>
        <input
          id="form-whatsapp"
          type="text"
          name="whatsapp_or_phone"
          placeholder="+1 (555) 000-0000 or +92 300 0000000"
          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#070A12] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500/40 dark:focus:ring-cyan-500/40 font-mono text-xs transition-colors"
        />
      </div>

      {/* Message Textarea */}
      <div className="space-y-1.5">
        <label htmlFor="form-message" className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 block">
          05 // ROLE BRIEF, PROJECT SCOPE, OR TIMELINE *
        </label>
        <textarea
          id="form-message"
          name="message"
          required
          rows={4}
          placeholder="Briefly outline your team's role requirements, system architecture needs, or project deliverables..."
          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#070A12] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500/40 dark:focus:ring-cyan-500/40 font-mono text-xs transition-colors resize-none leading-relaxed"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-[11px] text-rose-500 font-sans" />
      </div>

      {/* Global Form Errors */}
      {state.errors && (
        <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>Transmission encountered an error. Please verify fields or email directly.</span>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={state.submitting}
        className="flex items-center justify-center gap-2 w-full h-11 px-5 rounded-xl bg-sky-600 hover:bg-sky-500 dark:bg-cyan-600 dark:hover:bg-cyan-500 text-white font-bold shadow-md shadow-sky-600/20 dark:shadow-cyan-950/30 transition-all hover:scale-[1.005] disabled:opacity-60 disabled:pointer-events-none cursor-pointer"
      >
        {state.submitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin shrink-0" />
            <span>Transmitting Dispatch to Hanzla...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4 shrink-0" />
            <span>Dispatch Inquiry Directly</span>
          </>
        )}
      </button>
    </form>
  );
}
