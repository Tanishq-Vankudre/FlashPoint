
# FlashPoint — React News App

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-5-purple?logo=vite)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-563d7c?logo=bootstrap)
![Font Awesome](https://img.shields.io/badge/Font%20Awesome-React-blueviolet?logo=fontawesome)
![News API](https://img.shields.io/badge/API-NewsAPI-red?logo=news)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-orange)

FlashPoint is a lightweight news reader built with React and Vite. Browse the latest headlines by category, search across articles, and enjoy a clean, responsive UI.

> Note: This app uses the public NewsAPI.org service and requires an API key.

## Features

- Category filters: Technology, Business, Health, Sports, Entertainment
- Keyword search: Toggle a search bar and query across articles
- Image fallback: Broken images automatically fall back to a default
- Responsive UI: Built with Bootstrap 5
- Simple auth modals: In‑memory Sign In/Sign Up for demo purposes (no backend)

## Tech Stack

- React 18 + Vite 5
- Bootstrap 5 (via CDN)
- Font Awesome React for icons
- NewsAPI.org for data

## Prerequisites

- Node.js 18+ (required by Vite 5)

## Getting Started

1) Clone the repository

```cmd
git clone <your-repo-url>
cd FlashPoint
```

2) Install dependencies

```cmd
npm install
```

3) Configure environment variables

Create a `.env` file at the project root and set your NewsAPI key:

```
VITE_API_KEY=your_newsapi_key_here
```

4) Start the dev server

```cmd
npm run dev
```

Then open the local URL printed in the terminal.

## Available Scripts

- `npm run dev` — Start Vite dev server
- `npm run build` — Production build
- `npm run preview` — Preview the production build locally
- `npm run lint` — Run ESLint

## How It Works

- Headlines endpoint: When you select a category, the app calls `https://newsapi.org/v2/top-headlines?country=us&category=<category>&apiKey=<key>`
- Search endpoint: When you submit a search, the app calls `https://newsapi.org/v2/everything?q=<query>&apiKey=<key>`
- API key is read from `import.meta.env.VITE_API_KEY` (set in `.env`)
- Articles without an image are filtered out; broken images fall back to a local placeholder
- Sign In/Sign Up are purely client‑side and stored in memory for demo only

## Project Structure

```
FlashPoint/
├─ src/
│  ├─ App.jsx               # App shell: navbar + news board
│  ├─ main.jsx              # React bootstrap
│  ├─ components/
│  │  ├─ Navbar.jsx         # Category filters, search, auth modals
│  │  ├─ NewsBoard.jsx      # Fetch and list news articles
│  │  ├─ Newsitem.jsx       # Individual article card with image fallback
│  │  ├─ SignIn.jsx         # In‑memory sign in modal
│  │  └─ SignUp.jsx         # In‑memory sign up modal
│  └─ styles (*.css)        # Component styles
├─ assets/                  # Icons, images
├─ index.html               # Bootstrap 5 via CDN
├─ vite.config.js
└─ package.json
```

## Configuration Notes

- Put your NewsAPI key in `.env` as `VITE_API_KEY`. Do not commit your real key.
- The current UI uses Bootstrap via CDN. If you prefer package-managed CSS, add `bootstrap` to dependencies and import its CSS in `main.jsx`.
- Auth modals are for UI only; there is no persistence or server.

## Troubleshooting

- 401 Unauthorized from NewsAPI: Verify `VITE_API_KEY` is set in `.env` and you restarted the dev server.
- Empty results: Categories are US‑centric by default (`country=us`). Try Search mode for broader results.
- Mixed content/CORS issues on custom deployments: Serve over HTTPS and ensure your host allows outbound requests to NewsAPI.

## Contributing

Contributions are welcome! Please open an issue to discuss major changes, and submit a PR with a clear description.


## License

MIT License — see `LICENSE` for details.

## Authors

- Sanket Patil — https://github.com/sankettpatil
- Tanishq Vankudre — https://github.com/Tanishq-Vankudre

## Future Scope

- Persisted auth (Firebase/Auth0) with profiles and settings
- Save/favorite articles and local history
- Pagination or infinite scroll with skeleton loaders
- Dark mode and accessibility passes (ARIA, color contrast)
- Multi‑country and language selector; time‑zone aware timestamps
- Caching and offline support with a service worker
- Unit tests (React Testing Library) and CI workflow
- Deploy guides for Vercel/Netlify/GitHub Pages with environment variables

Enjoy exploring the world of news with FlashPoint!
