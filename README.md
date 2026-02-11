# thiagososenke.com

Sitio personal de Thiago Sosenke.

## Stack

- [Next.js](https://nextjs.org/) 16 (App Router)
- TypeScript
- Tailwind CSS 4

## Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estara disponible en [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Estructura

```
src/
  app/
    layout.tsx          # Layout principal con Header, Footer y SEO
    page.tsx            # Home (/)
    globals.css         # Estilos globales
    projects/
      page.tsx          # Pagina de proyectos (/projects)
  components/
    Header.tsx          # Navegacion principal
    Footer.tsx          # Pie de pagina
    ProjectCard.tsx     # Card reutilizable para proyectos
  data/
    projects.ts         # Datos centralizados de proyectos
```

## Proyectos

| Proyecto          | URL                                           |
| ----------------- | --------------------------------------------- |
| Rain Simulator    | https://rain-simulator.thiagososenke.com      |
| Mad Games         | https://mad-games.thiagososenke.com           |
| Echoes of Silence | https://echoes-of-silence.thiagososenke.com   |
| Clicker Game      | https://clicker-game.thiagososenke.com        |
