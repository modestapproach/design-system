import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { useState } from 'react'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'
import {
  Search, Mail, Bell, Plus, Check, ChevronRight, ChevronDown, User, Settings,
  Folder, Inbox, Bold, Italic, Underline, Star, Trash2, Calendar as CalendarIcon,
  Terminal, AlertTriangle, CreditCard, Copy, Sun, Moon, ChevronsUpDown,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from '@/components/ui/button-group'
import { Badge } from '@/components/ui/badge'
import { Toggle } from '@/components/ui/toggle'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Kbd, KbdGroup } from '@/components/ui/kbd'
import { Spinner } from '@/components/ui/spinner'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from '@/components/ui/input-group'
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from '@/components/ui/input-otp'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Switch } from '@/components/ui/switch'
import { Slider } from '@/components/ui/slider'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { NativeSelect, NativeSelectOption, NativeSelectOptGroup } from '@/components/ui/native-select'
import { Combobox, ComboboxInput, ComboboxContent, ComboboxList, ComboboxItem, ComboboxGroup, ComboboxLabel, ComboboxEmpty } from '@/components/ui/combobox'
import { Field, FieldLabel, FieldDescription, FieldGroup, FieldLegend, FieldSet } from '@/components/ui/field'
import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction,
} from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Item, ItemMedia, ItemContent, ItemTitle, ItemDescription, ItemActions, ItemGroup, ItemSeparator } from '@/components/ui/item'
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent } from '@/components/ui/empty'
import { Skeleton } from '@/components/ui/skeleton'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Calendar } from '@/components/ui/calendar'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import {
  Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import {
  NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import {
  Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from '@/components/ui/dialog'
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import {
  Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger,
} from '@/components/ui/sheet'
import {
  Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger,
} from '@/components/ui/drawer'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuTrigger,
} from '@/components/ui/context-menu'
import {
  Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger,
} from '@/components/ui/menubar'
import {
  Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator,
} from '@/components/ui/command'
import {
  ResizablePanelGroup, ResizablePanel, ResizableHandle,
} from '@/components/ui/resizable'
import {
  Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,
} from '@/components/ui/carousel'
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger,
} from '@/components/ui/sidebar'
import { DirectionProvider } from '@/components/ui/direction'
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from '@/components/ui/chart'
import { Toaster } from '@/components/ui/sonner'
import { toast } from 'sonner'

// ── shared data ──────────────────────────────────────────────────────────────
const chartData = [
  { month: 'Jan', saves: 42 }, { month: 'Feb', saves: 58 }, { month: 'Mar', saves: 49 },
  { month: 'Apr', saves: 73 }, { month: 'May', saves: 66 }, { month: 'Jun', saves: 91 },
]
const chartConfig = { saves: { label: 'Saves', color: 'var(--chart-1)' } } satisfies ChartConfig
const frameworks = [
  { value: 'next', label: 'Next.js' }, { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' }, { value: 'nuxt', label: 'Nuxt' },
]
const navItems = [
  { icon: Inbox, label: 'Inbox' }, { icon: Search, label: 'Search' },
  { icon: Bell, label: 'Notifications' }, { icon: Folder, label: 'Projects' },
]

// ── layout helpers ───────────────────────────────────────────────────────────
function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="font-serif text-2xl tracking-tight border-b border-border pb-2">
        <span className="text-muted-foreground/60 mr-2 text-base">{id}</span>
        {title}
      </h2>
      <div className="flex flex-col gap-8">{children}</div>
    </section>
  )
}

function Demo({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2.5">
      <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</span>
      <div className="flex flex-wrap items-start gap-3">{children}</div>
    </div>
  )
}

function KitchenSink() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <TooltipProvider>
      <Toaster />
      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <header className="border-b border-border px-6 py-4">
          <div className="mx-auto flex max-w-5xl items-center justify-between">
            <span className="font-serif text-2xl tracking-tight text-primary">DibsList</span>
            <Badge variant="secondary">Kitchen Sink · every component</Badge>
          </div>
        </header>

        <div className="mx-auto flex max-w-5xl flex-col gap-16 px-6 py-12">
          <div>
            <h1 className="font-serif text-4xl tracking-tight">Every component, one page</h1>
            <p className="mt-2 max-w-xl text-muted-foreground">
              All 55 components in the library, themed and composed together. Scroll to see actions, forms, overlays, navigation, data, feedback, and layout.
            </p>
          </div>

          {/* ACTIONS */}
          <Section id="01" title="Buttons & Actions">
            <Demo label="Button variants">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </Demo>
            <Demo label="Button sizes & icons">
              <Button size="xs">XS</Button>
              <Button size="sm">Small</Button>
              <Button>Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon" aria-label="Add"><Plus /></Button>
              <Button disabled><Spinner /> Loading</Button>
            </Demo>
            <Demo label="Button group">
              <ButtonGroup>
                <Button variant="outline">Day</Button>
                <Button variant="outline">Week</Button>
                <Button variant="outline">Month</Button>
              </ButtonGroup>
              <ButtonGroup>
                <ButtonGroupText>Qty</ButtonGroupText>
                <ButtonGroupSeparator />
                <Button variant="outline">−</Button>
                <Button variant="outline">+</Button>
              </ButtonGroup>
            </Demo>
            <Demo label="Toggle & toggle group">
              <Toggle aria-label="Bold"><Bold /></Toggle>
              <ToggleGroup type="multiple">
                <ToggleGroupItem value="bold" aria-label="Bold"><Bold /></ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Italic"><Italic /></ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Underline"><Underline /></ToggleGroupItem>
              </ToggleGroup>
            </Demo>
            <Demo label="Badges">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </Demo>
            <Demo label="Kbd & spinner">
              <KbdGroup><Kbd>⌘</Kbd><Kbd>K</Kbd></KbdGroup>
              <Kbd>Esc</Kbd>
              <Spinner />
            </Demo>
          </Section>

          {/* FORMS */}
          <Section id="02" title="Form Controls">
            <div className="grid gap-8 sm:grid-cols-2">
              <Demo label="Input + label">
                <div className="flex w-full flex-col gap-2">
                  <Label htmlFor="ks-email">Email</Label>
                  <Input id="ks-email" type="email" placeholder="you@example.com" />
                </div>
              </Demo>
              <Demo label="Input group">
                <InputGroup className="w-full">
                  <InputGroupAddon align="inline-start">
                    <InputGroupText><Search /></InputGroupText>
                  </InputGroupAddon>
                  <InputGroupInput placeholder="Search listings…" />
                </InputGroup>
              </Demo>
              <Demo label="Textarea">
                <Textarea placeholder="Tell us about this item…" className="w-full" />
              </Demo>
              <Demo label="Select">
                <Select defaultValue="furniture">
                  <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Categories</SelectLabel>
                      <SelectItem value="furniture">Furniture</SelectItem>
                      <SelectItem value="home">Home Goods</SelectItem>
                      <SelectItem value="plants">Plants</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Demo>
              <Demo label="Native select">
                <NativeSelect className="w-full" defaultValue="usd">
                  <NativeSelectOptGroup label="Currency">
                    <NativeSelectOption value="usd">USD</NativeSelectOption>
                    <NativeSelectOption value="eur">EUR</NativeSelectOption>
                    <NativeSelectOption value="gbp">GBP</NativeSelectOption>
                  </NativeSelectOptGroup>
                </NativeSelect>
              </Demo>
              <Demo label="Combobox">
                <Combobox>
                  <ComboboxInput placeholder="Select framework…" className="w-full" />
                  <ComboboxContent>
                    <ComboboxList>
                      <ComboboxEmpty>No results.</ComboboxEmpty>
                      <ComboboxGroup>
                        <ComboboxLabel>Frameworks</ComboboxLabel>
                        {frameworks.map((fw) => (
                          <ComboboxItem key={fw.value} value={fw.value}>{fw.label}</ComboboxItem>
                        ))}
                      </ComboboxGroup>
                    </ComboboxList>
                  </ComboboxContent>
                </Combobox>
              </Demo>
            </div>
            <Demo label="Checkbox, radio & switch">
              <div className="flex items-center gap-2"><Checkbox id="ks-terms" defaultChecked /><Label htmlFor="ks-terms">Accept terms</Label></div>
              <RadioGroup defaultValue="a" className="flex gap-4">
                <div className="flex items-center gap-2"><RadioGroupItem value="a" id="ks-a" /><Label htmlFor="ks-a">New</Label></div>
                <div className="flex items-center gap-2"><RadioGroupItem value="b" id="ks-b" /><Label htmlFor="ks-b">Used</Label></div>
              </RadioGroup>
              <div className="flex items-center gap-2"><Switch id="ks-pub" defaultChecked /><Label htmlFor="ks-pub">Public</Label></div>
            </Demo>
            <Demo label="Slider">
              <Slider defaultValue={[40]} max={100} step={1} className="w-72" />
            </Demo>
            <Demo label="Input OTP">
              <InputOTP maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} /><InputOTPSlot index={1} /><InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} /><InputOTPSlot index={4} /><InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </Demo>
            <Demo label="Field set">
              <FieldSet className="w-full max-w-sm">
                <FieldLegend>Listing details</FieldLegend>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="ks-title">Title</FieldLabel>
                    <Input id="ks-title" placeholder="Eames Lounge Chair" />
                    <FieldDescription>Keep it short and descriptive.</FieldDescription>
                  </Field>
                </FieldGroup>
              </FieldSet>
            </Demo>
          </Section>

          {/* OVERLAYS */}
          <Section id="03" title="Overlays & Menus">
            <Demo label="Dialogs, sheets, drawers, popovers">
              <Dialog>
                <DialogTrigger asChild><Button variant="outline">Dialog</Button></DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Edit listing</DialogTitle>
                    <DialogDescription>Make changes and save.</DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="ks-d">Name</Label>
                    <Input id="ks-d" defaultValue="Eames Lounge Chair" />
                  </div>
                  <DialogFooter>
                    <DialogClose asChild><Button variant="ghost">Cancel</Button></DialogClose>
                    <Button>Save</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <AlertDialog>
                <AlertDialogTrigger asChild><Button variant="outline">Alert dialog</Button></AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Delete this listing?</AlertDialogTitle>
                    <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Delete</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              <Sheet>
                <SheetTrigger asChild><Button variant="outline">Sheet</Button></SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                    <SheetDescription>Refine your search.</SheetDescription>
                  </SheetHeader>
                  <SheetFooter>
                    <SheetClose asChild><Button>Apply</Button></SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>

              <Drawer>
                <DrawerTrigger asChild><Button variant="outline">Drawer</Button></DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Quick view</DrawerTitle>
                    <DrawerDescription>A peek at this item.</DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                    <Button>Save</Button>
                    <DrawerClose asChild><Button variant="ghost">Close</Button></DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>

              <Popover>
                <PopoverTrigger asChild><Button variant="outline">Popover</Button></PopoverTrigger>
                <PopoverContent className="flex flex-col gap-2">
                  <Label htmlFor="ks-w">Width</Label>
                  <Input id="ks-w" defaultValue="100%" />
                </PopoverContent>
              </Popover>

              <HoverCard>
                <HoverCardTrigger asChild><Button variant="link">Hover card</Button></HoverCardTrigger>
                <HoverCardContent className="text-sm">
                  <div className="font-medium">@dibslist</div>
                  <p className="text-muted-foreground">Curated objects for a considered home.</p>
                </HoverCardContent>
              </HoverCard>

              <Tooltip>
                <TooltipTrigger asChild><Button variant="outline">Tooltip</Button></TooltipTrigger>
                <TooltipContent>Add to your collection</TooltipContent>
              </Tooltip>
            </Demo>

            <Demo label="Menus">
              <DropdownMenu>
                <DropdownMenuTrigger asChild><Button variant="outline">Dropdown <ChevronDown /></Button></DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem><User /> Profile <DropdownMenuShortcut>⇧P</DropdownMenuShortcut></DropdownMenuItem>
                  <DropdownMenuItem><Settings /> Settings</DropdownMenuItem>
                  <DropdownMenuItem variant="destructive"><Trash2 /> Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>File</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>New listing <MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Share</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Edit</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>Undo <MenubarShortcut>⌘Z</MenubarShortcut></MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>

              <ContextMenu>
                <ContextMenuTrigger className="flex h-9 items-center rounded-md border border-dashed px-4 text-sm text-muted-foreground">
                  Right click
                </ContextMenuTrigger>
                <ContextMenuContent>
                  <ContextMenuItem><Copy /> Copy <ContextMenuShortcut>⌘C</ContextMenuShortcut></ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem variant="destructive"><Trash2 /> Delete</ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            </Demo>

            <Demo label="Command">
              <Command className="w-full max-w-sm rounded-lg border">
                <CommandInput placeholder="Type a command…" />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <CommandItem><CalendarIcon /> Calendar</CommandItem>
                    <CommandItem><Search /> Search items</CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="Settings">
                    <CommandItem><CreditCard /> Billing</CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </Demo>
          </Section>

          {/* NAVIGATION */}
          <Section id="04" title="Navigation">
            <Demo label="Breadcrumb">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem><BreadcrumbLink href="#">Furniture</BreadcrumbLink></BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem><BreadcrumbPage>Eames Chair</BreadcrumbPage></BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </Demo>
            <Demo label="Navigation menu">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Browse</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[260px] gap-1 p-2">
                        <NavigationMenuLink href="#">Furniture</NavigationMenuLink>
                        <NavigationMenuLink href="#">Home Goods</NavigationMenuLink>
                        <NavigationMenuLink href="#">Plants</NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </Demo>
            <Demo label="Pagination">
              <Pagination>
                <PaginationContent>
                  <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
                  <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationEllipsis /></PaginationItem>
                  <PaginationItem><PaginationNext href="#" /></PaginationItem>
                </PaginationContent>
              </Pagination>
            </Demo>
            <Demo label="Tabs">
              <Tabs defaultValue="details" className="w-full max-w-md">
                <TabsList>
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="shipping">Shipping</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                <TabsContent value="details" className="pt-3 text-sm text-muted-foreground">Mid-century lounge chair in walnut.</TabsContent>
                <TabsContent value="shipping" className="pt-3 text-sm text-muted-foreground">Ships in 3–5 business days.</TabsContent>
                <TabsContent value="reviews" className="pt-3 text-sm text-muted-foreground">No reviews yet.</TabsContent>
              </Tabs>
            </Demo>
          </Section>

          {/* DATA */}
          <Section id="05" title="Data Display">
            <Demo label="Avatars">
              <Avatar><AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /><AvatarFallback>CN</AvatarFallback></Avatar>
              <Avatar><AvatarFallback>TD</AvatarFallback></Avatar>
            </Demo>
            <Demo label="Cards">
              <Card className="w-72">
                <CardHeader>
                  <CardTitle>Eames Lounge Chair</CardTitle>
                  <CardDescription>Herman Miller · Walnut</CardDescription>
                  <CardAction><Badge>Active</Badge></CardAction>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">A timeless mid-century piece in excellent condition.</CardContent>
                <CardFooter><Button className="w-full">View listing</Button></CardFooter>
              </Card>
            </Demo>
            <Demo label="Item list">
              <ItemGroup className="w-full max-w-sm">
                <Item variant="outline"><ItemMedia variant="icon"><Bell /></ItemMedia><ItemContent><ItemTitle>Notifications</ItemTitle><ItemDescription>3 new this week.</ItemDescription></ItemContent><ItemActions><Button size="xs" variant="ghost">View</Button></ItemActions></Item>
                <ItemSeparator />
                <Item variant="outline"><ItemMedia variant="icon"><Folder /></ItemMedia><ItemContent><ItemTitle>Collections</ItemTitle><ItemDescription>5 saved boards.</ItemDescription></ItemContent></Item>
              </ItemGroup>
            </Demo>
            <Demo label="Table">
              <Table>
                <TableCaption>Recent listings</TableCaption>
                <TableHeader>
                  <TableRow><TableHead>Item</TableHead><TableHead>Status</TableHead><TableHead className="text-right">Price</TableHead></TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow><TableCell>Eames Chair</TableCell><TableCell><Badge>Active</Badge></TableCell><TableCell className="text-right">$2,400</TableCell></TableRow>
                  <TableRow><TableCell>Brass Lamp</TableCell><TableCell><Badge variant="secondary">Sold</Badge></TableCell><TableCell className="text-right">$85</TableCell></TableRow>
                  <TableRow><TableCell>Monstera</TableCell><TableCell><Badge variant="outline">Draft</Badge></TableCell><TableCell className="text-right">$45</TableCell></TableRow>
                </TableBody>
              </Table>
            </Demo>
            <Demo label="Chart">
              <ChartContainer config={chartConfig} className="h-[200px] w-full">
                <BarChart data={chartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="saves" fill="var(--color-saves)" radius={6} />
                </BarChart>
              </ChartContainer>
            </Demo>
            <Demo label="Progress">
              <div className="flex w-full max-w-sm flex-col gap-3">
                <Progress value={32} />
                <Progress value={68} />
              </div>
            </Demo>
            <Demo label="Accordion">
              <Accordion type="single" collapsible className="w-full max-w-md">
                <AccordionItem value="a"><AccordionTrigger>Is it authentic?</AccordionTrigger><AccordionContent>Yes, every listing is verified.</AccordionContent></AccordionItem>
                <AccordionItem value="b"><AccordionTrigger>Do you offer returns?</AccordionTrigger><AccordionContent>Within 14 days of delivery.</AccordionContent></AccordionItem>
              </Accordion>
            </Demo>
            <Demo label="Collapsible">
              <Collapsible className="w-full max-w-md">
                <CollapsibleTrigger asChild><Button variant="outline">Toggle details <ChevronDown /></Button></CollapsibleTrigger>
                <CollapsibleContent className="mt-2 rounded-md border p-3 text-sm text-muted-foreground">Dimensions: 32″ × 30″ × 33″. Weight: 48 lbs.</CollapsibleContent>
              </Collapsible>
            </Demo>
          </Section>

          {/* FEEDBACK */}
          <Section id="06" title="Feedback & Status">
            <Demo label="Alerts">
              <Alert className="max-w-md"><Check /><AlertTitle>Saved</AlertTitle><AlertDescription>Your listing was published.</AlertDescription></Alert>
              <Alert variant="destructive" className="max-w-md"><AlertTriangle /><AlertTitle>Payment failed</AlertTitle><AlertDescription>Update your billing details.</AlertDescription></Alert>
            </Demo>
            <Demo label="Toast (Sonner)">
              <Button variant="outline" onClick={() => toast('Listing saved', { description: 'Added to your collection.' })}>Show toast</Button>
            </Demo>
            <Demo label="Skeleton">
              <div className="flex items-center gap-3">
                <Skeleton className="size-10 rounded-full" />
                <div className="flex flex-col gap-2"><Skeleton className="h-3 w-32" /><Skeleton className="h-3 w-24" /></div>
              </div>
            </Demo>
            <Demo label="Empty state">
              <Empty className="w-full max-w-sm rounded-lg border">
                <EmptyHeader>
                  <EmptyMedia variant="icon"><Inbox /></EmptyMedia>
                  <EmptyTitle>No saved items</EmptyTitle>
                  <EmptyDescription>Items you save will show up here.</EmptyDescription>
                </EmptyHeader>
                <EmptyContent><Button size="sm"><Plus /> Browse items</Button></EmptyContent>
              </Empty>
            </Demo>
          </Section>

          {/* LAYOUT */}
          <Section id="07" title="Layout & Media">
            <Demo label="Aspect ratio">
              <div className="w-64">
                <AspectRatio ratio={16 / 9}>
                  <div className="flex h-full w-full items-center justify-center rounded-md bg-muted text-sm text-muted-foreground">16 : 9</div>
                </AspectRatio>
              </div>
            </Demo>
            <Demo label="Separator">
              <div className="text-sm">
                <div>Curated objects</div>
                <Separator className="my-2" />
                <div className="flex h-5 items-center gap-3">
                  <span>Browse</span><Separator orientation="vertical" /><span>Nearby</span><Separator orientation="vertical" /><span>Saved</span>
                </div>
              </div>
            </Demo>
            <Demo label="Scroll area">
              <ScrollArea className="h-32 w-56 rounded-md border p-3 text-sm">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} className="py-1">Item {i + 1}</div>
                ))}
              </ScrollArea>
            </Demo>
            <Demo label="Resizable">
              <ResizablePanelGroup orientation="horizontal" className="h-32 max-w-md rounded-lg border">
                <ResizablePanel defaultSize={50}><div className="flex h-full items-center justify-center p-4 text-sm">Left</div></ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={50}><div className="flex h-full items-center justify-center p-4 text-sm">Right</div></ResizablePanel>
              </ResizablePanelGroup>
            </Demo>
            <Demo label="Carousel">
              <Carousel className="w-full max-w-xs">
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <CarouselItem key={i}>
                      <div className="flex aspect-square items-center justify-center rounded-md border p-6 font-serif text-3xl">{i + 1}</div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </Demo>
            <Demo label="Calendar">
              <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border w-fit" />
            </Demo>
            <Demo label="Sidebar">
              <div className="h-[280px] w-full overflow-hidden rounded-lg border">
                <SidebarProvider>
                  <Sidebar collapsible="none">
                    <SidebarContent>
                      <SidebarGroup>
                        <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                        <SidebarMenu>
                          {navItems.map(({ icon: Icon, label }) => (
                            <SidebarMenuItem key={label}>
                              <SidebarMenuButton><Icon /><span>{label}</span></SidebarMenuButton>
                            </SidebarMenuItem>
                          ))}
                        </SidebarMenu>
                      </SidebarGroup>
                    </SidebarContent>
                  </Sidebar>
                  <SidebarInset>
                    <div className="flex items-center gap-2 p-4"><SidebarTrigger /><span className="text-sm text-muted-foreground">Main content</span></div>
                  </SidebarInset>
                </SidebarProvider>
              </div>
            </Demo>
            <Demo label="Direction (RTL)">
              <DirectionProvider dir="rtl">
                <div dir="rtl" className="flex items-center gap-2 rounded-md border p-3">
                  <Button size="sm">حفظ</Button>
                  <Button size="sm" variant="outline">إلغاء</Button>
                </div>
              </DirectionProvider>
            </Demo>
          </Section>
        </div>
      </div>
    </TooltipProvider>
  )
}

const meta = {
  title: 'Examples/Kitchen Sink',
  component: KitchenSink,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof KitchenSink>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
