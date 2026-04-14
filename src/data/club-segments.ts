export type ClubSegment = {
  id: string;
  title: string;
  slug: string;
  kicker: string;
  description: string;
  cta: string;
  accent: string;
  targetRotation: [number, number, number];
  highlights: string[];
};

export const clubSegments: ClubSegment[] = [
  {
    id: "home",
    title: "Home",
    slug: "home",
    kicker: "Digitale Vereinsidentitaet",
    description:
      "Der Einstieg setzt den Verein als Erlebnis in Szene: ein schwebender Ball, starker Claim und eine klare Einladung, den Club nicht nur zu sehen, sondern zu erleben.",
    cta: "Vision entdecken",
    accent: "#7cff67",
    targetRotation: [0.18, -0.3, 0.08],
    highlights: [
      "Hero mit vollflaechiger Showpiece-Inszenierung",
      "Klare Markenbotschaft statt Standard-Vereinsstartseite",
      "Direkter Call-to-Action in den Erlebnisfluss"
    ]
  },
  {
    id: "team",
    title: "Mannschaft",
    slug: "mannschaft",
    kicker: "Stolz und Nahbarkeit",
    description:
      "Das Teamsegment bringt Spieler, Staff und Vereinsidentitaet zusammen. Hier soll der Nutzer sofort spueren, wer den Club auf dem Platz repraesentiert.",
    cta: "Zum Team",
    accent: "#57d4ff",
    targetRotation: [0.5, 0.65, -0.05],
    highlights: [
      "Spielerfotos oder Video-Loops im Panel",
      "Kader, Trainerteam und Formkurve als Deep Dive",
      "Emotionaler Auftritt statt trockener Auflistung"
    ]
  },
  {
    id: "schedule",
    title: "Spielplan",
    slug: "spielplan",
    kicker: "Naechster Fokuspunkt",
    description:
      "Der Spielplan zeigt nicht nur Termine, sondern erzeugt Spannung: naechstes Spiel, Gegner, Stadion und der direkte Weg zu allen Partien.",
    cta: "Alle Spiele ansehen",
    accent: "#f4d06f",
    targetRotation: [-0.15, 1.3, 0.12],
    highlights: [
      "Naechstes Match prominent im Overlay",
      "Klare Datums- und Spieltagsstruktur",
      "Spaeter einfach an API oder CMS koppelbar"
    ]
  },
  {
    id: "news",
    title: "News",
    slug: "news",
    kicker: "Aktuelle Geschichten",
    description:
      "News werden als dynamische Schlaglichter inszeniert. Der Ball fuehrt in aktuelle Vereinsmeldungen, waehrend das Panel Headlines und Teaser verdichtet.",
    cta: "Mehr News",
    accent: "#ff7a59",
    targetRotation: [0.26, 2.05, -0.12],
    highlights: [
      "Aktuellste Meldungen auf einen Blick",
      "Starke Visuals fuer Spielberichte und Vereinsnews",
      "Saubere Trennung zwischen Teaser und Archiv"
    ]
  },
  {
    id: "youth",
    title: "Jugend",
    slug: "jugend",
    kicker: "Werte und Zukunft",
    description:
      "Die Jugendrubrik transportiert Nachwuchsarbeit, Perspektive und Vereinswerte. Sie macht sichtbar, dass Zukunft im Club bewusst aufgebaut wird.",
    cta: "Jugendabteilung entdecken",
    accent: "#00c2a8",
    targetRotation: [-0.42, 2.82, 0.16],
    highlights: [
      "Nachwuchsarbeit als eigener Identitaetsbereich",
      "Platz fuer Werte, Teams und Entwicklungspfade",
      "Perfekt fuer Bilder, Trainingsszenen und Erfolgsgeschichten"
    ]
  },
  {
    id: "contact",
    title: "Kontakt",
    slug: "kontakt",
    kicker: "Klare Wege zum Verein",
    description:
      "Auch die Abschlusszone bleibt hochwertig. Kontakt, Anfahrt, Vereinsdaten und Partner-CTAs werden in dieselbe visuelle Sprache eingebunden.",
    cta: "Kontakt aufnehmen",
    accent: "#d9ff5b",
    targetRotation: [0.08, 3.55, -0.08],
    highlights: [
      "Kontakt, Impressum und Vereinsinfos integriert",
      "Sponsorenzugang und Partner-CTA vorbereitet",
      "Auch funktionale Inhalte bleiben markenstark"
    ]
  }
];

