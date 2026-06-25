import Image from "next/image";
import { Button } from "../ui/Button";
import kitPhoto from "../../../public/images/starter-kit-photo.png";

export function StarterKitCTA() {
  return (
    <section
      id="starter-kit"
      className="bg-white py-20 md:py-24 scroll-mt-20"
      aria-labelledby="starter-kit-cta-title"
    >
      <div className="container-wide">
        <div className="text-center">
          <h2
            id="starter-kit-cta-title"
            className="font-display font-bold text-brand text-3xl md:text-[2.25rem] tracking-tight leading-[1.15]"
          >
            Pronto a iniziare il tuo Life Design?
          </h2>

          <div className="mt-6 flex flex-col items-center gap-2">
            <Button href="#acquista">Acquista lo STARTER KIT a 59€</Button>
            <p className="font-ui text-sm text-body">
              <span className="line-through text-muted mr-1">129€</span>
              (spedizione inclusa)
            </p>
          </div>
        </div>

        <div className="mt-12 flex justify-center min-w-0">
          <div className="relative w-full max-w-[640px] aspect-[733/1024]">
            <Image
              src={kitPhoto}
              alt="Starter Kit Life Design Pack: mazzo di 80 carte, ruota delle fasi, guida e carte esploratore"
              fill
              sizes="(max-width: 768px) 90vw, 640px"
              className="object-contain rounded-2xl"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
