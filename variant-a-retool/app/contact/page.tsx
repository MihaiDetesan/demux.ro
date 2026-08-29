import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";

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

      <div className="mt-14 grid gap-12 sm:grid-cols-2">
        <form className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm text-zinc-400">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className="mt-1 w-full rounded-lg border border-white/10 bg-zinc-950 px-4 py-2.5 text-white placeholder-zinc-600 outline-none focus:border-white/30"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-zinc-400">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="mt-1 w-full rounded-lg border border-white/10 bg-zinc-950 px-4 py-2.5 text-white placeholder-zinc-600 outline-none focus:border-white/30"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-zinc-400">What are you building?</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="mt-1 w-full rounded-lg border border-white/10 bg-zinc-950 px-4 py-2.5 text-white placeholder-zinc-600 outline-none focus:border-white/30"
              placeholder="Vision, embedded, energy, integrations..."
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
          >
            Send message
          </button>
        </form>

        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 h-5 w-5 text-zinc-500" />
            <div>
              <p className="text-sm text-zinc-500">Email</p>
              <p className="text-white">hello@demux.ro</p>
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
      </div>
    </section>
  );
}
