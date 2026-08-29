import Link from "next/link";
import { nav } from "@/lib/content";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#fbfaf8]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          demux
        </Link>
        <nav className="hidden items-center gap-8 sm:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-neutral-600 transition-colors hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
        >
          Talk to us
        </Link>
      </div>
    </header>
  );
}
