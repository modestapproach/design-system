import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf, Bookmark, Users, BadgeCheck } from "lucide-react";

const features = [
  { icon: Leaf, title: "Find Local Gems", desc: "Discover unique items near you." },
  { icon: Bookmark, title: "Save What You Love", desc: "Build collections of things that speak to you." },
  { icon: Users, title: "Share & Connect", desc: "Recommend finds with people you trust." },
  { icon: BadgeCheck, title: "Buy & Sell Mindfully", desc: "Give objects a second life and shop consciously." },
];

const palette = [
  "#F8F5EE", "#EFE6D5", "#E3D4BA", "#B4845F", "#5A3523", "#2D1C14",
  "#2F4A36", "#87977A", "#A45F2B", "#D6A84F", "#9E8DA7", "#5A5A35",
];

const components = [
  "Accordion", "Alert", "Alert Dialog", "Aspect Ratio", "Avatar", "Badge",
  "Breadcrumb", "Button", "Button Group", "Calendar", "Card", "Carousel",
  "Chart", "Checkbox", "Collapsible", "Combobox", "Command", "Context Menu",
  "Dialog", "Drawer", "Dropdown Menu", "Empty", "Field", "Hover Card", "Input",
  "Input Group", "Input OTP", "Item", "Kbd", "Label", "Menubar", "Native Select",
  "Navigation Menu", "Pagination", "Popover", "Progress", "Radio Group",
  "Resizable", "Scroll Area", "Select", "Separator", "Sheet", "Sidebar",
  "Skeleton", "Slider", "Sonner", "Spinner", "Switch", "Table", "Tabs",
  "Textarea", "Toggle", "Toggle Group", "Tooltip",
];

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      {/* Wordmark */}
      <div className="mb-10 flex items-center justify-between">
        <span className="font-serif text-2xl tracking-tight text-primary">DibsList</span>
        <Badge variant="secondary">Design System</Badge>
      </div>

      {/* Hero */}
      <section className="mb-12">
        <h1 className="font-serif text-5xl leading-[1.05] tracking-tight">
          The best things are already around you.
        </h1>
        <p className="mt-4 max-w-md text-muted-foreground">
          A warm, editorial component library built on shadcn/ui. Browse every
          component, variant, and state in Storybook.
        </p>
        <div className="mt-6 flex gap-2.5">
          <Button asChild>
            <a href="https://storybook.js.org" target="_blank" rel="noreferrer">Explore Components</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com/modestapproach/design-system" target="_blank" rel="noreferrer">View on GitHub</a>
          </Button>
        </div>
      </section>

      {/* Feature row — no cards, tight */}
      <section className="mb-12 grid grid-cols-2 gap-x-8 gap-y-6 border-y border-border py-7 sm:grid-cols-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex flex-col gap-1.5">
            <Icon className="size-4 text-primary" />
            <h3 className="text-sm font-medium">{title}</h3>
            <p className="text-xs leading-relaxed text-muted-foreground">{desc}</p>
          </div>
        ))}
      </section>

      {/* Components */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl tracking-tight">Components</h2>
        <p className="mb-3 text-sm text-muted-foreground">
          {components.length} components — run{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">npm run storybook</code>{" "}
          to explore.
        </p>
        <div className="flex flex-wrap gap-1.5">
          {components.map((c) => (
            <Badge key={c} variant="outline">{c}</Badge>
          ))}
        </div>
      </section>

      {/* Palette strip */}
      <section>
        <h2 className="mb-3 font-serif text-2xl tracking-tight">Palette</h2>
        <div className="grid grid-cols-6 overflow-hidden rounded-md border border-border md:grid-cols-12">
          {palette.map((hex) => (
            <div key={hex} className="flex flex-col">
              <div className="h-12" style={{ background: hex }} />
              <span className="px-1 py-1 text-center font-mono text-[9px] text-muted-foreground">{hex}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
