# Portfolio – Jaka Mencinger

Osebna portfolio spletna stran (Next.js App Router + TypeScript + Tailwind CSS).
Temna, moderna, popolnoma responsive, s subtilnimi animacijami.

## Zagon

```bash
npm install
npm run dev
```

Stran teče na [http://localhost:3000](http://localhost:3000).

Za produkcijo:

```bash
npm run build
npm run start
```

## Kje urejam vsebino

Skoraj vse je na enem mestu: [`lib/data.ts`](lib/data.ts).
Tam najdeš **TODO** komentarje, kam vpišeš:

- **GitHub link** → `personal.github`
- **LinkedIn link** → `personal.linkedin`
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
