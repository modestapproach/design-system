import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'
import {
  ArrowUpRight,
  ArrowDownRight,
  Bell,
  Plus,
  Search,
  Heart,
  Package,
  Users,
  Tag,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardAction,
} from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { Progress } from '@/components/ui/progress'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart'

const stats = [
  { label: 'Saved Items', value: '248', delta: '+12%', up: true, icon: Heart },
  { label: 'Active Listings', value: '12', delta: '+2', up: true, icon: Package },
  { label: 'Sold (30d)', value: '5', delta: '-1', up: false, icon: Tag },
  { label: 'Followers', value: '1,204', delta: '+8%', up: true, icon: Users },
]

const chartData = [
  { month: 'Jan', saves: 42 },
  { month: 'Feb', saves: 58 },
  { month: 'Mar', saves: 49 },
  { month: 'Apr', saves: 73 },
  { month: 'May', saves: 66 },
  { month: 'Jun', saves: 91 },
]

const chartConfig = {
  saves: { label: 'Saves', color: 'var(--chart-1)' },
} satisfies ChartConfig

const categories = [
  { name: 'Furniture', pct: 82 },
  { name: 'Home Goods', pct: 64 },
  { name: 'Plants & Botanicals', pct: 47 },
  { name: 'Tech & Audio', pct: 31 },
]

const listings = [
  { name: 'Eames Lounge Chair', category: 'Furniture', status: 'Active', price: '$2,400' },
  { name: 'Braun SK4 Record Player', category: 'Tech & Audio', status: 'Sold', price: '$1,150' },
  { name: 'Monstera Deliciosa', category: 'Plants', status: 'Active', price: '$45' },
  { name: 'Ceramic Dinnerware Set', category: 'Home Goods', status: 'Draft', price: '$120' },
  { name: 'Vintage Brass Lamp', category: 'Home Goods', status: 'Active', price: '$85' },
]

const statusVariant: Record<string, 'default' | 'secondary' | 'outline'> = {
  Active: 'default',
  Sold: 'secondary',
  Draft: 'outline',
}

function Dashboard() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <header className="flex items-center justify-between border-b border-border px-6 py-3">
        <div className="flex items-center gap-6">
          <span className="font-serif text-xl tracking-tight text-primary">DibsList</span>
          <nav className="hidden items-center gap-4 text-sm text-muted-foreground sm:flex">
            <span className="font-medium text-foreground">Dashboard</span>
            <span>Listings</span>
            <span>Collections</span>
            <span>Messages</span>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon-sm" aria-label="Search">
            <Search />
          </Button>
          <Button variant="ghost" size="icon-sm" aria-label="Notifications">
            <Bell />
          </Button>
          <Avatar className="size-7">
            <AvatarImage src="https://github.com/shadcn.png" alt="You" />
            <AvatarFallback>TD</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-6">
        {/* Page header */}
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="font-serif text-3xl tracking-tight">Overview</h1>
            <p className="text-sm text-muted-foreground">
              Welcome back — here&apos;s how your shop is doing.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Select defaultValue="30d">
              <SelectTrigger className="w-36">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
              </SelectContent>
            </Select>
            <Button>
              <Plus />
              New listing
            </Button>
          </div>
        </div>

        {/* Stat cards */}
        <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map(({ label, value, delta, up, icon: Icon }) => (
            <Card key={label} size="sm">
              <CardHeader>
                <CardDescription className="flex items-center gap-1.5">
                  <Icon className="size-3.5" />
                  {label}
                </CardDescription>
                <CardTitle className="font-serif text-3xl">{value}</CardTitle>
                <CardAction>
                  <Badge variant={up ? 'default' : 'secondary'}>
                    {up ? <ArrowUpRight /> : <ArrowDownRight />}
                    {delta}
                  </Badge>
                </CardAction>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Chart + categories */}
        <div className="mb-6 grid gap-4 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Saves over time</CardTitle>
              <CardDescription>Monthly saves across your listings.</CardDescription>
              <CardAction>
                <Tabs defaultValue="saves">
                  <TabsList>
                    <TabsTrigger value="saves">Saves</TabsTrigger>
                    <TabsTrigger value="views">Views</TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardAction>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[220px] w-full">
                <BarChart data={chartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="saves" fill="var(--color-saves)" radius={6} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top categories</CardTitle>
              <CardDescription>Where your saves come from.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              {categories.map(({ name, pct }) => (
                <div key={name} className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span>{name}</span>
                    <span className="text-muted-foreground">{pct}%</span>
                  </div>
                  <Progress value={pct} />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recent listings table */}
        <Card>
          <CardHeader>
            <CardTitle>Recent listings</CardTitle>
            <CardDescription>Your most recently updated items.</CardDescription>
            <CardAction>
              <Button variant="outline" size="sm">
                View all
              </Button>
            </CardAction>
          </CardHeader>
          <Separator />
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Item</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {listings.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell className="font-medium">{row.name}</TableCell>
                    <TableCell className="text-muted-foreground">{row.category}</TableCell>
                    <TableCell>
                      <Badge variant={statusVariant[row.status]}>{row.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right font-medium">{row.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

const meta = {
  title: 'Examples/Dashboard',
  component: Dashboard,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Dashboard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
