import { SectionHeading } from "../ui/SectionHeading";

const testimonials = [
  {
    quote:
      "Le carte mi hanno aiutato a capire finalmente cosa volevo veramente. La conversazione con il mio amico è stata profonda e autentica.",
    author: "Marco",
    role: "Beta Tester",
  },
  {
    quote:
      "Incredibile come delle semplici domande possono sbloccare pensieri che avevo dentro da anni. Consiglio a tutti di provare.",
    author: "Giulia",
    role: "Beta Tester",
  },
  {
    quote:
      "Non sapevo cosa aspettarmi, ma il mazzo è ben fatto e le istruzioni sono chiarissime. Perfetto anche per chi non conosce il Life Design.",
    author: "Andrea",
    role: "Beta Tester",
  },
  {
    quote:
      "Ho fatto una sessione con i miei amici e abbiamo riso, riflettuto e soprattutto ci siamo connessi davvero. Bellissimo.",
    author: "Sara",
    role: "Beta Tester",
  },
];

export function SocialProof() {
  return (
    <section
      id="testimonial"
      className="py-20 md:py-24"
      aria-labelledby="social-proof-title"
    >
      <div className="container-wide">
        <SectionHeading>
          <span id="social-proof-title">
            Cosa dice chi ha provato Life Design Cards
          </span>
        </SectionHeading>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="rounded-2xl bg-white border border-line p-7 md:p-8 shadow-[0_2px_8px_-4px_rgba(20,20,40,0.06)]"
            >
              <blockquote>
                <p className="font-ui italic text-body leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-4 font-display font-semibold text-brand text-[15px]">
                {t.author}, {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
