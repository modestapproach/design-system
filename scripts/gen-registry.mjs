// Generates registry.json for the DibsList design system from the components
// in src/components/ui. Run with: node scripts/gen-registry.mjs
//
// Each component becomes a `registry:ui` item. Imports are parsed to derive:
//   - npm `dependencies`        (bare specifiers)
//   - `registryDependencies`    (other items in THIS registry, as absolute
//                                 URLs so consumers pull our versions, not the
//                                 public shadcn registry)
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

// Where the built registry JSON will be hosted (served by the Cloudflare
// Worker from storybook-static/r). Change this if you host elsewhere.
const BASE_URL = "https://design-system.theodoreyd.workers.dev";

const UI_DIR = "src/components/ui";

const titleCase = (name) =>
  name.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");

// Resolve a bare npm specifier to its package name (handles scopes + subpaths).
function pkgName(spec) {
  if (spec.startsWith("@")) return spec.split("/").slice(0, 2).join("/");
  return spec.split("/")[0];
}

function parseImports(src) {
  const specs = new Set();
  const re = /(?:from\s+|import\s+)["']([^"']+)["']/g;
  let m;
  while ((m = re.exec(src))) specs.add(m[1]);
  return [...specs];
}

const files = readdirSync(UI_DIR)
  .filter((f) => f.endsWith(".tsx") && !f.endsWith(".stories.tsx"))
  .map((f) => f.replace(/\.tsx$/, ""))
  .sort();

const IGNORE = new Set(["react", "react-dom", "react/jsx-runtime"]);

const componentItems = files.map((name) => {
  const src = readFileSync(join(UI_DIR, `${name}.tsx`), "utf8");
  const deps = new Set();
  const registryDeps = new Set();

  for (const spec of parseImports(src)) {
    if (spec.startsWith("@/components/ui/")) {
      const dep = spec.slice("@/components/ui/".length);
      if (dep !== name) registryDeps.add(`${BASE_URL}/r/${dep}.json`);
    } else if (spec.startsWith("@/hooks/")) {
      registryDeps.add(`${BASE_URL}/r/${spec.slice("@/hooks/".length)}.json`);
    } else if (spec.startsWith("@/lib/")) {
      // cn() lives in lib/utils — every shadcn project already has it via `init`,
      // so we don't force-republish it.
    } else if (spec.startsWith("@/") || spec.startsWith(".")) {
      // other internal path — ignore
    } else if (!IGNORE.has(spec)) {
      deps.add(pkgName(spec));
    }
  }

  return {
    name,
    type: "registry:ui",
    title: titleCase(name),
    description: `The ${titleCase(name)} component from the DibsList design system.`,
    ...(deps.size ? { dependencies: [...deps].sort() } : {}),
    ...(registryDeps.size ? { registryDependencies: [...registryDeps].sort() } : {}),
    files: [
      { path: `${UI_DIR}/${name}.tsx`, type: "registry:ui" },
    ],
  };
});

// Non-component items ---------------------------------------------------------
const useMobile = {
  name: "use-mobile",
  type: "registry:hook",
  title: "use-mobile",
  description: "Hook that tracks whether the viewport is mobile-sized.",
  files: [{ path: "src/hooks/use-mobile.ts", type: "registry:hook" }],
};

// Vetiver — DibsList's signature theme (warm palette + Geist type). Apply with:
//   npx shadcn@latest add @dibslist/vetiver
// Named for the warm, woody-green scent; future themes can use other plants.
const vetiver = {
  name: "vetiver",
  type: "registry:style",
  title: "Vetiver",
  description:
    "Vetiver — DibsList's warm, earthy signature theme: cream, espresso, sage, and terracotta with the Geist typeface. Named for the grounding, woody-green scent it evokes.",
  // Fonts: prefer the next/font variable that create-next-app sets up
  // (--font-geist-sans / --font-geist-mono), falling back to a loaded "Geist"
  // family, then system fonts. This avoids a brittle CSS @import and makes the
  // theme turnkey for Next projects.
  cssVars: {
    theme: {
      "font-sans": "var(--font-geist-sans), Geist, ui-sans-serif, system-ui, sans-serif",
      "font-serif": "var(--font-geist-sans), Geist, ui-sans-serif, system-ui, sans-serif",
      "font-mono": "var(--font-geist-mono), Geist Mono, ui-monospace, SF Mono, Menlo, monospace",
    },
    light: {
      radius: "0.4rem",
      background: "#f8f5ee",
      foreground: "#2d1c14",
      card: "#fffdf8",
      "card-foreground": "#2d1c14",
      popover: "#fffdf8",
      "popover-foreground": "#2d1c14",
      primary: "#2f4a36",
      "primary-foreground": "#f8f5ee",
      secondary: "#efe6d5",
      "secondary-foreground": "#5a3523",
      muted: "#efe6d5",
      "muted-foreground": "#6e6155",
      accent: "#e3d4ba",
      "accent-foreground": "#5a3523",
      destructive: "#a4432b",
      border: "#e3d4ba",
      input: "#e3d4ba",
      ring: "#87977a",
      "chart-1": "#2f4a36",
      "chart-2": "#87977a",
      "chart-3": "#a45f2b",
      "chart-4": "#d6a84f",
      "chart-5": "#9e8da7",
      sidebar: "#efe6d5",
      "sidebar-foreground": "#2d1c14",
      "sidebar-primary": "#2f4a36",
      "sidebar-primary-foreground": "#f8f5ee",
      "sidebar-accent": "#e3d4ba",
      "sidebar-accent-foreground": "#5a3523",
      "sidebar-border": "#e3d4ba",
      "sidebar-ring": "#87977a",
    },
    dark: {
      background: "#2d1c14",
      foreground: "#f8f5ee",
      card: "#3a2a1f",
      "card-foreground": "#f8f5ee",
      popover: "#3a2a1f",
      "popover-foreground": "#f8f5ee",
      primary: "#87977a",
      "primary-foreground": "#2d1c14",
      secondary: "#44342a",
      "secondary-foreground": "#f8f5ee",
      muted: "#44342a",
      "muted-foreground": "#c2b0a0",
      accent: "#5a3523",
      "accent-foreground": "#f8f5ee",
      destructive: "#c4623f",
      border: "#ffffff1a",
      input: "#ffffff26",
      ring: "#87977a",
    },
  },
};

const registry = {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: "dibslist",
  homepage: BASE_URL,
  items: [vetiver, useMobile, ...componentItems],
};

writeFileSync("registry.json", JSON.stringify(registry, null, 2) + "\n");
console.log(`Wrote registry.json with ${registry.items.length} items (${componentItems.length} components).`);
