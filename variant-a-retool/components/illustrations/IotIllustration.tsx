export default function IotIllustration() {
  const nodes = [
    { x: 32, y: 30 },
    { x: 168, y: 26 },
    { x: 30, y: 110 },
    { x: 170, y: 112 },
  ];
  return (
    <svg viewBox="0 0 200 140" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="198" height="138" rx="12" className="fill-zinc-950 stroke-white/10" />
      {/* central chip */}
      <rect x="82" y="52" width="36" height="36" rx="4" className="fill-black stroke-sky-400/60" />
      <rect x="92" y="62" width="16" height="16" rx="2" className="fill-sky-400/20 stroke-sky-400/60" />
      {nodes.map((n, i) => (
        <g key={i}>
          <line
            x1="100" y1="70" x2={n.x} y2={n.y}
            className="stroke-white/15"
            strokeWidth="1.5"
          />
          <circle cx={n.x} cy={n.y} r="5" className="fill-sky-400/80">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2.4s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}
    </svg>
  );
}
