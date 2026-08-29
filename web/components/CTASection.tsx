import Link from "next/link";

export default function CTASection() {
  return (
    <section className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Tell us what you&apos;re running.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-zinc-400">
          Vision, embedded, energy, or integration — we&apos;ll tell you plainly whether
          we&apos;re the right fit.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}
