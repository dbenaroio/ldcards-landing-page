import { SectionHeading } from "../ui/SectionHeading";

const steps = [
  {
    n: "01",
    title: "Scegli un Esploratore",
    description:
      "A turno, una persona porta una sfida reale della propria vita al centro del tavolo.",
  },
  {
    n: "02",
    title: "Pescate e rispondete",
    description:
      "L'Esploratore pesca carte, legge ad alta voce e condivide. Il gruppo ascolta — niente consigli o giudizi.",
  },
  {
    n: "03",
    title: "Attraversa le fasi",
    description:
      "Empatizza, definisci, idea, prototipa e agisci: un ciclo completo di Life Design.",
  },
  {
    n: "04",
    title: "Fai il primo passo",
    description:
      "Ogni turno si chiude con un'azione concreta da compiere entro domani.",
  },
];

export function ComeSiGioca() {
  return (
    <section
      id="come-si-gioca"
      className="relative overflow-hidden py-20 md:py-28"
    >
      {/*
        Decorative concentric circles — top-left corner.
        Stessa logica dell'hero: i cerchi sono concentrici e il loro centro
        coincide con l'angolo top-left della sezione, così risulta visibile
        solo un quadrante (bottom-right del cerchio).
      */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[390px] -left-[390px] hidden lg:block"
      >
        <div className="relative h-[780px] w-[780px]">
          <span className="absolute inset-0 rounded-full bg-phase1-soft" />
          <span className="absolute top-[97px] left-[97px] h-[585px] w-[585px] rounded-full bg-phase1-200" />
          <span className="absolute top-[195px] left-[195px] h-[390px] w-[390px] rounded-full bg-phase1-400" />
          <span className="absolute top-[292px] left-[292px] h-[195px] w-[195px] rounded-full bg-phase1" />
        </div>
      </div>

      <div className="container-wide relative">
        <SectionHeading align="center">Come si gioca</SectionHeading>
        <p className="mt-4 max-w-xl mx-auto text-center font-sans text-base leading-relaxed text-ink">
          Ogni turno si concentra su un Esploratore che guida il gruppo
          attraverso le fasi del Life Design.
        </p>

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li
              key={s.n}
              className="rounded-2xl bg-white border border-line/70 p-6 shadow-[0_2px_8px_-4px_rgba(20,20,40,0.06)]"
            >
              <p className="font-display font-black text-2xl text-brand">
                {s.n}
              </p>
              <h3 className="mt-2 font-display font-semibold text-lg text-brand">
                {s.title}
              </h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-ink">
                {s.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
