import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const components = [
  "Button",
  "Badge",
  "Card",
  "Input",
  "Label",
  "Alert",
  "Tabs",
  "Switch",
  "Checkbox",
  "Dialog",
  "Dropdown Menu",
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-8 px-6 py-16">
      <div className="flex flex-col gap-3">
        <Badge variant="secondary" className="w-fit">
          shadcn/ui · Storybook
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight">Design System</h1>
        <p className="text-lg text-muted-foreground">
          A component library built on shadcn/ui and Tailwind CSS. Browse every
          component, variant, and state in Storybook.
        </p>
        <div className="flex gap-3 pt-2">
          <Button asChild>
            <a href="https://storybook.js.org" target="_blank" rel="noreferrer">
              Open Storybook
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="https://github.com/modestapproach/design-system"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Components</CardTitle>
          <CardDescription>
            {components.length} components available — run{" "}
            <code className="font-mono text-xs">npm run storybook</code> to
            explore.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {components.map((c) => (
            <Badge key={c} variant="outline">
              {c}
            </Badge>
          ))}
        </CardContent>
      </Card>
    </main>
  );
}
