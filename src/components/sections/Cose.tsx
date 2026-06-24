import Image from "next/image";
import { SectionHeading } from "../ui/SectionHeading";
import flower from "../../../public/images/cose-flower.png";

export function Cose() {
  return (
    <section id="cose" className="py-20 md:py-28">
      <div className="container-wide">
        <div className="grid gap-12 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16 items-center">
          <div className="min-w-0">
            <SectionHeading>Cos&apos;è</SectionHeading>

            <div className="mt-7 space-y-5 font-ui text-[15px] md:text-base leading-relaxed text-body">
              <p>
                Le Life Design Cards sono un mazzo fisico suddiviso in cinque fasi:{" "}
                <strong className="text-ink font-semibold">
                  Empatizzare, Definire, Ideare, Prototipare e Fare
                </strong>
                . Ogni sessione guida il gruppo di partecipanti attraverso un ciclo
                completo dall&apos;esplorazione di chi sei fino a un esperimento
                concreto da testare nei giorni successivi. Tutte le istruzioni sono
                sulle carte. Per partire non serve un facilitatore o conoscenze
                pregresse.
              </p>
              <p>
                Funziona per una serata diversa dal solito con amici o persone appena
                conosciute. Funziona ancora meglio quando hai un nodo vero da
                sciogliere. E funziona anche da soli, lavorando per iscritto sulle
                carte.
              </p>
              <p>
                Il mazzo nasce dalla metodologia Life Design creata dalla Stanford
                University e dall&apos;esperienza di Davide Benaroio nel progetto Life
                Design Program, avviato nel 2022 e ormai con centinaia di partecipanti
                in Italia, Olanda, Germania e Australia.
              </p>
            </div>
          </div>

          <div className="relative min-w-0">
            <div className="relative mx-auto aspect-square w-full max-w-[600px] lg:max-w-[640px]">
              <Image
                src={flower}
                alt="Composizione delle carte delle 5 fasi: empatizzare, definire, ideare, prototipare"
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 600px, 640px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
