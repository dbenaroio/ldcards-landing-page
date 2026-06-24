import Image from "next/image";
import { SectionHeading } from "../ui/SectionHeading";
import perChiCards from "../../../public/images/per-chi-cards.png";

export function PerChi() {
  return (
    <section id="per-chi" className="py-20 md:py-28">
      <div className="container-wide">
        <div className="grid gap-12 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:gap-16 items-center">
          {/* Visual on the left on desktop, below text on mobile */}
          <div className="order-2 md:order-1 min-w-0">
            <div className="relative mx-auto w-full max-w-[560px] lg:max-w-[600px] aspect-[476/409]">
              <Image
                src={perChiCards}
                alt="Carta empatizzare fase 1 e carta domanda con riflessione"
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 560px, 600px"
                className="object-contain"
              />
            </div>
          </div>

          <div className="order-1 md:order-2 min-w-0">
            <SectionHeading>Per chi è</SectionHeading>

            <div className="mt-7 space-y-5 font-ui text-[15px] md:text-base leading-relaxed text-body">
              <p>
                Qualcosa non torna. Non è una situazione drammatica, è più sottile: la
                sensazione di non stare andando esattamente nella direzione giusta,
                senza riuscire a capire bene perché.
              </p>
              <p>
                Potrebbe essere il lavoro, una relazione, un progetto lasciato a metà,
                qualcosa nella nostra vita che meriterebbe più attenzione ma non la
                riceve. I pensieri ci tornano sopra. Ci costruisci mille scenari e
                piani. Ma tutto finisce sempre per rimanere nella tua testa.
              </p>
              <p>
                Quello che sposta le cose è agire, fare un primo passo. E spesso il
                primo passo arriva connettendosi con qualcuno che ascolta senza
                giudicare e ti fa le domande che da solo non ti faresti. Le Life Design
                Cards creano esattamente quello spazio necessario per queste
                conversazioni.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
