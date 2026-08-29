export default function EnergyIllustration() {
  return (
    <svg viewBox="0 0 200 140" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="198" height="138" rx="12" className="fill-zinc-950 stroke-white/10" />
      {/* sun */}
      <circle cx="56" cy="52" r="14" className="fill-amber-400/80" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <line
          key={deg}
          x1={56 + Math.cos((deg * Math.PI) / 180) * 20}
          y1={52 + Math.sin((deg * Math.PI) / 180) * 20}
          x2={56 + Math.cos((deg * Math.PI) / 180) * 26}
          y2={52 + Math.sin((deg * Math.PI) / 180) * 26}
          className="stroke-amber-400/60"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ))}
      {/* wind turbine */}
      <line x1="142" y1="112" x2="142" y2="56" className="stroke-white/30" strokeWidth="2" />
      <g style={{ transformOrigin: "142px 56px" }}>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 142 56"
          to="360 142 56"
          dur="6s"
          repeatCount="indefinite"
        />
        <line x1="142" y1="56" x2="142" y2="28" className="stroke-emerald-300" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="142" y1="56" x2="166" y2="70" className="stroke-emerald-300" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="142" y1="56" x2="118" y2="70" className="stroke-emerald-300" strokeWidth="2.5" strokeLinecap="round" />
      </g>
      <circle cx="142" cy="56" r="3" className="fill-white/60" />
      {/* baseline */}
      <line x1="16" y1="112" x2="184" y2="112" className="stroke-white/10" strokeWidth="1.5" />
    </svg>
  );
}
