import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { process } from "@/lib/content";

export const metadata: Metadata = {
  title: "About — deMUX",
};

export default function About() {
  return (
    <>
      <section className="relative">
        <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 pb-16 pt-24">
        <Reveal>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            About deMUX
          </h1>
          <p className="mt-6 text-zinc-400">
            deMUX is a small software studio working at the edge of hardware and software —
            vision systems on factory floors, embedded devices in the field, and control
            software for renewable energy assets. We started deMUX because that kind of work
            is usually split between a hardware vendor, an integrator, and a software shop,
            none of whom talk to each other. We do all three.
          </p>
          <p className="mt-4 text-zinc-400">
            We work the way you&apos;d bring in a fixer, not a vendor. For the length of an
            engagement, your brief is the only mandate we answer to — no roadmap of our own
            to push, no upsells, no handoffs to someone who wasn&apos;t in the room. We show
            up for the problem you have right now, solve it completely, and leave the system
            in better hands than we found it.
          </p>
          <p className="mt-4 text-zinc-400">
            That&apos;s why we stay small on purpose — every project is handled by the people
            who write the code and answer the phone.
          </p>
        </Reveal>
        </div>
      </section>

      <section className="border-t border-white/10 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500">
              How we work
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {process.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <span className="text-sm text-zinc-600">{`0${i + 1}`}</span>
                <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{step.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
