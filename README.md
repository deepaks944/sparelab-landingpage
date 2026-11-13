# SpareLab

SpareLab is a responsive landing page for an automotive parts sourcing marketplace. It introduces the buyer and vendor experience, explains how sourcing works, and provides preview account and part-request flows.

**Live site:** [deepaks944.github.io/sparelab-landingpage](https://deepaks944.github.io/sparelab-landingpage/)

> **Prototype notice:** Account sign-in/sign-up and the part request form are UI previews only. They do not send or store submitted information, and no backend is connected.

## Features

- Responsive landing page with sections for buyers, vendors, trust, FAQs, and sourcing
- Mobile navigation, dark/light theme toggle, and account menu
- Account page with sign-in and sign-up modes (`/account`, `/signin`, `/signup`)
- Part request form preview with vehicle fitment details and optional photo selection
- FAQ chatbot, animated page sections, and back-to-top control
- Lightweight analytics events dispatched to `window.dataLayer` (when available) and as `sparelab:analytics` browser events
- GitHub Pages support, including a generated `404.html` fallback for client-side routes
- Optional Docker and Docker Compose deployment

## Tech stack

- React 19
- Vite
- Tailwind CSS 4
- React Router

## Getting started

Requirements: Node.js 22.12 or newer and npm.

From the project directory:

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite (usually <http://localhost:5173>).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot reload. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run Oxlint. |
| `npm run predeploy` | Increment the build number and create a production build. |
| `npm run deploy` | Publish the existing `dist/` directory to GitHub Pages using `gh-pages`. |

Run the checks before publishing:

```sh
npm run lint
npm run build
```

To publish to the configured GitHub Pages site:

```sh
npm run predeploy
npm run deploy
```

Vite's default base path is `/sparelab-landingpage/`. For a root-path deployment, set `BASE_PATH`:

```sh
BASE_PATH=/ npm run build
```


## Project structure

```text
src/
  components/  Landing page sections and reusable UI
  utils/       Shared utilities, including analytics
  App.jsx      Routes, theme state, and page composition
  main.jsx     React application entry point
public/        Static images, icons, and logos
dist/          Generated production output
```
