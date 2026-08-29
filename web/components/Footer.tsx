import Link from "next/link";
import DemuxIcon from "@/components/DemuxIcon";
import { nav } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-3">
        <div>
          <p className="flex items-center gap-2 text-lg font-semibold text-white">
            <DemuxIcon className="h-5 w-5 text-emerald-400" />
            deMUX
          </p>
          <p className="mt-3 max-w-xs text-sm text-zinc-500">
            Software for vision systems, embedded devices, and energy infrastructure.
          </p>
        </div>
        <div>
          <p className="text-sm font-medium text-white">Company</p>
          <ul className="mt-3 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-zinc-500 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium text-white">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-500">
            <li>hello@demux.ro</li>
            <li>Romania</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} deMUX. All rights reserved.
      </div>
    </footer>
  );
}
