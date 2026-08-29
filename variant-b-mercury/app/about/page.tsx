import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import { benefits } from "@/lib/content";

export const metadata: Metadata = {
  title: "About — demux",
};

export default function About() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pb-16 pt-24">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">About demux</h1>
        <p className="mt-6 text-neutral-600">
          demux is a small software studio working at the edge of hardware and software —
          vision systems on factory floors, embedded devices in the field, and control
          software for renewable energy assets. We started demux because that kind of work
          is usually split between a hardware vendor, an integrator, and a software shop,
          none of whom talk to each other. We do all three.
        </p>
        <p className="mt-4 text-neutral-600">
          We stay small on purpose. Every project is handled by people who write the code
          and answer the phone — no account managers, no handoffs.
        </p>
      </section>

      <section className="border-y border-black/5 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-semibold tracking-tight">Why work with us</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title}>
                <h3 className="text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
