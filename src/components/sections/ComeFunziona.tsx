import { SectionHeading } from "../ui/SectionHeading";

type Phase = {
  index: 0 | 1 | 2 | 3 | 4 | 5;
  name: string;
  duration: string;
  description: string;
  bg: string;
  accent200: string;
  accent400: string;
  text: string;
};

const phases: Phase[] = [
  {
    index: 0,
    name: "esploratore",
    duration: "~2 min",
    description: "Si sceglie chi si mette in gioco per questo turno.",
    bg: "bg-phase0-soft",
    accent200: "bg-phase0-200",
    accent400: "bg-phase0-400",
    text: "text-phase0",
  },
  {
    index: 1,
    name: "empatizzare",
    duration: "~5 min",
    description: "Scopri chi sei e cosa è importante per te.",
    bg: "bg-phase1-soft",
    accent200: "bg-phase1-200",
    accent400: "bg-phase1-400",
    text: "text-phase1",
  },
  {
    index: 2,
    name: "definire",
    duration: "~5 min",
    description: "Metti a fuoco il problema su cui vuoi fare design.",
    bg: "bg-phase2-soft",
    accent200: "bg-phase2-200",
    accent400: "bg-phase2-400",
    text: "text-phase2",
  },
  {
    index: 3,
    name: "ideare",
    duration: "~10 min",
    description: "Genera soluzioni creative e fuori dagli schemi.",
    bg: "bg-phase3-soft",
    accent200: "bg-phase3-200",
    accent400: "bg-phase3-400",
    text: "text-phase3",
  },
  {
    index: 4,
    name: "prototipare",
    duration: "~5 min",
    description: "Progetta un piccolo esperimento da provare in 2 settimane.",
    bg: "bg-phase4-soft",
    accent200: "bg-phase4-200",
    accent400: "bg-phase4-400",
    text: "text-phase4",
  },
  {
    index: 5,
    name: "fare",
    duration: "~5 min",
    description: "Compi il primo passo concreto, entro domani.",
    bg: "bg-phase5-soft",
    accent200: "bg-phase5-200",
    accent400: "bg-phase5-400",
    text: "text-phase5",
  },
];

export function ComeFunziona() {
  return (
    <section
      id="come-funziona"
      className="bg-white py-20 md:py-28"
      aria-labelledby="come-funziona-title"
    >
      <div className="container-wide">
        <SectionHeading
          align="center"
          subtitle={
            <>
              80 carte, 1 esploratore, 5 fasi.
              <br className="hidden sm:inline" />
              Ogni carta è progettata per guidare la conversazione e aiutarti a
              trasformare i tuoi pensieri in azioni concrete.
            </>
          }
        >
          <span id="come-funziona-title">Come funziona</span>
        </SectionHeading>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {phases.map((p) => (
            <li
              key={p.index}
              className={`relative overflow-hidden rounded-2xl p-6 ${p.bg}`}
            >
              {/*
                Decorative corner stack — top-right corner of the card.
                3 cerchi concentrici (180/120/60) con centro esattamente
                sull'angolo top-right: visibile solo il quadrante bottom-left.
              */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-[90px] -right-[90px]"
              >
                <div className="relative h-[180px] w-[180px]">
                  <span
                    className={`absolute inset-0 rounded-full ${p.bg}`}
                  />
                  <span
                    className={`absolute top-[30px] left-[30px] h-[120px] w-[120px] rounded-full ${p.accent200}`}
                  />
                  <span
                    className={`absolute top-[60px] left-[60px] h-[60px] w-[60px] rounded-full ${p.accent400}`}
                  />
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] font-sans font-semibold">
                  <span className={`${p.text}`}>FASE {p.index}</span>
                  <span className={`${p.text}`}>{p.duration}</span>
                </div>

                <p
                  className={`mt-2 font-display font-bold text-lg ${p.text} lowercase`}
                >
                  {p.name}
                </p>

                <p className="mt-3 font-sans text-[15px] leading-relaxed text-ink">
                  {p.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
