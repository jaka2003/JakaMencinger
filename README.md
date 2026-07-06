# Portfolio – Jaka Mencinger

Osebna portfolio spletna stran (Next.js App Router + TypeScript + Tailwind CSS).
Temna, moderna, popolnoma responsive, s subtilnimi animacijami.

## Zagon

```bash
npm install
npm run dev
```

Stran teče na [http://localhost:3000](http://localhost:3000).

Za produkcijo (statični export → mapa `out/`):

```bash
npm run build      # zgradi statično stran v out/
npx serve out      # lokalni predogled zgrajene strani (neobvezno)
```

> Stran je **statični export** (`output: "export"` v `next.config.mjs`).
> Zato `npm run start` NE deluje – za lokalni razvoj uporabi `npm run dev`,
> za predogled builda pa `npx serve out`.

## Deploy (Cloudflare)

Stran se objavi kot **statični assets** (brez serverja, brez OpenNext).
Konfiguracija je v [`wrangler.jsonc`](wrangler.jsonc) – kaže na mapo `out/`.

Pipeline:

```
Build command:  npm run build      # ustvari out/
Deploy command: npx wrangler deploy # objavi out/ kot statično stran
```

Ob vsakem `git push` se stran samodejno zgradi in objavi.
Ko dobiš domeno, vpiši produkcijski URL v `personal.siteUrl` ([lib/data.ts](lib/data.ts))
in jo dodaj v Cloudflare (Custom domain).

## Kje urejam vsebino

Skoraj vse je na enem mestu: [`lib/data.ts`](lib/data.ts).
Tam najdeš **TODO** komentarje, kam vpišeš:

- **GitHub link** → `personal.github`
- **CV datoteka** → `personal.cvUrl` (PDF daj v `public/`)
- **Live demo linke** posameznih projektov → `projects[].liveUrl`
- **GitHub linke** posameznih projektov → `projects[].githubUrl`
- **Slike projektov** → `projects[].image` (datoteke daj v `public/projects/`)

> Če povezave ni (prazen niz `""`), se gumb samodejno prikaže kot neaktiven (disabled).
> Če slike ni, se prikaže lep gradientni placeholder.

## Struktura

```
app/            # layout, page, globalni stili
components/      # Navbar, Hero, About, Projects, Skills, Experience, Contact, Footer
lib/data.ts     # VSA vsebina, povezave in poti do slik
public/projects/ # slike projektov
```
