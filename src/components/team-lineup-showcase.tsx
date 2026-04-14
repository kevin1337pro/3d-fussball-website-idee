"use client";

import type { CSSProperties } from "react";
import { useState } from "react";

type LineupPlayer = {
  id: string;
  name: string;
  number: number;
  role: string;
  note: string;
  age: number;
  height: string;
  foot: string;
  nation: string;
  form: string;
  strengths: string[];
  top: string;
  left: string;
};

const homePlayers: LineupPlayer[] = [
  { id: "h1", name: "Horn", number: 1, role: "Torwart", note: "Sichert den Strafraum und eröffnet flach von hinten.", age: 31, height: "1.92 m", foot: "Rechts", nation: "Deutschland", form: "8.1", strengths: ["Reflexe", "Aufbau", "Kommandos"], top: "53%", left: "3.5%" },
  { id: "h2", name: "Wittek", number: 32, role: "Linke Schiene", note: "Breite auf links und frühe Hereingaben in die letzte Linie.", age: 24, height: "1.79 m", foot: "Links", nation: "Deutschland", form: "7.8", strengths: ["Flanken", "Tiefe", "Antritt"], top: "16%", left: "12%" },
  { id: "h3", name: "Strompf", number: 3, role: "Innenverteidigung", note: "Aggressives Herausschieben im linken Halbraum.", age: 27, height: "1.86 m", foot: "Rechts", nation: "Deutschland", form: "7.5", strengths: ["Timing", "Zweikaempfe", "Mut"], top: "37%", left: "12%" },
  { id: "h4", name: "Bero", number: 19, role: "Innenverteidigung", note: "Schiebt ins Mittelfeld nach, wenn der Aufbau kippt.", age: 26, height: "1.84 m", foot: "Rechts", nation: "Slowakei", form: "7.4", strengths: ["Vorwaertsdruck", "Passspiel", "Antizipation"], top: "37%", left: "21%" },
  { id: "h5", name: "Loosli", number: 20, role: "Innenverteidigung", note: "Haelt die letzte Linie kompakt und schuetzt den Raum hinter der Kette.", age: 28, height: "1.88 m", foot: "Rechts", nation: "Schweiz", form: "7.6", strengths: ["Kopfball", "Absicherung", "Duelle"], top: "63%", left: "12%" },
  { id: "h6", name: "Pannewig", number: 24, role: "Rechte Schiene", note: "Sorgt für Tiefe und Dynamik entlang der rechten Aussenbahn.", age: 22, height: "1.77 m", foot: "Rechts", nation: "Deutschland", form: "7.9", strengths: ["Tempo", "Laeufe", "Pressing"], top: "64%", left: "21%" },
  { id: "h7", name: "Barba Holtmann", number: 17, role: "Achter", note: "Verbindet erste und zweite Linie mit Laufstärke.", age: 25, height: "1.82 m", foot: "Rechts", nation: "Deutschland", form: "7.7", strengths: ["Raumgewinn", "Dynamik", "Verbindungen"], top: "23%", left: "33%" },
  { id: "h8", name: "Onyeka", number: 21, role: "Achter", note: "Sammelt zweite Baelle und sichert gegen Konter ab.", age: 24, height: "1.81 m", foot: "Rechts", nation: "Nigeria", form: "8.0", strengths: ["Balleroberung", "Intensitaet", "Gegenpressing"], top: "52%", left: "33%" },
  { id: "h9", name: "Miyoshi", number: 23, role: "Achter", note: "Rückt zwischen den Linien ein und gibt dem Angriff Rhythmus.", age: 27, height: "1.73 m", foot: "Links", nation: "Japan", form: "7.8", strengths: ["Enge Raume", "Kreativitaet", "Tempowechsel"], top: "75%", left: "33%" },
  { id: "h10", name: "Hofmann", number: 33, role: "Sechser", note: "Taktgeber im Zentrum und Balancegeber gegen den Ball.", age: 29, height: "1.83 m", foot: "Rechts", nation: "Deutschland", form: "8.4", strengths: ["Rhythmus", "Passwinkel", "Ordnung"], top: "52%", left: "47%" },
  { id: "h11", name: "Olsen", number: 13, role: "Tiefe Option", note: "Kann aus tiefer Position Tempo und Vertikalität geben.", age: 23, height: "1.78 m", foot: "Links", nation: "Schweden", form: "7.2", strengths: ["Tiefe", "Mut", "Zuege"], top: "87%", left: "12%" }
];

const awayPlayers: LineupPlayer[] = [
  { id: "a1", name: "Aydin", number: 8, role: "Fluegel", note: "Breit auf der letzten Linie für direkte Verlagerungen.", age: 25, height: "1.76 m", foot: "Rechts", nation: "Deutschland", form: "7.4", strengths: ["Breite", "Tempo", "Tiefe"], top: "16%", left: "85.5%" },
  { id: "a2", name: "HeuBer", number: 30, role: "Halbraum", note: "Besetzt Zwischenlinienräume und startet Tiefenläufe.", age: 23, height: "1.80 m", foot: "Links", nation: "Deutschland", form: "7.3", strengths: ["Halbraum", "Laufwege", "Finesse"], top: "28%", left: "66%" },
  { id: "a3", name: "Flick", number: 6, role: "Mittelfeld", note: "Verteilt das Spieltempo und schützt das Zentrum.", age: 28, height: "1.84 m", foot: "Rechts", nation: "Deutschland", form: "7.6", strengths: ["Ordnung", "Uebersicht", "Zentrum"], top: "43%", left: "75.5%" },
  { id: "a4", name: "Ehlers", number: 21, role: "Aussenbahn", note: "Schiebt hoch und sorgt für Breite im letzten Drittel.", age: 24, height: "1.79 m", foot: "Rechts", nation: "Daenemark", form: "7.5", strengths: ["Vorstosse", "Breite", "Wiederholungen"], top: "37%", left: "85%" },
  { id: "a5", name: "Mijatovic", number: 11, role: "Zehner", note: "Positioniert sich zwischen den Linien als kreative Schaltstelle.", age: 26, height: "1.81 m", foot: "Links", nation: "Serbien", form: "8.2", strengths: ["Kreativitaet", "Drehung", "letzter Pass"], top: "52%", left: "56%" },
  { id: "a6", name: "Yardimci", number: 9, role: "Mittelstuermer", note: "Bindet Innenverteidiger und bietet Tiefe im Zentrum.", age: 27, height: "1.88 m", foot: "Rechts", nation: "Turkei", form: "8.0", strengths: ["Abschluesse", "Ablagen", "Boxpraesenz"], top: "52%", left: "66%" },
  { id: "a7", name: "Marie", number: 15, role: "Achter", note: "Rückt aus dem Halbraum in den Strafraum nach.", age: 22, height: "1.82 m", foot: "Rechts", nation: "Frankreich", form: "7.7", strengths: ["Dynamik", "Nachstossen", "Boxbewegung"], top: "63%", left: "75.5%" },
  { id: "a8", name: "Gomez Mendoza", number: 44, role: "Achter", note: "Verlagert das Spiel und sichert zweite Baelle.", age: 24, height: "1.83 m", foot: "Rechts", nation: "Spanien", form: "7.8", strengths: ["Verlagerung", "Kontrolle", "Abstaende"], top: "75%", left: "66%" },
  { id: "a9", name: "Hoti", number: 4, role: "Verteidigung", note: "Stabilisiert die rechte Seite gegen Umschaltmomente.", age: 29, height: "1.86 m", foot: "Rechts", nation: "Kosovo", form: "7.4", strengths: ["Stabilitaet", "Timing", "Absicherung"], top: "65%", left: "85%" },
  { id: "a10", name: "Di Michele Sanchez", number: 22, role: "Aussenverteidiger", note: "Startet aus tiefer Position in die Breite.", age: 23, height: "1.77 m", foot: "Links", nation: "Italien", form: "7.1", strengths: ["Tiefe", "Flanken", "Motor"], top: "87%", left: "85%" },
  { id: "a11", name: "Hoffmann", number: 1, role: "Torwart", note: "Sichert die letzte Linie und organisiert den Aufbau.", age: 30, height: "1.91 m", foot: "Rechts", nation: "Deutschland", form: "7.9", strengths: ["Reflexe", "Linie", "Organisation"], top: "53%", left: "96%" }
];

function ShirtIcon({
  number,
  large = false,
  tone
}: {
  number: number;
  large?: boolean;
  tone: "home" | "away";
}) {
  const fill = tone === "home" ? "#143f67" : "#fff112";
  const stroke = tone === "home" ? "#f3f7f4" : "#1a1806";
  const text = tone === "home" ? "#f8fbff" : "#141414";

  return (
    <svg
      viewBox="0 0 84 76"
      className={large ? "h-20 w-20 md:h-[5.5rem] md:w-[5.5rem]" : "h-11 w-11 drop-shadow-[0_6px_16px_rgba(0,0,0,0.28)] md:h-12 md:w-12"}
    >
      <path
        d="M24 8 33 14h18l9-6 12 10-7 11v38H19V29l-7-11 12-10Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M30 14c1 6 5 10 12 10s11-4 12-10"
        fill="none"
        stroke={stroke}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <text
        x="42"
        y="48"
        textAnchor="middle"
        fontSize="24"
        fontWeight="800"
        fill={text}
        fontFamily="var(--font-heading)"
      >
        {number}
      </text>
    </svg>
  );
}

function LineupMarker({
  player,
  isSelected,
  onSelect,
  side,
  delay
}: {
  player: LineupPlayer;
  isSelected: boolean;
  onSelect: (player: LineupPlayer) => void;
  side: "home" | "away";
  delay: number;
}) {
  return (
    <button
      type="button"
      aria-pressed={isSelected}
      className={`lineup-player absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer text-center transition duration-300 ${
        isSelected ? "z-20 scale-[1.08]" : "z-10 hover:scale-[1.05]"
      }`}
      onClick={() => onSelect(player)}
      style={
        {
          top: player.top,
          left: player.left,
          ["--lineup-delay" as string]: `${delay}ms`
        } as CSSProperties
      }
    >
      <div
        className={`flex justify-center transition duration-300 ${
          isSelected
            ? "drop-shadow-[0_0_24px_rgba(255,255,255,0.2)]"
            : "drop-shadow-[0_6px_16px_rgba(0,0,0,0.28)]"
        }`}
      >
        <ShirtIcon number={player.number} tone={side} />
      </div>
      <p className="mt-1 text-xs font-semibold text-white/92 md:text-[0.82rem]">{player.name}</p>
    </button>
  );
}

export function TeamLineupShowcase() {
  const [selectedPlayer, setSelectedPlayer] = useState<LineupPlayer>(homePlayers[9]);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const selectedTone = selectedPlayer.id.startsWith("h") ? "home" : "away";
  const accent = selectedTone === "home" ? "#57d4ff" : "#fff112";

  function handleSelectPlayer(player: LineupPlayer) {
    setSelectedPlayer(player);
    setIsCardOpen(true);
  }

  return (
    <section className="mx-auto mt-12 max-w-7xl px-6 lg:px-10">
      <div className="glass-panel section-ring overflow-hidden rounded-[2rem] p-4 md:p-5">
        <div className="flex flex-col gap-3 border-b border-white/8 pb-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#57d4ff]">
              Matchboard Animation
            </p>
            <h2 className="mt-3 font-heading text-2xl uppercase text-white md:text-[2rem]">
              Formationen als lebendige Taktikansicht
            </h2>
          </div>
          <p className="max-w-xl text-xs leading-6 text-white/66 md:text-sm md:leading-7">
            Eine animierte Aufstellung wie im Referenzbild: zwei Teams, klare Positionslogik
            und ein Spielfeld, das die Mannschaftsseite sofort sportlicher wirken laesst.
          </p>
        </div>

        <div className="lineup-pitch relative mt-5 h-[32rem] overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#17364b] md:h-[35rem]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.04),transparent_48%)]" />
          <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/18" />
          <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15" />
          <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/15" />

          <div className="absolute left-0 top-1/2 h-32 w-[14%] -translate-y-1/2 border border-l-0 border-white/16" />
          <div className="absolute left-0 top-1/2 h-56 w-[20%] -translate-y-1/2 border border-l-0 border-white/16" />
          <div className="absolute right-0 top-1/2 h-32 w-[14%] -translate-y-1/2 border border-r-0 border-white/16" />
          <div className="absolute right-0 top-1/2 h-56 w-[20%] -translate-y-1/2 border border-r-0 border-white/16" />

          <div className="absolute left-0 top-0 h-5 w-5 rounded-br-[1.2rem] border-b border-r border-white/16" />
          <div className="absolute right-0 top-0 h-5 w-5 rounded-bl-[1.2rem] border-b border-l border-white/16" />
          <div className="absolute bottom-0 left-0 h-5 w-5 rounded-tr-[1.2rem] border-r border-t border-white/16" />
          <div className="absolute bottom-0 right-0 h-5 w-5 rounded-tl-[1.2rem] border-l border-t border-white/16" />

          {homePlayers.map((player, index) => (
            <LineupMarker
              key={player.id}
              isSelected={selectedPlayer.id === player.id}
              onSelect={handleSelectPlayer}
              player={player}
              side="home"
              delay={index * 70}
            />
          ))}

          {awayPlayers.map((player, index) => (
            <LineupMarker
              key={player.id}
              isSelected={selectedPlayer.id === player.id}
              onSelect={handleSelectPlayer}
              player={player}
              side="away"
              delay={120 + index * 70}
            />
          ))}

          <div
            className={`absolute inset-0 z-30 transition duration-300 ${
              isCardOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <div
              className="lineup-backdrop absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08),rgba(0,0,0,0.55))] backdrop-blur-[2px]"
              onClick={() => setIsCardOpen(false)}
            />

            <div className="absolute right-4 top-4 w-[min(21.5rem,calc(100%-2rem))] md:right-5 md:top-5">
              <div className="lineup-card section-ring relative max-h-[calc(100vh-13rem)] overflow-y-auto overflow-x-hidden rounded-[1.45rem] border border-white/14 bg-[linear-gradient(160deg,rgba(8,24,29,0.98),rgba(18,52,64,0.94)_48%,rgba(7,20,24,0.98))] p-3.5 text-left shadow-[0_24px_120px_rgba(0,0,0,0.45)] md:max-h-[calc(100%-0.5rem)] md:p-4">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <div className="absolute -right-10 top-6 h-28 w-28 rounded-full bg-[#57d4ff]/20 blur-3xl" />
                <div className="absolute left-6 top-24 h-20 w-20 rounded-full bg-[#fff112]/12 blur-3xl" />
                <div
                  className="absolute -right-3 top-6 font-heading text-[5.7rem] leading-none text-white/6 md:text-[6.8rem]"
                  aria-hidden="true"
                >
                  {selectedPlayer.number}
                </div>
                <div
                  className="absolute inset-x-10 top-16 h-20 rounded-full blur-3xl"
                  style={{
                    background: `radial-gradient(circle, ${accent}33 0%, transparent 72%)`
                  }}
                />

                <div className="relative flex items-start justify-between gap-3">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-3 py-2 text-[10px] uppercase tracking-[0.28em] text-white/70">
                      <span
                        className="h-2 w-2 rounded-full shadow-[0_0_12px_currentColor]"
                        style={{ backgroundColor: accent, color: accent }}
                      />
                      Live Focus
                    </div>
                    <h3 className="mt-2.5 font-heading text-[1.55rem] uppercase leading-none text-white md:text-[1.9rem]">
                      {selectedPlayer.name}
                    </h3>
                    <p className="mt-1.5 text-[11px] uppercase tracking-[0.22em] text-white/56 md:text-xs">
                      {selectedPlayer.role}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsCardOpen(false)}
                    className="rounded-full border border-white/12 bg-white/6 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/70 transition hover:border-white/24 hover:bg-white/10 hover:text-white"
                  >
                    Schliessen
                  </button>
                </div>

                <div className="relative mt-4 grid gap-3 md:grid-cols-[auto_minmax(0,1fr)] md:items-center">
                  <div
                    className="flex h-20 w-20 items-center justify-center rounded-[1.15rem] border border-white/12 bg-black/18 md:h-[5.4rem] md:w-[5.4rem]"
                    style={{
                      boxShadow: `0 0 0 1px ${accent}22, 0 18px 40px rgba(0, 0, 0, 0.28)`
                    }}
                  >
                    <ShirtIcon
                      number={selectedPlayer.number}
                      large
                      tone={selectedTone}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      ["Alter", `${selectedPlayer.age}`],
                      ["Groesse", selectedPlayer.height],
                      ["Starker Fuss", selectedPlayer.foot],
                      ["Nation", selectedPlayer.nation]
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-[0.9rem] border border-white/10 bg-white/6 px-3 py-2"
                      >
                        <p className="text-[10px] uppercase tracking-[0.28em] text-white/45">
                          {label}
                        </p>
                        <p className="mt-1 font-heading text-sm uppercase text-white md:text-base">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative mt-4">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-white/45">
                      Match Form
                    </p>
                    <p className="font-heading text-base uppercase text-white md:text-lg">
                      {selectedPlayer.form}
                    </p>
                  </div>
                  <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-white/8">
                    <div
                      className="h-full rounded-full bg-[linear-gradient(90deg,#57d4ff,#7cff67)]"
                      style={{ width: `${Number(selectedPlayer.form) * 10}%` }}
                    />
                  </div>
                </div>

                <div className="relative mt-4 rounded-[1rem] border border-white/10 bg-black/18 p-3 md:p-3.5">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-white/45">
                    Coach Note
                  </p>
                  <p className="mt-2 text-xs leading-6 text-white/76 md:text-sm md:leading-7">
                    {selectedPlayer.note}
                  </p>
                </div>

                <div className="relative mt-4">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-white/45">
                    Core Strengths
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {selectedPlayer.strengths.map((strength) => (
                      <span
                        key={strength}
                        className="rounded-full border border-white/10 bg-white/7 px-2.5 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white/74"
                      >
                        {strength}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative mt-4 flex items-center justify-between rounded-[1rem] border border-white/10 bg-white/5 px-3 py-2.5">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.26em] text-white/42">
                      Matchday Pulse
                    </p>
                    <p className="mt-1 text-[11px] text-white/72 md:text-xs">
                      Klick ausserhalb der Card, um zur Taktikansicht zurueckzugehen.
                    </p>
                  </div>
                  <div
                    className="rounded-full px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.24em] text-[#04100d]"
                    style={{ backgroundColor: accent }}
                  >
                    {selectedPlayer.form}/10
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
          <div className="rounded-[1.25rem] border border-white/10 bg-black/18 p-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/50">
              Ausgewaehlter Spieler
            </p>
            <div className="mt-3 flex items-center gap-3">
              <ShirtIcon
                number={selectedPlayer.number}
                large
                tone={selectedTone}
              />
              <div>
                <h3 className="font-heading text-xl uppercase text-white md:text-2xl">
                  {selectedPlayer.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/55">
                  {selectedPlayer.role}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[1.25rem] border border-white/10 bg-black/18 p-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/50">
              Positionsnotiz
            </p>
            <p className="mt-3 text-sm leading-7 text-white/74">
              {selectedPlayer.note}
            </p>
            <div className="mt-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.26em] text-white/58">
              Spieler anklicken fuer Spotlight Card
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
