export default function IntegrationIllustration() {
  const boxes = [
    { x: 20, y: 20, w: 40, h: 28, label: "ERP" },
    { x: 140, y: 20, w: 40, h: 28, label: "CRM" },
    { x: 20, y: 92, w: 40, h: 28, label: "APP" },
    { x: 140, y: 92, w: 40, h: 28, label: "API" },
  ];
  return (
    <svg viewBox="0 0 200 140" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="198" height="138" rx="12" className="fill-zinc-950 stroke-white/10" />
      {boxes.map((b) => (
        <line
          key={b.label}
          x1={b.x + b.w / 2}
          y1={b.y + b.h / 2}
          x2="100"
          y2="70"
          className="stroke-violet-400/40"
          strokeWidth="1.5"
        />
      ))}
      <circle cx="100" cy="70" r="10" className="fill-violet-400/20 stroke-violet-400" strokeWidth="1.5" />
      <circle cx="100" cy="70" r="3" className="fill-violet-300" />
      {boxes.map((b) => (
        <g key={b.label}>
          <rect x={b.x} y={b.y} width={b.w} height={b.h} rx="4" className="fill-black stroke-white/20" />
          <text
            x={b.x + b.w / 2}
            y={b.y + b.h / 2 + 4}
            textAnchor="middle"
            className="fill-zinc-400 text-[9px] font-mono"
          >
            {b.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
