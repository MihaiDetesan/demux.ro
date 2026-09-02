import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — deMUX",
};

export default function Contact() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        Get in touch
      </h1>
      <p className="mt-4 max-w-xl text-zinc-400">
        Tell us about the system you&apos;re running and what you need built. We reply
        within a day or two.
      </p>

      <div className="mt-14 max-w-sm space-y-6">
        <div className="flex items-start gap-3">
          <Mail className="mt-0.5 h-5 w-5 text-zinc-500" />
          <div>
            <p className="text-sm text-zinc-500">Sales</p>
            <a href="mailto:contact@demux.ro" className="text-white hover:underline">
              contact@demux.ro
            </a>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Mail className="mt-0.5 h-5 w-5 text-zinc-500" />
          <div>
            <p className="text-sm text-zinc-500">Service</p>
            <a href="mailto:service@demux.ro" className="text-white hover:underline">
              service@demux.ro
            </a>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Phone className="mt-0.5 h-5 w-5 text-zinc-500" />
          <div>
            <p className="text-sm text-zinc-500">Phone</p>
            <a href="tel:+40735428572" className="text-white hover:underline">
              +40 735 428 572
            </a>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-5 w-5 text-zinc-500" />
          <div>
            <p className="text-sm text-zinc-500">Based in</p>
            <p className="text-white">Romania</p>
          </div>
        </div>
      </div>
    </section>
  );
}
