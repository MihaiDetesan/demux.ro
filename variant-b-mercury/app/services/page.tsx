import type { Metadata } from "next";
import PillarIcon from "@/components/PillarIcon";
import CTASection from "@/components/CTASection";
import { pillars } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services — demux",
};

export default function Services() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-24">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Services</h1>
        <p className="mt-4 max-w-xl text-neutral-600">
          Four areas we know well. We take on projects where we can be genuinely useful,
          not everything that comes through the door.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 sm:grid-cols-2">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100">
                <PillarIcon name={p.icon} className="h-5 w-5" />
              </div>
              <h2 className="mt-4 text-xl font-semibold">{p.title}</h2>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{p.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
