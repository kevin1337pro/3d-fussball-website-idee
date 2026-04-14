import Link from "next/link";
import { FootballExperience } from "@/components/football-experience";
import { clubSegments, getSegmentHref } from "@/data/club-segments";

const metrics = [
  { label: "Fuenfecke", value: "12" },
  { label: "Sechsecke", value: "20" },
  { label: "Ballstruktur", value: "32 Panels" },
  { label: "Stack", value: "Next.js / R3F" }
];

const sellingModules = [
  {
    kicker: "Matchday Engine",
    title: "Naechstes Spiel, Live-Moment und Ticket-CTA auf einem Blick",
    body:
      "Der Verein bekommt nicht nur eine Startseite, sondern einen Spieltags-Einstieg mit Gegner, Uhrzeit, Stadion, Anfahrt und einer klaren Conversion-Richtung.",
    accent: "#57d4ff"
  },
  {
    kicker: "Sponsor Value",
    title: "Premium-Flaechen fuer Partner, die digital wirklich auffallen",
    body:
      "Statt eines statischen Sponsorengrabes lassen sich Partner als rotierende Premium-Slots, Matchday-Prasenter oder Jugend-Partner sichtbar und verkaufbar platzieren.",
    accent: "#f4d06f"
  },
  {
    kicker: "CMS Ready",
    title: "News, Kader und Spielplan spaeter vom Verein selbst pflegbar",
    body:
      "Die Experience bleibt visuell stark, kann aber technisch so vorbereitet werden, dass Redakteure Inhalte ohne Entwickler aendern koennen.",
    accent: "#7cff67"
  }
];

const salesStack = [
  "3D Hero als Blickfang fuer Erstkontakt und Sponsorenpitch",
  "Mannschaftsseite mit klickbaren Spielern und Spotlight-Profilen",
  "Spielplan, News und Jugend bereits als Produktmodule strukturiert",
  "Vorbereitung fuer CMS, CRM, Ticketing oder Sponsoren-Integration",
  "Branding leicht auf andere Vereine oder Akademien uebertragbar",
  "Ideal als Premium-Template fuer semiprofessionelle Clubs"
];

const commercialBlocks = [
  {
    title: "Warum das verkaufbar ist",
    items: [
      "Der Ball liefert die Wiedererkennung.",
      "Die Module darunter liefern echten Vereinsnutzen.",
      "Die Seite wirkt wie ein modernes Produkt statt wie eine Einzeldemo."
    ]
  },
  {
    title: "Womit Vereine Geld verdienen koennen",
    items: [
      "Sponsorenflaechen im Matchday-Umfeld.",
      "Mitgliedschafts- und Ticket-CTAs.",
      "Mehr Sichtbarkeit fuer Jugend, Partner und Events."
    ]
  },
  {
    title: "Was du spaeter anbieten kannst",
    items: [
      "CMS-Einbindung und Redaktionsworkflow.",
      "Spielerprofile mit echten Fotos und Statistiken.",
      "Mehrsprachigkeit, Shop oder Matchcenter als Upsell."
    ]
  }
];

const matchdayHighlights = [
  "Ticket-CTA direkt im Hero des Spieltags",
  "Stadion, Anfahrt und Kickoff auf einen Blick",
  "Sponsor des Spieltags prominent ueber dem Event"
];

const sponsorSlots = [
  {
    tier: "Main Match Partner",
    name: "Phoenix Baugruppe",
    placement: "Hero, Matchday Card und Ticketbereich",
    accent: "#f4d06f"
  },
  {
    tier: "Youth Development",
    name: "Volksbank Vest",
    placement: "Jugendseite, Recruiting und Vereinswerte",
    accent: "#57d4ff"
  },
  {
    tier: "Community Partner",
    name: "Autohaus Revier",
    placement: "News, Eventmodule und Kontaktzone",
    accent: "#7cff67"
  }
];

const sponsorBenefits = [
  "Premium-Slots statt statischer Logowand",
  "Digitale Praesenz im Matchday-Kontext",
  "Partner-Storytelling statt nur Platzhalterlogos",
  "Leicht als Verkaufsfolie fuer lokale Sponsoren nutzbar"
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
              <Link
                key={segment.id}
                href={getSegmentHref(segment)}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/70 transition hover:border-white/25 hover:bg-white/5 hover:text-white"
              >
                {segment.title}
              </Link>
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
              <Link
                href="#erlebnis"
                className="inline-flex items-center justify-center rounded-full bg-[#7cff67] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#04100d] transition hover:brightness-105"
              >
                Erlebnis ansehen
              </Link>
              <Link
                href="/kontakt/"
                className="inline-flex items-center justify-center rounded-full border border-white/12 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-white/25 hover:bg-white/5 hover:text-white"
              >
                Kontaktbereich
              </Link>
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

      <section className="mx-auto mt-6 max-w-7xl px-6 lg:px-10">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)]">
          <article className="glass-panel section-ring relative overflow-hidden rounded-[2.3rem] p-7 md:p-8">
            <div className="absolute right-[-3rem] top-[-2rem] h-40 w-40 rounded-full bg-[#57d4ff]/14 blur-3xl" />
            <div className="absolute left-[10%] top-[24%] h-24 w-24 rounded-full bg-[#7cff67]/12 blur-3xl" />
            <div className="grid gap-5 border-b border-white/8 pb-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.32em] text-[#57d4ff]">
                  Matchday Zone
                </p>
                <h2 className="mt-4 font-heading text-3xl uppercase text-white md:text-4xl">
                  Ein echter Spieltags-Hub statt nur einer Terminliste
                </h2>
              </div>

              <p className="max-w-xl text-sm leading-7 text-white/70 lg:justify-self-end">
                So wird sofort sichtbar, wie die Website Fans fuehrt, Tickets pusht und
                gleichzeitig Sponsorensichtbarkeit im emotionalsten Bereich des Vereins
                verkauft.
              </p>
            </div>

            <div className="mt-7 grid gap-5 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
              <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(135deg,rgba(87,212,255,0.12),rgba(8,25,21,0.6),rgba(0,0,0,0.18))] p-6">
                <div className="inline-flex max-w-full rounded-full border border-[#f4d06f]/30 bg-[#f4d06f]/12 px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-[#f7dfa3]">
                  Presented by Phoenix Baugruppe
                </div>
                <p className="mt-5 text-[10px] uppercase tracking-[0.3em] text-white/52">
                  NAECHSTES SPIEL
                </p>
                <h3 className="mt-4 font-heading text-4xl uppercase leading-none text-white md:text-5xl">
                  SV Zweckel
                </h3>
                <div className="mt-3 flex items-center gap-3 text-sm uppercase tracking-[0.26em] text-white/48">
                  <span>vs.</span>
                  <span className="text-white/76">RW Bismarck</span>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    {
                      label: "Kickoff",
                      value: "Samstag",
                      detail: "15:30"
                    },
                    {
                      label: "Ort",
                      value: "Loemuehlenweg",
                      detail: "Heimstadion"
                    },
                    {
                      label: "Status",
                      value: "Heimspiel",
                      detail: "Spieltag 21",
                      span: "sm:col-span-2"
                    }
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`rounded-[1.15rem] border border-white/10 bg-black/18 px-4 py-4 ${
                        item.span ?? ""
                      }`}
                    >
                      <p className="text-[10px] uppercase tracking-[0.28em] text-white/42">
                        {item.label}
                      </p>
                      <p className="mt-2 min-w-0 break-words font-heading text-base uppercase leading-tight text-white md:text-lg">
                        {item.value}
                      </p>
                      <p className="mt-1 min-w-0 break-words text-[11px] uppercase leading-5 tracking-[0.18em] text-white/46">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/spielplan/"
                    className="inline-flex items-center justify-center rounded-full bg-[#7cff67] px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#04100d] transition hover:brightness-105"
                  >
                    Matchday ansehen
                  </Link>
                  <Link
                    href="/kontakt/"
                    className="inline-flex items-center justify-center rounded-full border border-white/12 px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-white/25 hover:bg-white/6 hover:text-white"
                  >
                    Ticket CTA
                  </Link>
                </div>
              </div>

              <div className="grid gap-3">
                {matchdayHighlights.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-[1.25rem] border border-white/10 bg-black/18 p-4"
                  >
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/42">
                      Matchday Vorteil {index + 1}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/74">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="glass-panel section-ring relative overflow-hidden rounded-[2.3rem] p-7 md:p-8">
            <div className="absolute left-[-2rem] top-[10%] h-36 w-36 rounded-full bg-[#f4d06f]/12 blur-3xl" />
            <div className="flex flex-col gap-4 border-b border-white/8 pb-5">
              <p className="text-xs uppercase tracking-[0.32em] text-[#f4d06f]">
                Sponsor / Partnerbereich
              </p>
              <h2 className="font-heading text-3xl uppercase text-white md:text-4xl">
                Partnerflaechen, die sich wirklich verkaufen lassen
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-white/70">
                Statt Logos nur irgendwo unten abzulegen, bekommen Partner klare Formate,
                echte Sichtbarkeit und eine nachvollziehbare digitale Gegenleistung.
              </p>
            </div>

            <div className="mt-6 grid gap-3">
              {sponsorSlots.map((slot) => (
                <div
                  key={slot.tier}
                  className="rounded-[1.3rem] border border-white/10 bg-black/18 p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p
                        className="text-[10px] uppercase tracking-[0.3em]"
                        style={{ color: slot.accent }}
                      >
                        {slot.tier}
                      </p>
                      <h3 className="mt-3 font-heading text-2xl uppercase text-white">
                        {slot.name}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-white/72">
                        {slot.placement}
                      </p>
                    </div>

                    <div
                      className="mt-1 h-3 w-3 shrink-0 rounded-full shadow-[0_0_16px_currentColor]"
                      style={{ color: slot.accent, backgroundColor: slot.accent }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.45rem] border border-white/10 bg-[linear-gradient(135deg,rgba(244,208,111,0.08),rgba(255,255,255,0.03),rgba(0,0,0,0.14))] p-5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/46">
                Warum dieser Bereich wertvoll ist
              </p>
              <div className="mt-4 grid gap-3">
                {sponsorBenefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="rounded-[1rem] border border-white/10 bg-white/5 px-4 py-3 text-sm leading-7 text-white/74"
                  >
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto mt-4 max-w-7xl px-6 lg:px-10">
        <div className="glass-panel section-ring rounded-[2.4rem] p-8 md:p-10">
          <div className="flex flex-col gap-5 border-b border-white/8 pb-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.34em] text-[#d9ff5b]">
                Verkaufsargumente
              </p>
              <h2 className="mt-4 font-heading text-3xl uppercase text-white md:text-4xl">
                Aus Showpiece wird ein Produkt fuer Vereine, Partner und Betreiber
              </h2>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-white/70 md:text-base">
              Damit du die Website verkaufen kannst, braucht sie nicht nur Stil, sondern
              eine klare Wertlogik: Matchday-Relevanz, Sponsorensichtbarkeit und eine
              technische Basis fuer spaetere Pflege durch den Verein.
            </p>
          </div>

          <div className="mt-8 grid gap-5 xl:grid-cols-3">
            {sellingModules.map((module) => (
              <article
                key={module.title}
                className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-black/18 p-6"
              >
                <div
                  className="absolute right-0 top-0 h-28 w-28 rounded-full blur-3xl"
                  style={{ backgroundColor: `${module.accent}25` }}
                />
                <p
                  className="relative text-[10px] uppercase tracking-[0.3em]"
                  style={{ color: module.accent }}
                >
                  {module.kicker}
                </p>
                <h3 className="relative mt-4 font-heading text-2xl uppercase text-white">
                  {module.title}
                </h3>
                <p className="relative mt-4 text-sm leading-7 text-white/72">
                  {module.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
            <div className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(135deg,rgba(87,212,255,0.08),rgba(124,255,103,0.04),rgba(0,0,0,0.18))] p-6 md:p-7">
              <p className="text-xs uppercase tracking-[0.3em] text-white/56">
                Premium Vereinsstack
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {salesStack.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.15rem] border border-white/10 bg-white/6 px-4 py-4 text-sm leading-7 text-white/74"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-black/18 p-6 md:p-7">
              <p className="text-xs uppercase tracking-[0.3em] text-[#57d4ff]">
                Packaging Idee
              </p>
              <h3 className="mt-4 font-heading text-3xl uppercase text-white">
                Nicht nur Website. Ein Premium-Club-Template.
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/72 md:text-base">
                Je klarer das als wiederverwendbares System erscheint, desto einfacher wird
                der Verkauf. Vereine kaufen eher ein digitales Vereinsprodukt als eine
                einmalige Kunstseite.
              </p>

              <div className="mt-6 grid gap-4">
                {commercialBlocks.map((block) => (
                  <div
                    key={block.title}
                    className="rounded-[1.2rem] border border-white/10 bg-white/5 p-4"
                  >
                    <p className="text-[10px] uppercase tracking-[0.28em] text-white/50">
                      {block.title}
                    </p>
                    <div className="mt-3 space-y-2">
                      {block.items.map((item) => (
                        <p key={item} className="text-sm leading-7 text-white/74">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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
