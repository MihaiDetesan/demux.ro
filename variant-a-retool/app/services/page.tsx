import type { Metadata } from "next";
import PillarIllustration from "@/components/PillarIllustration";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { pillars } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services — deMUX",
};

export default function Services() {
  return (
    <>
      <section className="relative">
        <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-24">
          <Reveal>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Services
            </h1>
            <p className="mt-4 max-w-xl text-zinc-400">
              Four areas, one small team. We take on work where we can be genuinely useful,
              not everything that comes through the door.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl divide-y divide-white/10 border-t border-white/10 px-6">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.05}>
            <div className="grid gap-6 py-14 sm:grid-cols-3 sm:items-center">
              <div className="sm:col-span-1">
                <div className="h-32 w-full overflow-hidden rounded-lg">
                  <PillarIllustration name={p.icon} />
                </div>
                <h2 className="mt-4 text-xl font-semibold text-white">{p.title}</h2>
              </div>
              <p className="text-zinc-400 sm:col-span-2">{p.detail}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <CTASection />
    </>
  );
}
