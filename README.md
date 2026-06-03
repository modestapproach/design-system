# Design System

A **central** component library built on [shadcn/ui](https://ui.shadcn.com) + [Tailwind CSS](https://tailwindcss.com), with [Storybook](https://storybook.js.org) as the browsable explorer. It is published as a **shadcn registry** so other apps (and AI agents) can install components from one source of truth.

## Consuming this design system in another app

Other apps reference the registry — they don't copy files manually.

**1. Register the namespace** in the consuming app's `components.json`:

```json
{
  "registries": {
    "@dibslist": "https://design-system.theodoreyd.workers.dev/r/{name}.json"
  }
}
```

**2. Add components** (dependencies — npm + cross-component — resolve automatically):

```bash
npx shadcn@latest add @dibslist/button
npx shadcn@latest add @dibslist/dashboard   # whole compositions too
npx shadcn@latest add @dibslist/theme        # the DibsList palette + Geist fonts
```

**3. Let AI agents install from it** via the shadcn MCP server:

```bash
npx shadcn@latest mcp init --client claude   # or cursor / vscode
```

Then prompt: *"Show me the components in the @dibslist registry"* or *"Add the @dibslist card."*

> Browse everything visually at **https://design-system.theodoreyd.workers.dev**. The registry JSON is served from the same deploy at `/r/{name}.json`.

## Stack

- **Next.js 15** (App Router) — where the components live
- **shadcn/ui** (Radix-based) — owned, copy-in components in `src/components/ui`
- **Tailwind CSS v4** — styling + design tokens (`src/app/globals.css`)
- **Storybook 10** — auto-generated browse UI for every component
- **Cloudflare Pages** — hosts the static Storybook build

## Local development

```bash
npm install

# Browse the design system (Storybook)
npm run storybook          # http://localhost:6006

# Run the Next.js landing page
npm run dev                # http://localhost:3000
```

## Adding components

```bash
npx shadcn@latest add <component>
```

Then add a `*.stories.tsx` file next to it in `src/components/ui/` so it shows up in Storybook.

## Deploying to Cloudflare Pages

The deployable artifact is the **static Storybook build**.

### Option A — Git-connected (automatic on push)

In the Cloudflare dashboard, the **design-system** Pages project should use:

| Setting | Value |
| --- | --- |
| Build command | `npm run build-storybook` |
| Build output directory | `storybook-static` |
| Node version | `20` (set `NODE_VERSION=20` env var) |

Every push to `main` then redeploys automatically.

### Option B — Direct deploy from your machine

```bash
npm run deploy
```

This runs `build-storybook` and uploads `storybook-static/` via Wrangler.

## Project structure

```
src/
  app/                  # Next.js app (landing page + global styles/tokens)
  components/ui/        # shadcn/ui components + their *.stories.tsx
  lib/utils.ts          # cn() helper
.storybook/             # Storybook config (Vite-based Next framework)
```
