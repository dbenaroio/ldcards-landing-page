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
                Queste carte fanno per te se ogni tanto senti che qualcosa non torna. Non è per forza una situazione drammatica, è più sottile: <b>la
                sensazione di non stare andando esattamente nella direzione giusta</b>,
                senza riuscire a capire bene il perché.
              </p>
              <p>
                Potrebbe essere il lavoro, una relazione, un progetto lasciato a metà,
                <b>qualcosa nella nostra vita che meriterebbe più attenzione ma non la
                sta ricevendo</b>. I pensieri ci tornano sopra. Ci costruisci mille scenari, ma tutto finisce sempre per rimanere nella tua testa.
              </p>
              <p>
                Quello che cambia le cose è <b>agire, fare un primo passo</b>. E spesso il
                primo passo arriva connettendosi con qualcuno che ascolta senza
                giudicare e ti fa le domande che da solo non ti faresti. <b>Le Life Design
                Cards creano esattamente quello spazio necessario per queste
                conversazioni</b>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
