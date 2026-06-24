import Link from "next/link";
import landingContent from "@/data/landing-content.json";

type LandingData = typeof landingContent;

function rupees(value: number | string) {
  return `Rs.${value}`;
}

export default function HomePage() {
  const data: LandingData = landingContent;

  return (
    <main className="min-h-screen bg-[#fafaf8] text-[#0a0a0a]">
      <nav className="sticky top-0 z-50 border-b border-[#e5e5e0] bg-[#fafaf8]/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <div className="font-display text-xl tracking-tight">
            {data.brand.name}
            <span className="text-[#1d9e75]">{data.brand.accent}</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            {data.nav.links.map((link) => (
              <Link key={link.label} href={link.href} className="text-[#6b6b6b] hover:text-[#0a0a0a]">
                {link.label}
              </Link>
            ))}
            <Link
              href={data.nav.cta.href}
              className="rounded-md bg-[#0a0a0a] px-4 py-2 text-xs font-medium text-white transition hover:opacity-90"
            >
              {data.nav.cta.label}
            </Link>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-3xl px-6 pb-16 pt-24 text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#e1f5ee] px-4 py-1 text-xs font-medium uppercase tracking-wider text-[#0f6e56]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#1d9e75]" />
          {data.hero.eyebrow}
        </div>
        <h1 className="font-display text-5xl leading-tight tracking-tight md:text-6xl">
          {data.hero.titleTop}
          <br />
          <em className="text-[#1d9e75] not-italic">{data.hero.titleHighlight}</em>
          <br />
          {data.hero.titleBottom}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-8 text-[#6b6b6b]">
          {data.hero.subtitle}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={data.hero.primaryCta.href}
            className="rounded-md bg-[#0a0a0a] px-7 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            {data.hero.primaryCta.label}
          </Link>
          <Link
            href={data.hero.secondaryCta.href}
            className="rounded-md border border-[#e5e5e0] px-7 py-3 text-sm text-[#0a0a0a] transition hover:border-[#bfbfb8]"
          >
            {data.hero.secondaryCta.label}
          </Link>
        </div>
        <p className="mt-5 text-sm text-[#9a9a92]">{data.hero.note}</p>
      </section>

      <section className="border-y border-[#e5e5e0] px-6 py-5">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4 text-sm text-[#6b6b6b]">
          {data.socialProof.map((entry, index) => (
            <div key={entry} className="flex items-center gap-4">
              <span>{entry}</span>
              {index < data.socialProof.length - 1 ? <span className="h-1 w-1 rounded-full bg-[#d6d6cf]" /> : null}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-8 text-xs font-medium uppercase tracking-[0.15em] text-[#8d8d84]">The problem</p>
        <h2 className="font-display text-4xl tracking-tight">{data.problem.heading}</h2>
        <p className="mt-4 max-w-3xl text-[#6b6b6b]">{data.problem.description}</p>

        <div className="mt-10 grid overflow-hidden rounded-xl border border-[#e5e5e0] bg-[#e5e5e0] md:grid-cols-2">
          {data.problem.cards.map((card) => (
            <article key={card.title} className="flex gap-4 bg-[#fafaf8] p-7">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#f4f4ee] text-sm">
                {card.icon}
              </div>
              <div>
                <h3 className="text-sm font-medium">{card.title}</h3>
                <p className="mt-1 text-sm text-[#6b6b6b]">{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="border-t border-[#e5e5e0]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.15em] text-[#8d8d84]">How it works</p>
          <div className="space-y-1">
            {data.howItWorks.map((step, index) => (
              <div key={step.title} className="grid grid-cols-[3rem,1fr] gap-6 border-b border-[#e5e5e0] py-8">
                <span className="font-display pt-1 text-3xl text-[#d1d1ca]">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-base font-medium">{step.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-[#6b6b6b]">{step.description}</p>
                  <span className="mt-3 inline-block rounded bg-[#e1f5ee] px-2 py-1 text-xs font-medium text-[#0f6e56]">
                    {step.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#e5e5e0]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.15em] text-[#8d8d84]">See it live</p>
          <p className="text-[#6b6b6b]">This is what your customers will see when they open your menu link.</p>

          <div className="mt-8 overflow-hidden rounded-xl border border-[#e5e5e0]">
            <div className="flex items-center gap-2 border-b border-[#e5e5e0] bg-[#f5f5f0] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28ca41]" />
              <span className="ml-2 rounded border border-[#e5e5e0] bg-white px-3 py-1 text-xs text-[#6b6b6b]">
                torqorbit.in/{data.liveDemo.slug}
              </span>
            </div>
            <div className="bg-white p-6">
              <h3 className="text-base font-medium">{data.liveDemo.businessName}</h3>
              <p className="text-sm text-[#6b6b6b]">{data.liveDemo.businessMeta}</p>

              <p className="mt-5 text-xs font-medium uppercase tracking-[0.1em] text-[#8d8d84]">
                {data.liveDemo.category}
              </p>
              <div className="mt-3 space-y-2">
                {data.liveDemo.items.map((item) => (
                  <div
                    key={item.name}
                    className={`flex items-center justify-between rounded-lg border border-[#e5e5e0] px-4 py-3 ${
                      item.soldOut ? "opacity-50" : ""
                    }`}
                  >
                    <div className="text-sm">
                      <span>{item.name}</span>
                      {item.badge ? (
                        <span className="ml-2 rounded bg-[#e1f5ee] px-2 py-0.5 text-xs text-[#0f6e56]">{item.badge}</span>
                      ) : null}
                    </div>
                    <div className="text-sm font-medium">
                      {item.soldOut ? "Sold out today" : rupees(item.price)}
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href={`/${data.liveDemo.slug}`}
                className="mt-4 inline-flex w-full justify-center rounded-lg bg-[#25D366] px-4 py-3 text-sm font-medium text-white"
              >
                Order via WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="border-t border-[#e5e5e0]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.15em] text-[#8d8d84]">Pricing</p>
          <h2 className="font-display text-4xl tracking-tight">One plan. Everything included.</h2>
          <p className="mt-3 text-[#6b6b6b]">We do not take a cut of your orders. Flat monthly subscription, cancel anytime.</p>

          <div className="mt-8 max-w-md rounded-2xl border border-[#0a0a0a] bg-white p-8">
            <span className="inline-block rounded border border-[#e5e5e0] px-3 py-1 text-xs text-[#6b6b6b]">
              {data.pricing.trialNote}
            </span>
            <h3 className="mt-4 text-base font-medium">{data.pricing.planName}</h3>
            <p className="font-display mt-1 text-6xl leading-none tracking-tight">Rs.{data.pricing.amount}</p>
            <p className="mt-2 text-sm text-[#6b6b6b]">{data.pricing.period}</p>
            <ul className="mt-6 space-y-2 text-sm text-[#6b6b6b]">
              {data.pricing.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#1d9e75]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href={data.pricing.cta.href}
              className="mt-7 inline-flex w-full justify-center rounded-md bg-[#0a0a0a] px-4 py-3 text-sm font-medium text-white"
            >
              {data.pricing.cta.label}
            </Link>
          </div>
          <p className="mt-4 text-sm text-[#9a9a92]">{data.pricing.footnote}</p>
        </div>
      </section>

      <section className="border-t border-[#e5e5e0]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.15em] text-[#8d8d84]">FAQ</p>
          <div className="max-w-4xl divide-y divide-[#e5e5e0]">
            {data.faq.map((entry) => (
              <details key={entry.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium">
                  {entry.question}
                  <span className="text-xl text-[#8d8d84] transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[#6b6b6b]">{entry.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#e5e5e0] px-6 py-20 text-center">
        <h2 className="font-display text-4xl tracking-tight">{data.finalCta.heading}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-[#6b6b6b]">{data.finalCta.description}</p>
        <Link
          href={data.finalCta.cta.href}
          className="mt-7 inline-flex rounded-md bg-[#0a0a0a] px-8 py-3 text-sm font-medium text-white"
        >
          {data.finalCta.cta.label}
        </Link>
        <p className="mt-3 text-sm text-[#9a9a92]">{data.finalCta.note}</p>
      </section>

      <footer className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-8">
        <div className="font-display text-lg">
          {data.brand.name}
          <span className="text-[#1d9e75]">{data.brand.accent}</span>
        </div>
        <p className="text-sm text-[#9a9a92]">{data.brand.cityLine}</p>
      </footer>
    </main>
  );
}
