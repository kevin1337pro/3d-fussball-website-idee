# 3D Fussball Website Idee

MVP-Initialisierung fuer eine futuristische Vereinswebsite mit `Next.js`, `TypeScript`, `Tailwind CSS` und `React Three Fiber`.

## Start

```bash
npm install
npm run dev
```

Danach laeuft die App lokal unter `http://localhost:3000`.

## Enthalten

- immersive Startseite mit Hero, KPI-Leiste und klassischer Navigation
- scrollgekoppelte Segment-Story fuer `Home`, `Team`, `Spielplan`, `News`, `Jugend` und `Kontakt`
- interaktive 3D-Szene als Einstieg in die eigentliche Ball-Navigation
- datengetriebene Segmentdefinition in `src/data/club-segments.ts`
- responsive Layout mit reduziertem Mobile-Fallback

## Wichtige Dateien

- `3D Fussball Website Idee.md`: urspruengliche Konzept- und Umsetzungsbeschreibung
- `src/app/page.tsx`: Startseite
- `src/components/football-experience.tsx`: Sticky-Layout und Scroll-Synchronisierung
- `src/components/football-scene.tsx`: 3D-Showcase
- `src/data/club-segments.ts`: Inhalte und Rotationsziele

## Naechste sinnvolle Schritte

1. echtes GLB-Fussballmodell oder prozedurale Ballsegmente integrieren
2. Unterseiten fuer jede Rubrik anlegen
3. CMS oder JSON-Feeds fuer News, Team und Spielplan anbinden
4. ScrollTrigger oder Framer Motion fuer komplexere Choreografie ergaenzen
