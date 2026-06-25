import { SectionHeading } from "../ui/SectionHeading";

const features = [
  {
    title: "Il Mazzo Completo",
    description:
      "80 carte divise nelle 5 fasi del Life Design. Ogni carta contiene domande, istruzioni e spunti di riflessione per guidare la conversazione.",
  },
  {
    title: "Workshop Personale",
    description:
      "Una sessione live di 60 minuti con un facilitatore esperto. Imparerai come usare le carte e farai la tua prima sessione di Life Design.",
  },
];

export function StarterKitFeatures() {
  return (
    <section
      id="cosa-ricevi"
      className="py-20 md:py-24"
      aria-labelledby="cosa-ricevi-title"
    >
      <div className="container-wide">
        <SectionHeading>
          <span id="cosa-ricevi-title">Cosa ricevi con lo STARTER KIT</span>
        </SectionHeading>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl bg-white border border-line/70 p-7 md:p-8 shadow-[0_2px_10px_-6px_rgba(20,20,40,0.08)]"
            >
              <h3 className="font-display font-bold text-brand text-xl">
                {f.title}
              </h3>
              <p className="mt-3 font-ui text-[15px] leading-relaxed text-body">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
