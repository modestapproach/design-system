import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Inbox, Search, Bell, Folder, User } from 'lucide-react'
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarInset,
} from './sidebar'

const meta = {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

const navItems = [
  { icon: Inbox, label: 'Inbox' },
  { icon: Search, label: 'Search' },
  { icon: Bell, label: 'Notifications' },
  { icon: Folder, label: 'Projects' },
  { icon: User, label: 'Profile' },
]

export const Default: Story = {
  render: () => (
    <div className="h-[400px] w-full overflow-hidden rounded-lg border">
      <SidebarProvider>
        <Sidebar collapsible="none">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarMenu>
                {navItems.map(({ icon: Icon, label }) => (
                  <SidebarMenuItem key={label}>
                    <SidebarMenuButton>
                      <Icon />
                      <span>{label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <div className="flex items-center gap-2 p-4">
            <SidebarTrigger />
            <span className="text-sm text-muted-foreground">Main content</span>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  ),
}

export const Collapsible: Story = {
  render: () => (
    <div className="h-[400px] w-full overflow-hidden rounded-lg border">
      <SidebarProvider defaultOpen>
        <Sidebar collapsible="icon">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarMenu>
                {navItems.map(({ icon: Icon, label }) => (
                  <SidebarMenuItem key={label}>
                    <SidebarMenuButton tooltip={label}>
                      <Icon />
                      <span>{label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <div className="flex items-center gap-2 p-4">
            <SidebarTrigger />
            <span className="text-sm text-muted-foreground">
              Toggle the sidebar with the button.
            </span>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  ),
}
