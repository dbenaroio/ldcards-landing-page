import Image from "next/image";
import { Button } from "../ui/Button";
import heroCards from "../../../public/images/hero-cards.png";

const stats = [
  { label: "giocatori", value: "2–8" },
  { label: "min a ciclo", value: "~35" },
  { label: "cards", value: "80" },
  { label: "fasi", value: "5" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-10 pb-16 md:pt-12 md:pb-20"
    >
      {/*
        Decorative concentric circles — top-right corner.
        I cerchi nel Figma sono concentrici e il loro centro coincide con
        l'angolo top-right del frame: ne risulta visibile circa un quarto.
        Per replicarlo: il box (= cerchio più grande) viene offsettato di
        metà del proprio diametro in alto e a destra.
      */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[390px] -right-[390px] hidden md:block"
      >
        <div className="relative h-[780px] w-[780px]">
          <span className="absolute inset-0 rounded-full bg-phase1-soft" />
          <span className="absolute top-[97px] left-[97px] h-[585px] w-[585px] rounded-full bg-phase1-200" />
          <span className="absolute top-[195px] left-[195px] h-[390px] w-[390px] rounded-full bg-phase1-400" />
          <span className="absolute top-[292px] left-[292px] h-[195px] w-[195px] rounded-full bg-phase1" />
        </div>
      </div>
      {/* Smaller decorative on mobile — same centering rule */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[140px] -right-[140px] md:hidden"
      >
        <div className="relative h-[280px] w-[280px]">
          <span className="absolute inset-0 rounded-full bg-phase1-soft" />
          <span className="absolute top-[35px] left-[35px] h-[210px] w-[210px] rounded-full bg-phase1-200" />
          <span className="absolute top-[70px] left-[70px] h-[140px] w-[140px] rounded-full bg-phase1-400" />
          <span className="absolute top-[105px] left-[105px] h-[70px] w-[70px] rounded-full bg-phase1" />
        </div>
      </div>

      <div className="container-wide relative">
        <div className="grid gap-10 md:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] md:gap-10 lg:gap-12 items-center">
          <div className="min-w-0">
            <p className="font-sans uppercase tracking-[0.18em] text-xs font-semibold text-phase1">
              Un gioco di Life Design
            </p>

            <h1 className="heading-display mt-4 max-w-full text-balance">
              Progetta la tua vita, una carta alla volta.
            </h1>

            <div className="mt-6 max-w-[52ch] space-y-4 font-sans text-[16px] md:text-[18px] leading-relaxed text-ink">
              <p>
                Le{" "}
                <strong className="text-ink font-semibold">Life Design Cards</strong>{" "}
                creano il momento giusto per quella conversazione. Su chi sei, su cosa
                vorresti che fosse diverso, su quale piccolo passo vale la pena fare
                adesso. Con gli amici di sempre o con persone appena conosciute.
              </p>
              <p>
                Non è un gioco in cui si vince o si perde. È <b>un&apos;esperienza
                collaborativa e creativa per esplorare e progettare la tua vita</b>.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href="#starter-kit" variant="brand">
                Acquista Life Design Cards
              </Button>
              <Button href="#come-funziona" variant="secondary">
                Come funziona
              </Button>
            </div>

            <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-sans text-sm text-brand-darker">
              {stats.map((s) => (
                <li key={s.label} className="flex items-baseline gap-1.5">
                  <span className="font-bold">{s.value}</span>
                  <span className="font-medium opacity-70">{s.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cards visual — sborda a destra sul padding del container per
              avere più area visibile pur tenendo il testo largo a sinistra. */}
          <div className="relative min-w-0 md:-mr-6 lg:-mr-12 xl:-mr-16">
            <div className="relative ml-auto mr-auto md:mr-0 w-full max-w-[520px] lg:max-w-[620px] aspect-[1071/964]">
              <Image
                src={heroCards}
                alt="Carta esploratore fase 0 e carta domanda Chi si mette in gioco?"
                fill
                priority
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 540px, 620px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
