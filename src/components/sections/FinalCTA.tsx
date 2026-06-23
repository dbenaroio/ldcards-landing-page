import { Button } from "../ui/Button";

export function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="py-20 md:py-24"
      aria-labelledby="final-cta-title"
    >
      <div className="container-wide max-w-2xl text-center">
        <h2
          id="final-cta-title"
          className="font-display font-bold text-brand text-3xl md:text-[2.25rem] tracking-tight leading-[1.15]"
        >
          Metti le carte in tavola.
        </h2>

        <p className="mt-5 font-ui text-base md:text-lg leading-relaxed text-body">
          Letteralmente. I pensieri che girano nella testa diventano qualcos&apos;altro
          quando li tiri fuori. Con le persone che hai intorno o anche da solo, le Life
          Design Cards ti guidano dall&apos;esplorazione di chi sei a un primo passo
          concreto da fare veramente.
        </p>

        <div className="mt-8 flex flex-col items-center gap-2">
          <Button href="#acquista">
            <span aria-hidden>→</span>
            <span>Prendi lo STARTER KIT a 59€</span>
          </Button>
          <p className="font-ui text-sm text-body">
            <span className="line-through text-muted mr-1">129€</span>
            (spedizione inclusa)
          </p>
        </div>
      </div>
    </section>
  );
}
