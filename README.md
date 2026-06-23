# Life Design Cards — Landing Page

Landing page ufficiale di **Life Design Cards**, un mazzo di 80 carte basato sulla
metodologia Life Design della Stanford University.

> _"Progetta la tua vita, una carta alla volta."_

Costruita seguendo fedelmente il design Figma "Life Design"
([file](https://www.figma.com/design/wVJnD3ZPlV51VjojNKvjvI/Life-Design)).

---

## Stack

- **[Next.js 16](https://nextjs.org)** (App Router, Turbopack)
- **[React 19](https://react.dev)**
- **[TypeScript 5](https://www.typescriptlang.org)**
- **[Tailwind CSS 4](https://tailwindcss.com)** (con `@theme` per i design tokens)
- **Font Google**: [Fraunces](https://fonts.google.com/specimen/Fraunces) (display
  serif), [Outfit](https://fonts.google.com/specimen/Outfit) (sans),
  [Inter](https://fonts.google.com/specimen/Inter) (UI)
- Ottimizzato per il deploy su **[Vercel](https://vercel.com)**

---

## Sezioni

La landing è composta da 11 sezioni ricavate dal Figma:

1. **Navigation** sticky con logo, menu e CTA "Prendi il KIT"
2. **Hero** — headline serif con cards illustrate e cerchi concentrici decorativi
3. **Per chi è** — narrazione + carte empatizzare
4. **Cos'è** — descrizione + composizione "fiore" delle 5 fasi
5. **Come funziona** — griglia con le 6 fasi colorate del gioco
6. **Come si gioca** — 4 step numerati con cerchi concentrici
7. **Pronto a iniziare** — foto del kit + CTA d'acquisto principale
8. **Cosa ricevi con lo STARTER KIT** — bullet point del prodotto
9. **Social proof** — testimonial dei beta tester
10. **FAQ** — accordion accessibile (`<details>` nativo)
11. **Final CTA** — bottone d'acquisto finale
12. **Footer** — link, legal, contatti

---

## Quick Start

```bash
# Installa le dipendenze
npm install

# Avvia il dev server
npm run dev
# → http://localhost:3000

# Build di produzione
npm run build
npm run start

# Lint
npm run lint
```

---

## Struttura del progetto

```
src/
├── app/
│   ├── layout.tsx        # Root layout, font, metadata SEO
│   ├── page.tsx          # Pagina principale (composizione sezioni)
│   ├── globals.css       # Design tokens (Tailwind v4 @theme)
│   ├── sitemap.ts        # /sitemap.xml
│   └── robots.ts         # /robots.txt
└── components/
    ├── Navigation.tsx
    ├── Footer.tsx
    ├── ui/
    │   ├── Button.tsx
    │   └── SectionHeading.tsx
    └── sections/
        ├── Hero.tsx
        ├── PerChi.tsx
        ├── Cose.tsx
        ├── ComeFunziona.tsx
        ├── ComeSiGioca.tsx
        ├── StarterKitCTA.tsx
        ├── StarterKitFeatures.tsx
        ├── SocialProof.tsx
        ├── FAQ.tsx
        └── FinalCTA.tsx

public/images/
├── hero-cards.png
├── per-chi-cards.png
├── cose-flower.png
└── starter-kit-photo.png
```

---

## Design Tokens

Tutti i token sono definiti in `src/app/globals.css` tramite la direttiva
`@theme` di Tailwind v4. Si ricavano direttamente dal file Figma originale.

### Colori brand

| Token | Hex | Uso |
| --- | --- | --- |
| `brand` | `#4646C6` | CTA primary, headings di sezione |
| `brand-deep` | `#271278` | Sfondo del footer |
| `ink` | `#3A3955` | Heading display (hero) |
| `body` | `#4B5563` | Testo body |
| `cream` | `#F7F6F2` | Sfondo della pagina |

### Palette delle 5 fasi

Ogni fase ha 4 toni: `phase{n}-soft` (bg) / `phase{n}-200` / `phase{n}-400` / `phase{n}` (saturated).

| # | Fase | Colore principale |
| --- | --- | --- |
| 0 | Esploratore | `#5C5380` (viola) |
| 1 | Empatizzare | `#2C7FAE` (blu) |
| 2 | Definire | `#3C7A51` (verde) |
| 3 | Ideare | `#C0762F` (arancio) |
| 4 | Prototipare | `#B03C3C` (rosso) |
| 5 | Fare | `#B89324` (oro) |

### Tipografia

| Family | Tailwind class | Uso |
| --- | --- | --- |
| `Fraunces` | `font-display` | H1, H2, numeri decorativi |
| `Outfit` | `font-sans` | Testo hero, descrizioni card |
| `Inter` | `font-ui` | Navigation, FAQ, footer, body UI (default) |

---

## SEO

- Metadata Open Graph + Twitter Card configurati in `src/app/layout.tsx`
- `sitemap.xml` e `robots.txt` generati dinamicamente
- HTML lang `it`, semantic landmarks (`<header>`, `<main>`, `<footer>`,
  `<section>`, `<nav>`)
- Heading hierarchy corretta (un solo `<h1>`, sezioni con `<h2>`)
- Componente FAQ usa `<details>` nativo (accessibile, nessun JS richiesto)

Per personalizzare l'URL pubblico:

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://lifedesigncards.it
```

---

## Deploy su Vercel

Il modo più rapido è collegare il repo a [Vercel](https://vercel.com):

1. Push del progetto su GitHub
2. Su Vercel: **Add New → Project → Import** dalla repo
3. Imposta la variabile `NEXT_PUBLIC_SITE_URL` con l'URL definitivo
4. Deploy automatico ad ogni push su `main`

Oppure via CLI:

```bash
npm i -g vercel
vercel login
vercel       # primo deploy
vercel --prod  # deploy in produzione
```

---

## Asset

Tutti gli asset visivi della landing sono stati estratti dal file Figma con la
[REST API ufficiale](https://www.figma.com/developers/api). I PNG renderizzati
sono in `public/images/` con risoluzione 2x per supportare retina/HiDPI.

In caso fosse necessario rigenerare gli asset, basta riesportarli dal Figma
agli stessi nomi file.

---

## Roadmap (idee per il futuro)

- [ ] Form di iscrizione alla newsletter pre-lancio
- [ ] Integrazione con Stripe / Shopify per checkout dello starter kit
- [ ] Analytics (Plausible o GA4)
- [ ] Pagine `/privacy` e `/termini`
- [ ] Versione inglese (i18n con `next-intl`)
- [ ] OG image dinamica generata via `@vercel/og`
