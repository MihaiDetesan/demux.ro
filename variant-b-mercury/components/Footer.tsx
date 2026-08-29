import Link from "next/link";
import { nav } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-3">
        <div>
          <p className="text-lg font-semibold">demux</p>
          <p className="mt-3 max-w-xs text-sm text-neutral-500">
            Software for vision systems, embedded devices, and energy infrastructure.
          </p>
        </div>
        <div>
          <p className="text-sm font-medium">Company</p>
          <ul className="mt-3 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-neutral-500 hover:text-black">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-neutral-500">
            <li>hello@demux.ro</li>
            <li>Romania</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black/5 px-6 py-6 text-center text-xs text-neutral-400">
        © {new Date().getFullYear()} demux. All rights reserved.
      </div>
    </footer>
  );
}
