"use client";

import { motion } from "framer-motion";

export default function HeroMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto mt-16 max-w-4xl"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-20 -top-20 -bottom-10 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.18),_transparent_60%)]"
      />
      <div className="overflow-hidden rounded-xl border border-white/10 bg-zinc-950 shadow-2xl shadow-black/50">
        <div className="flex items-center gap-1.5 border-b border-white/10 bg-zinc-900/80 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
          <span className="ml-3 rounded bg-white/5 px-3 py-0.5 font-mono text-[11px] text-zinc-500">
            console.demux.ro
          </span>
        </div>

        <div className="grid grid-cols-3 gap-px bg-white/5 p-px sm:h-72">
          <div className="col-span-2 flex flex-col gap-3 bg-black p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-zinc-400">Line 3 — vision inspection</span>
              <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> live
              </span>
            </div>
            <div className="relative flex-1 rounded-lg border border-white/10 bg-zinc-950">
              <svg viewBox="0 0 300 140" className="h-full w-full">
                <rect x="110" y="30" width="80" height="60" rx="3" className="stroke-white/30" fill="none" />
                <path d="M104 34h-6a4 4 0 00-4 4v6" className="stroke-emerald-400" strokeWidth="2" fill="none" />
                <path d="M196 34h6a4 4 0 014 4v6" className="stroke-emerald-400" strokeWidth="2" fill="none" />
                <path d="M104 86h-6a4 4 0 01-4-4v-6" className="stroke-emerald-400" strokeWidth="2" fill="none" />
                <path d="M196 86h6a4 4 0 004-4v-6" className="stroke-emerald-400" strokeWidth="2" fill="none" />
                <line x1="20" y1="60" x2="280" y2="60" className="stroke-emerald-400/60" strokeWidth="1.5">
                  <animate attributeName="y1" values="30;90;30" dur="2.6s" repeatCount="indefinite" />
                  <animate attributeName="y2" values="30;90;30" dur="2.6s" repeatCount="indefinite" />
                </line>
              </svg>
            </div>
          </div>

          <div className="flex flex-col gap-px bg-white/5">
            <div className="flex-1 space-y-2 bg-black p-4">
              <span className="text-xs font-medium text-zinc-400">Device fleet</span>
              <div className="space-y-1.5">
                {["EDGE-04", "EDGE-11", "EDGE-19"].map((id, i) => (
                  <div key={id} className="flex items-center justify-between rounded bg-white/[0.03] px-2 py-1.5">
                    <span className="font-mono text-[11px] text-zinc-500">{id}</span>
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-sky-400"
                      style={{ animation: `pulse 2s ${i * 0.4}s infinite` }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 space-y-2 bg-black p-4">
              <span className="text-xs font-medium text-zinc-400">Solar array — yield</span>
              <svg viewBox="0 0 120 40" className="h-10 w-full">
                <polyline
                  points="0,32 15,28 30,20 45,22 60,10 75,14 90,6 105,12 120,4"
                  className="stroke-amber-400"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
