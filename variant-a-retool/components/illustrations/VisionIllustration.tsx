export default function VisionIllustration() {
  return (
    <svg viewBox="0 0 200 140" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="198" height="138" rx="12" className="fill-zinc-950 stroke-white/10" />
      <rect x="24" y="24" width="152" height="92" rx="6" className="fill-black stroke-emerald-400/30" />
      {/* scan target / part */}
      <rect x="76" y="48" width="48" height="36" rx="3" className="stroke-white/40" fill="none" />
      {/* corner reticle brackets */}
      <path d="M70 46h-8a4 4 0 00-4 4v8" className="stroke-emerald-400" strokeWidth="2" strokeLinecap="round" />
      <path d="M130 46h8a4 4 0 014 4v8" className="stroke-emerald-400" strokeWidth="2" strokeLinecap="round" />
      <path d="M70 90h-8a4 4 0 01-4-4v-8" className="stroke-emerald-400" strokeWidth="2" strokeLinecap="round" />
      <path d="M130 90h8a4 4 0 004-4v-8" className="stroke-emerald-400" strokeWidth="2" strokeLinecap="round" />
      {/* scan line */}
      <line x1="24" y1="66" x2="176" y2="66" className="stroke-emerald-400/70" strokeWidth="1.5">
        <animate attributeName="y1" values="30;110;30" dur="3s" repeatCount="indefinite" />
        <animate attributeName="y2" values="30;110;30" dur="3s" repeatCount="indefinite" />
      </line>
      {/* defect flag */}
      <circle cx="146" cy="96" r="4" className="fill-red-400">
        <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
