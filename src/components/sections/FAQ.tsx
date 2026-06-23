import { SectionHeading } from "../ui/SectionHeading";

const faqs = [
  {
    q: "Devo conoscere il Life Design per usarlo?",
    a: "No. Le carte contengono tutte le istruzioni e le domande necessarie. Non serve un facilitatore o conoscenze pregresse: basta seguire il flusso suggerito dal mazzo.",
  },
  {
    q: "Con quante persone si può usare?",
    a: "Il mazzo è progettato per gruppi da 2 a 8 persone. Funziona con amici, partner, colleghi o persone appena conosciute. L'unico requisito è la voglia di ascoltarsi.",
  },
  {
    q: "Si può usare da soli?",
    a: "Sì. Funziona anche in solitaria, lavorando per iscritto sulle carte come una pratica di journaling guidato. La dinamica di gruppo aggiunge profondità ma non è obbligatoria.",
  },
  {
    q: "Il workshop incluso nello STARTER KIT è live o registrato?",
    a: "È una sessione live di 90 minuti con un facilitatore esperto. La pianifichi quando preferisci dopo aver ricevuto il kit.",
  },
  {
    q: "Cosa succede dopo?",
    a: "Ogni ciclo si chiude con un'azione concreta da compiere entro domani. Le carte ti accompagnano nelle settimane successive — puoi rifare il ciclo su nuovi temi tutte le volte che vuoi.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="py-20 md:py-24 scroll-mt-20"
      aria-labelledby="faq-title"
    >
      <div className="container-wide max-w-3xl">
        <SectionHeading align="center">
          <span id="faq-title">Domande frequenti</span>
        </SectionHeading>

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              className="group rounded-2xl bg-white border border-line/70 transition-shadow open:shadow-[0_4px_16px_-8px_rgba(20,20,40,0.08)]"
              {...(i === 0 ? { open: true } : {})}
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 p-5 md:p-6 font-ui font-semibold text-body-strong text-[15px] [&::-webkit-details-marker]:hidden">
                <span>{f.q}</span>
                <span
                  aria-hidden
                  className="flex-shrink-0 inline-flex h-7 w-7 items-center justify-center rounded-full bg-cream text-brand transition-transform duration-200 group-open:rotate-180"
                >
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1.5L6 6.5L11 1.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-1 font-ui text-[15px] leading-relaxed text-body">
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
