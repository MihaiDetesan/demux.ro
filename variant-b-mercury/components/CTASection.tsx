import Link from "next/link";

export default function CTASection() {
  return (
    <section className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Let&apos;s talk about what you&apos;re building.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-neutral-600">
          Vision, embedded, energy, or integration — tell us what you&apos;re running and
          we&apos;ll tell you plainly whether we can help.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Talk to us
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium transition-colors hover:bg-black/5"
          >
            See our work
          </Link>
        </div>
      </div>
    </section>
  );
}
