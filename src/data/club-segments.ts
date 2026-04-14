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
  detailLead: string;
  detailSections: {
    title: string;
    body: string;
  }[];
};

export function getSegmentHref(segment: Pick<ClubSegment, "slug">) {
  return segment.slug === "home" ? "/" : `/${segment.slug}/`;
}

export function getSegmentBySlug(slug: string) {
  return clubSegments.find((segment) => segment.slug === slug);
}

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
    ],
    detailLead:
      "Die Home-Seite ist die digitale Hauptbuehne des Vereins. Hier verdichten sich Markenbild, Spielstil und Einstieg in alle wichtigen Bereiche.",
    detailSections: [
      {
        title: "Hero und Haltung",
        body:
          "Der Einstieg setzt nicht auf klassische Vereinswebsite-Optik, sondern auf ein starkes Erlebnisbild mit zentralem Ball, praeziser Typografie und klarer Fuhrung."
      },
      {
        title: "Navigation und Story",
        body:
          "Von hier aus fuehrt die Startseite in Team, Spielplan, News, Jugend und Kontakt. Der Ball bleibt dabei nicht Deko, sondern das eigentliche Interface."
      },
      {
        title: "Markenwirkung",
        body:
          "Ziel der Home-Rubrik ist Wiedererkennung: ein moderner, mutiger Vereinsauftritt, der digital nicht austauschbar wirkt."
      }
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
    ],
    detailLead:
      "Die Mannschaftsseite ist der emotionale Kern des Vereinsauftritts. Hier stehen Spieler, Trainerteam und sportliche Identitaet im Mittelpunkt.",
    detailSections: [
      {
        title: "Kader und Rollen",
        body:
          "Spieler koennen mit Portrait, Position, Rueckennummer und Kurzprofil dargestellt werden. Das schafft Naehe und macht den Kader schnell erfassbar."
      },
      {
        title: "Trainerteam",
        body:
          "Neben dem Kader sollte auch das Trainer- und Betreuerteam sichtbar praesentiert werden, damit der Bereich nicht nur aus Spielerprofilen besteht."
      },
      {
        title: "Performance und Form",
        body:
          "Formkurven, letzte Ergebnisse oder eine kurze Saison-Story koennen die Mannschaftsseite von einer statischen Teamliste zu einer echten Sportseite machen."
      }
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
    ],
    detailLead:
      "Der Spielplan verbindet Information und Spannung. Er soll nicht nur Termine anzeigen, sondern den naechsten Fokuspunkt fuer Fans und Mitglieder markieren.",
    detailSections: [
      {
        title: "Naechstes Spiel",
        body:
          "Das kommende Match steht immer oben: Gegner, Datum, Uhrzeit, Stadion und ein klares Signal, worauf die Aufmerksamkeit als Naechstes gehen soll."
      },
      {
        title: "Gesamter Spielkalender",
        body:
          "Darunter folgt eine sauber strukturierte Liste aller Partien, die spaeter direkt aus einem Verbandssystem oder CMS gespeist werden kann."
      },
      {
        title: "Matchday-Erlebnis",
        body:
          "Mit Ticket-Links, Anfahrt oder Spieltagsgrafik wird aus dem Spielplan ein echter Matchday-Hub statt einer blossen Terminliste."
      }
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
    ],
    detailLead:
      "Die News-Seite macht Vereinskommunikation lebendig. Sie soll aktuelle Meldungen, Spielberichte und Geschichten sichtbar und gut konsumierbar machen.",
    detailSections: [
      {
        title: "Top-Meldungen",
        body:
          "Die wichtigsten News stehen prominent oben und koennen mit starkem Bild, kurzer Headline und klarer Kategorisierung ausgespielt werden."
      },
      {
        title: "Archiv und Struktur",
        body:
          "Weitere Meldungen folgen in einem flexiblen Raster oder Feed, damit sich die Seite auch bei wachsendem Content nicht unruhig anfuehlt."
      },
      {
        title: "Storytelling",
        body:
          "Spielberichte, Vereinsnews und Hintergrundgeschichten sollten visuell unterschiedlich gewichtet werden, damit nicht jede Meldung gleich aussieht."
      }
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
    ],
    detailLead:
      "Die Jugendseite zeigt, dass Zukunft im Verein aktiv aufgebaut wird. Sie verbindet Werte, Nachwuchsarbeit und Perspektive in einer eigenen starken Rubrik.",
    detailSections: [
      {
        title: "Teams und Altersklassen",
        body:
          "Von den juengsten Teams bis zur leistungsorientierten Jugendstruktur sollte die Seite klar zeigen, wie der Nachwuchs im Verein organisiert ist."
      },
      {
        title: "Werte und Ausbildung",
        body:
          "Neben Ergebnissen sind Trainingsphilosophie, Entwicklung und Vereinswerte entscheidend, damit die Jugendseite glaubwuerdig und hochwertig wirkt."
      },
      {
        title: "Perspektive",
        body:
          "Die Jugendrubrik sollte sichtbar machen, wie der Weg in hoehere Mannschaften aussieht und welche Rolle der Nachwuchs fuer den gesamten Verein spielt."
      }
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
    ],
    detailLead:
      "Die Kontaktseite ist der funktionale Abschluss der Experience. Sie buendelt Ansprechpartner, Vereinsdaten, Anfahrt und Partnerkontakt in derselben visuellen Sprache.",
    detailSections: [
      {
        title: "Direkter Kontakt",
        body:
          "Ansprechpartner, Mailadressen, Telefonnummern und Kontaktformular koennen hier klar strukturiert und ohne Reibung erreichbar gemacht werden."
      },
      {
        title: "Vereinsdaten",
        body:
          "Adresse, Stadioninformationen, Anfahrt und organisatorische Basisdaten gehoeren auf diese Seite, ohne wie ein trockener Pflichtblock zu wirken."
      },
      {
        title: "Partner und Sponsoren",
        body:
          "Auch Sponsorenzugang oder Partneranfragen lassen sich hier elegant integrieren, damit Kontakt nicht nur funktional, sondern auch strategisch nutzbar wird."
      }
    ]
  }
];
