import type { Metadata } from "next";
import Link from "next/link";
import menuMockData from "@/data/menu-mock-data.json";
import { SITE } from "@/data/landing";

type MenuCollection = typeof menuMockData;
type MenuData = MenuCollection["menus"][number];
type MenuItem = MenuData["categories"][number]["items"][number];

const MENUS: MenuData[] = menuMockData.menus;

function getMenu(slug: string) {
  return MENUS.find((menu) => menu.slug === slug) ?? null;
}

function getWhatsAppHref(menu: MenuData) {
  const availableItems = menu.categories.flatMap((category) =>
    category.items.filter((item) => item.isAvailable)
  );
  const list = availableItems.map((item) => `- ${item.name} (Rs.${item.price})`).join("\n");
  const text = encodeURIComponent(
    `Hi! I would like to place an order from ${menu.name}.\n\nItems:\n${list}\n\nPlease confirm the delivery details.`
  );
  return `https://wa.me/${menu.whatsappNumber}?text=${text}`;
}

function getSuggestedTotal(menu: MenuData) {
  const firstTwoItems = menu.categories.flatMap((category) =>
    category.items.filter((item) => item.isAvailable).slice(0, 1)
  );
  return firstTwoItems.reduce((sum, item) => sum + item.price, 0);
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data = getMenu(params.slug);
  if (!data) {
    return { title: "Menu Not Found" };
  }
  return {
    title: `${data.name} — Order on WhatsApp`,
    description: `Browse ${data.name} menu and order on WhatsApp. ${data.tagline}. Powered by Torq Orbit.`,
    alternates: { canonical: `${SITE.url}/${data.slug}` },
    openGraph: {
      title: `${data.name} — Torq Orbit Demo Store`,
      description: data.tagline,
      url: `${SITE.url}/${data.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return MENUS.map((menu) => ({ slug: menu.slug }));
}

export default function MenuPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = getMenu(params.slug);

  if (!data) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#fafaf8] px-6">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-[#0a0a0a]">Menu Not Found</h1>
          <p className="mt-2 text-sm text-[#6b6b6b]">
            This kitchen may have closed or the link is incorrect.
          </p>
        </div>
      </main>
    );
  }

  const whatsappHref = getWhatsAppHref(data);
  const suggestedTotal = getSuggestedTotal(data);
  const suggestedItemsCount = Math.max(data.categories.length, 1);

  return (
    <main className="min-h-screen bg-[#f0ede8] p-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex flex-wrap items-center gap-3 rounded-lg border border-[#e5e0d8] bg-[#f5f2ec] p-2">
          <Link
            href="/"
            className="rounded-md bg-white px-3 py-1 text-xs font-medium text-[#0a0a0a] hover:bg-[#f0ede8] transition"
          >
            ← Home
          </Link>
          <span className="text-[#ccc]">|</span>
          <span className="rounded-md bg-white px-3 py-1 text-xs font-medium text-[#6b6b6b]">Template</span>
          <Link
            href="/priyas-tiffin"
            className={`rounded-md px-3 py-1 text-xs transition ${
              data.template === "minimal"
                ? "bg-[#1a1a1a] text-white"
                : "bg-transparent text-[#6b6b6b] hover:bg-white"
            }`}
          >
            Minimal
          </Link>
          <Link
            href="/zainabs-bakes"
            className={`rounded-md px-3 py-1 text-xs transition ${
              data.template === "cards"
                ? "bg-[#1a1a1a] text-white"
                : "bg-transparent text-[#6b6b6b] hover:bg-white"
            }`}
          >
            Cards
          </Link>
          <span className="ml-auto text-xs text-[#8f8f86]">Mock JSON data source</span>
        </div>

        <section className="mx-auto w-full max-w-sm overflow-hidden rounded-[34px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
          <div className="flex h-3 items-center justify-center bg-[#f5f5f3]">
            <div className="h-1.5 w-20 rounded bg-[#e0ddd8]" />
          </div>

          {data.template === "minimal" ? (
            <div className="flex flex-col">
              <header className="border-b border-[#f0ede8] px-5 pb-4 pt-7">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e1f5ee] text-lg">
                    {data.logoEmoji}
                  </div>
                  <div>
                    <h1 className="text-base font-medium text-[#0a0a0a]">{data.name}</h1>
                    <p className="text-xs text-[#999]">{data.tagline}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 text-[11px] text-[#bbb]">
                  {data.meta.map((entry) => (
                    <span key={entry}>{entry}</span>
                  ))}
                </div>
              </header>

              <div className="px-5 py-4">
                {data.categories.map((category) => (
                  <section key={category.id}>
                    <h2 className="mb-3 mt-4 border-b border-[#f5f3f0] pb-2 text-[10px] font-medium uppercase tracking-[0.1em] text-[#bbb] first:mt-0">
                      {category.name}
                    </h2>
                    {category.items.map((item) => (
                      <article
                        key={item.id}
                        className={`flex items-center justify-between border-b border-[#faf9f7] py-3 last:border-b-0 ${
                          item.isAvailable ? "" : "opacity-50"
                        }`}
                      >
                        <div className="pr-3">
                          <div className="text-sm text-[#1a1a1a]">
                            {item.isVeg ? (
                              <span className="mr-1 inline-flex h-3 w-3 items-center justify-center rounded-sm border border-[#1d9e75] align-middle">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#1d9e75]" />
                              </span>
                            ) : null}
                            <span className={item.isAvailable ? "" : "line-through"}>{item.name}</span>
                          </div>
                          {item.description ? (
                            <p className="mt-1 text-xs text-[#bbb]">{item.description}</p>
                          ) : null}
                        </div>
                        <div className="whitespace-nowrap text-sm font-medium text-[#0a0a0a]">
                          Rs.{item.price}
                          {item.isPopular ? (
                            <span className="ml-2 rounded bg-[#fff8e1] px-1.5 py-0.5 text-[10px] font-medium text-[#b8860b]">
                              Popular
                            </span>
                          ) : null}
                        </div>
                      </article>
                    ))}
                  </section>
                ))}
              </div>

              <footer className="border-t border-[#f0ede8] px-5 py-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-sm font-medium text-white"
                >
                  Order via WhatsApp
                </a>
                <p className="mt-2 text-center text-[10px] text-[#ddd]">Powered by Torq Orbit</p>
              </footer>
            </div>
          ) : (
            <div className="flex min-h-[640px] flex-col">
              <header className="bg-[#1a1a1a] px-5 pb-4 pt-6 text-white">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2d2d2d] text-xl">
                    {data.logoEmoji}
                  </div>
                  <div>
                    <h1 className="font-display text-lg">{data.name}</h1>
                    <p className="text-[11px] text-[#8f8f8f]">{data.tagline}</p>
                  </div>
                </div>
                <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  <span className="rounded-full border border-white bg-white px-3 py-1 text-xs text-[#0a0a0a]">
                    All
                  </span>
                  {data.categories.map((category) => (
                    <span
                      key={category.id}
                      className="whitespace-nowrap rounded-full border border-[#333] px-3 py-1 text-xs text-[#888]"
                    >
                      {category.name}
                    </span>
                  ))}
                </div>
              </header>

              <div className="flex-1 space-y-4 bg-[#fafaf8] px-5 py-4">
                {data.categories.map((category) => (
                  <section key={category.id}>
                    <h2 className="mb-2 text-[11px] font-medium uppercase tracking-[0.08em] text-[#bbb]">
                      {category.name}
                    </h2>
                    <div className="space-y-2">
                      {category.items.map((item: MenuItem) => (
                        <article
                          key={item.id}
                          className={`flex overflow-hidden rounded-xl border border-[#f0ede8] bg-white ${
                            item.isAvailable ? "" : "opacity-45"
                          }`}
                        >
                          <div className="flex h-[72px] w-[72px] items-center justify-center bg-[#f5f3f0] text-2xl">
                            {item.imageEmoji ?? "🍽️"}
                          </div>
                          <div className="flex flex-1 flex-col justify-between px-3 py-2">
                            <div className="flex items-start justify-between gap-2">
                              <h3 className="text-sm font-medium text-[#1a1a1a]">{item.name}</h3>
                              <span className="whitespace-nowrap text-sm font-medium text-[#0a0a0a]">
                                Rs.{item.price}
                              </span>
                            </div>
                            <p className="mt-1 text-[11px] text-[#bbb]">{item.description}</p>
                            <div className="mt-2 flex items-center justify-between">
                              {item.isVeg ? (
                                <span className="inline-flex h-3 w-3 items-center justify-center rounded-sm border border-[#1d9e75]">
                                  <span className="h-1.5 w-1.5 rounded-full bg-[#1d9e75]" />
                                </span>
                              ) : (
                                <span />
                              )}
                              {item.isAvailable ? (
                                <button className="flex h-6 w-6 items-center justify-center rounded-md bg-[#1a1a1a] text-base leading-none text-white">
                                  +
                                </button>
                              ) : (
                                <span className="text-[10px] font-medium text-[#e24b4a]">Sold out today</span>
                              )}
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              <footer className="border-t border-[#f0ede8] bg-white px-5 py-3">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl bg-[#1a1a1a] px-4 py-3"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#25D366] text-[11px] font-medium text-white">
                      {suggestedItemsCount}
                    </span>
                    <span className="text-xs text-white">
                      {suggestedItemsCount} items - Rs.{suggestedTotal}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-white">Order via WhatsApp</span>
                </a>
                <p className="mt-2 text-center text-[10px] text-[#ccc]">Powered by Torq Orbit</p>
              </footer>
            </div>
          )}
        </section>

        <div className="mx-auto mt-6 flex max-w-sm items-center justify-between text-xs text-[#8f8f86]">
          <span>@{data.instagramHandle}</span>
          <span>{data.menuUrl}</span>
          <span>{data.city}</span>
          </div>
      </div>
    </main>
  );
}
