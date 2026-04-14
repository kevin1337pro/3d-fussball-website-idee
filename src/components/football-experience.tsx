"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { clubSegments, getSegmentHref } from "@/data/club-segments";
import { FootballScene } from "@/components/football-scene";

export function FootballExperience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  function handleSelectSegment(segmentIndex: number) {
    setActiveIndex(segmentIndex);

    const targetSegment = clubSegments[segmentIndex];
    router.push(getSegmentHref(targetSegment));
  }

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-segment-section]")
    );

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const nextVisibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((entryA, entryB) => entryB.intersectionRatio - entryA.intersectionRatio)[0];

        if (!nextVisibleSection) {
          return;
        }

        const nextTarget = nextVisibleSection.target;
        if (!(nextTarget instanceof HTMLElement)) {
          return;
        }

        const nextIndex = Number(nextTarget.dataset.segmentIndex);
        if (!Number.isNaN(nextIndex)) {
          setActiveIndex(nextIndex);
        }
      },
      {
        threshold: [0.25, 0.4, 0.55, 0.75],
        rootMargin: "-12% 0px -22% 0px"
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="erlebnis"
      className="mx-auto max-w-7xl px-6 pb-24 lg:px-10"
    >
      <div className="relative mb-16">
        <div className="mx-auto max-w-5xl rounded-[2.75rem] border border-white/8 bg-black/8 px-2 py-6 backdrop-blur-sm sm:px-6">
          <FootballScene
            activeIndex={activeIndex}
            onSelectSegment={handleSelectSegment}
            priorityView
          />
        </div>
        <div className="glass-panel mx-auto mt-4 max-w-2xl rounded-[1.5rem] p-6 text-center">
          <div className="flex items-center justify-between gap-4">
            <div className="w-full">
              <p className="text-xs uppercase tracking-[0.32em] text-white/55">
                Aktive Rubrik
              </p>
              <h3 className="mt-2 font-heading text-2xl uppercase text-white">
                {clubSegments[activeIndex]?.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/72">
                Der Ball bleibt der Mittelpunkt, ueberlagert den restlichen Content beim
                Scrollen aber nicht mehr. Die Panels darunter bleiben dadurch jederzeit
                sauber lesbar.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {clubSegments.map((segment, index) => {
          const isActive = index === activeIndex;

          return (
            <article
              key={segment.id}
              id={segment.slug}
              data-segment-section
              data-segment-index={index}
              className={`glass-panel section-ring relative overflow-hidden rounded-[2rem] p-7 transition duration-300 md:p-8 ${
                isActive
                  ? "scale-[1.01] border-white/20 shadow-[0_24px_90px_rgba(0,0,0,0.45)]"
                  : "border-white/8"
              }`}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-2xl">
                  <p
                    className="text-xs uppercase tracking-[0.28em]"
                    style={{ color: segment.accent }}
                  >
                    {segment.kicker}
                  </p>
                  <h3 className="mt-3 font-heading text-3xl uppercase leading-tight text-white md:text-4xl">
                    {segment.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-white/76 md:text-lg">
                    {segment.description}
                  </p>
                </div>

                <Link
                  href={getSegmentHref(segment)}
                  className="inline-flex shrink-0 items-center gap-3 rounded-full border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
                >
                  {segment.cta}
                  <span aria-hidden="true">{"->"}</span>
                </Link>
              </div>

              <div className="mt-8 grid gap-4">
                {segment.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-[1.25rem] border border-white/10 bg-black/15 p-4 text-sm leading-7 text-white/72"
                  >
                    {highlight}
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
