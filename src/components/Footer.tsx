import Link from "next/link";

const linksMain = [
  { label: "Come funziona", href: "#come-funziona" },
  { label: "FAQ", href: "#faq" },
];

const linksLegal = [
  { label: "Privacy", href: "/privacy" },
  { label: "Termini", href: "/termini" },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-brand-deep text-white">
      <div className="container-wide py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <p className="font-display font-black text-3xl">LD</p>
            <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.2em] text-[#6F6E87]">
              lifedesigncards.it
            </p>
            <p className="mt-5 font-ui text-sm leading-relaxed text-[#9CA3AF] max-w-[22ch]">
              Trasforma i tuoi pensieri in azioni concrete.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-[15px] text-white">Link</h4>
            <ul className="mt-4 space-y-2 font-ui text-sm text-[#9CA3AF]">
              {linksMain.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-bold text-[15px] text-white">Legal</h4>
            <ul className="mt-4 space-y-2 font-ui text-sm text-[#9CA3AF]">
              {linksLegal.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="font-display font-bold text-[15px] text-white">Contatti</h4>
            <ul className="mt-4 space-y-2 font-ui text-sm text-[#9CA3AF]">
              <li>
                <a
                  href="mailto:hello@lifedesign.com"
                  className="hover:text-white transition-colors"
                >
                  hello@lifedesign.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#374151] text-center font-ui text-xs text-[#9CA3AF]">
          © {new Date().getFullYear()} Life Design Cards. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
}
