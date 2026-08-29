export default function DemuxIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* input line */}
      <line x1="1" y1="16" x2="8" y2="16" />
      {/* trapezoid body: narrow at input, wide at outputs */}
      <path d="M8 10 L22 4 L22 28 L8 22 Z" />
      {/* output lines fanning out */}
      <line x1="22" y1="6" x2="31" y2="6" />
      <line x1="22" y1="16" x2="31" y2="16" />
      <line x1="22" y1="26" x2="31" y2="26" />
      {/* select control line */}
      <line x1="15" y1="24" x2="15" y2="31" />
    </svg>
  );
}
