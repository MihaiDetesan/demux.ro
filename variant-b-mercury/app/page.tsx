import Link from "next/link";
import { Factory, Wind, Radio, Building2 } from "lucide-react";
import PillarIcon from "@/components/PillarIcon";
import CTASection from "@/components/CTASection";
import { pillars, benefits, process } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-gradient-to-br from-amber-200 via-orange-200 to-emerald-200 opacity-60 blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-24 sm:pt-32">
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Software that connects your hardware to your business.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-neutral-600">
            demux builds vision, embedded, and energy software for industrial teams —
            and the integrations that keep it all talking to each other.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
            >
              Talk to us
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium transition-colors hover:bg-black/5"
            >
              See our work
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 text-neutral-500">
            <span className="flex items-center gap-2 text-sm"><Factory className="h-4 w-4" /> Manufacturing</span>
            <span className="flex items-center gap-2 text-sm"><Wind className="h-4 w-4" /> Renewable energy</span>
            <span className="flex items-center gap-2 text-sm"><Radio className="h-4 w-4" /> Device fleets</span>
            <span className="flex items-center gap-2 text-sm"><Building2 className="h-4 w-4" /> Facilities & logistics</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-semibold tracking-tight">What we build</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100">
                <PillarIcon name={p.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">{p.blurb}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-black/5 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-semibold tracking-tight">How we work</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {process.map((step, i) => (
              <div key={step.title}>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-sm font-medium text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 sm:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title}>
              <h3 className="text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
