import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TeamLineupShowcase } from "@/components/team-lineup-showcase";
import {
  clubSegments,
  getSegmentBySlug,
  getSegmentHref
} from "@/data/club-segments";

type SegmentPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return clubSegments
    .filter((segment) => segment.slug !== "home")
    .map((segment) => ({ slug: segment.slug }));
}

export async function generateMetadata({
  params
}: SegmentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const segment = getSegmentBySlug(slug);

  if (!segment) {
    return {};
  }

  return {
    title: `${segment.title} | 3D Fussball Website Idee`,
    description: segment.description
  };
}

export default async function SegmentPage({ params }: SegmentPageProps) {
  const { slug } = await params;
  const segment = getSegmentBySlug(slug);

  if (!segment || segment.slug === "home") {
    notFound();
  }

  return (
    <main className="pb-16">
      <header className="sticky top-0 z-40 border-b border-white/8 bg-black/20 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-white/55">Club Future</p>
            <p className="mt-1 font-heading text-lg uppercase text-white">
              3D Fussball Website Idee
            </p>
          </div>

          <nav className="hidden items-center gap-3 lg:flex">
            <Link
              href="/"
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/70 transition hover:border-white/25 hover:bg-white/5 hover:text-white"
            >
              Home
            </Link>
            {clubSegments
              .filter((item) => item.slug !== "home")
              .map((item) => (
                <Link
                  key={item.id}
                  href={getSegmentHref(item)}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    item.slug === segment.slug
                      ? "border-white/30 bg-white/10 text-white"
                      : "border-white/10 text-white/70 hover:border-white/25 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 pt-14 lg:px-10 lg:pt-18">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div>
            <p
              className="text-sm uppercase tracking-[0.34em]"
              style={{ color: segment.accent }}
            >
              {segment.kicker}
            </p>
            <h1 className="mt-5 font-heading text-5xl uppercase leading-[0.95] text-white sm:text-6xl">
              {segment.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/74 md:text-xl">
              {segment.detailLead}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-[#7cff67] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#04100d] transition hover:brightness-105"
              >
                Zur Startseite
              </Link>
              <Link
                href={getSegmentHref(segment)}
                className="inline-flex items-center justify-center rounded-full border border-white/12 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-white/25 hover:bg-white/5 hover:text-white"
              >
                {segment.cta}
              </Link>
            </div>
          </div>

          <div className="glass-panel section-ring rounded-[2rem] p-7 md:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-white/55">
              Rubrik Fokus
            </p>
            <div className="mt-6 grid gap-4">
              {segment.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-[1.25rem] border border-white/10 bg-black/15 p-4 text-sm leading-7 text-white/72"
                >
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-7xl px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {segment.detailSections.map((section) => (
            <article
              key={section.title}
              className="glass-panel section-ring rounded-[2rem] p-7 md:p-8"
            >
              <p
                className="text-xs uppercase tracking-[0.28em]"
                style={{ color: segment.accent }}
              >
                {segment.title}
              </p>
              <h2 className="mt-4 font-heading text-2xl uppercase text-white">
                {section.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-white/74">{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      {segment.slug === "mannschaft" ? <TeamLineupShowcase /> : null}

      <section className="mx-auto mt-14 max-w-7xl px-6 pb-12 lg:px-10">
        <div className="glass-panel section-ring rounded-[2rem] p-8 md:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-white/55">
                Weitere Bereiche
              </p>
              <h2 className="mt-4 font-heading text-3xl uppercase text-white md:text-4xl">
                Von hier aus in die naechste Rubrik springen
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/"
                className="rounded-full border border-white/12 px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-white/25 hover:bg-white/5 hover:text-white"
              >
                Home
              </Link>
              {clubSegments
                .filter((item) => item.slug !== "home" && item.slug !== segment.slug)
                .map((item) => (
                  <Link
                    key={item.id}
                    href={getSegmentHref(item)}
                    className="rounded-full border border-white/12 px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-white/25 hover:bg-white/5 hover:text-white"
                  >
                    {item.title}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
