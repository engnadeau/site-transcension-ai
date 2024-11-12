# Transcension AI Site

[![Netlify Status](https://api.netlify.com/api/v1/badges/09b12d75-b325-4f6a-b5df-bb69e23ffa62/deploy-status)](https://app.netlify.com/sites/transcension-ai/deploys)

This project is based on [AstroWind](https://github.com/onwidget/astrowind), using `.astro` or `.md` files in the `src/pages/` directory to define routes by file name.

Static assets can be added in `public/` (for non-transforming assets) or `assets/` (for direct imports).

## Commands

Run these from the project root in the terminal:

| Command               | Description                                  |
|-----------------------|----------------------------------------------|
| `npm install`         | Install dependencies                         |
| `npm run dev`         | Start local dev server at `localhost:3000`   |
| `npm run build`       | Build for production to `./dist/`            |
| `npm run preview`     | Preview production build locally             |
| `npm run check`       | Check for project errors                     |
| `npm run fix`         | Lint and format code with Prettier           |
| `npm run astro ...`   | Run Astro CLI commands (e.g., `astro add`)   |
