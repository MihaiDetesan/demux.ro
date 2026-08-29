import Link from "next/link";
import { ArrowRight, Factory, Wind, Radio, Building2 } from "lucide-react";
import PillarIllustration from "@/components/PillarIllustration";
import HeroMockup from "@/components/HeroMockup";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { pillars, industries } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden pb-8 pt-24 sm:pt-32">
        <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <Reveal>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Software for the physical world.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-zinc-400">
              deMUX is a small software studio building vision, embedded, and energy systems
              for industrial teams — plus the integrations that connect it all.
            </p>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
            >
              Get in touch{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <HeroMockup />

          <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/10 pt-10 text-zinc-500">
            <span className="text-sm">Built for</span>
            <span className="flex items-center gap-2 text-sm"><Factory className="h-4 w-4" /> Manufacturing</span>
            <span className="flex items-center gap-2 text-sm"><Wind className="h-4 w-4" /> Renewable energy</span>
            <span className="flex items-center gap-2 text-sm"><Radio className="h-4 w-4" /> Device fleets</span>
            <span className="flex items-center gap-2 text-sm"><Building2 className="h-4 w-4" /> Facilities & logistics</span>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500">
              What we build
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="group h-full bg-black p-8 transition-colors duration-300 hover:bg-zinc-950">
                  <div className="h-28 w-full overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-[1.02]">
                    <PillarIllustration name={p.icon} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm text-zinc-400">{p.blurb}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500">
            In practice
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {industries.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-white/10 p-8 transition-colors duration-300 hover:border-white/25">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
