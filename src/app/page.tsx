import { FootballExperience } from "@/components/football-experience";
import { clubSegments } from "@/data/club-segments";

const metrics = [
  { label: "Fuenfecke", value: "12" },
  { label: "Sechsecke", value: "20" },
  { label: "Ballstruktur", value: "32 Panels" },
  { label: "Stack", value: "Next.js / R3F" }
];

export default function HomePage() {
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
            {clubSegments.map((segment) => (
              <a
                key={segment.id}
                href={`#${segment.slug}`}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/70 transition hover:border-white/25 hover:bg-white/5 hover:text-white"
              >
                {segment.title}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 pt-12 lg:px-10 lg:pt-16">
        <div className="mx-auto max-w-5xl text-center">
          <div>
            <p className="text-sm uppercase tracking-[0.34em] text-[#7cff67]">
              Digitale Showpiece-Basis
            </p>
            <h1 className="mt-5 font-heading text-5xl uppercase leading-[0.95] text-white sm:text-6xl xl:text-7xl">
              Der Fussball steht als zentraler Mittelpunkt offen in der Mitte der Website
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/74 md:text-xl">
              Dieses Setup uebersetzt deine Konzeptdatei in ein reales Startprojekt: mit
              futuristischem Look, offenem Hero-Aufbau und einem Fussball, der jetzt aus
              echten Fuenfecken und Sechsecken aufgebaut wird statt nur wie eine Kugel zu
              wirken.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#erlebnis"
                className="inline-flex items-center justify-center rounded-full bg-[#7cff67] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#04100d] transition hover:brightness-105"
              >
                Erlebnis ansehen
              </a>
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center rounded-full border border-white/12 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-white/25 hover:bg-white/5 hover:text-white"
              >
                Kontaktbereich
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="glass-panel rounded-[1.5rem] px-5 py-6 text-center"
            >
              <p className="font-heading text-2xl uppercase text-white">{metric.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.28em] text-white/55">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-16">
        <FootballExperience />
      </div>

      <footer
        id="kontakt"
        className="mx-auto mt-8 max-w-7xl px-6 pb-12 lg:px-10"
      >
        <div className="glass-panel section-ring rounded-[2rem] p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-[#d9ff5b]">
                Abschluss und Kontakt
              </p>
              <h2 className="mt-4 font-heading text-3xl uppercase text-white md:text-4xl">
                Funktionale Inhalte bleiben Teil der Inszenierung
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/74 md:text-lg">
                Footer, Sponsorenzone und Kontakt sind bereits im visuellen System
                vorbereitet. Damit endet die Experience nicht abrupt, sondern fuehrt sauber in
                alle klassischen Vereinsinformationen ueber.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Klassisches Fallback-Menue fuer Accessibility",
                "Platz fuer Sponsoren, Social Links und Vereinsdaten",
                "Vorbereitet fuer Impressum, Datenschutz und Anfahrt",
                "Geeignet fuer spaetere Formular- oder CRM-Anbindung"
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.25rem] border border-white/10 bg-black/15 p-4 text-sm leading-7 text-white/72"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
