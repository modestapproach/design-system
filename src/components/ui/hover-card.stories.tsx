import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { HoverCard, HoverCardTrigger, HoverCardContent } from './hover-card'
import { Button } from './button'
import { User } from 'lucide-react'

const meta = {
  title: 'Components/Hover Card',
  component: HoverCard,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof HoverCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@ada_lovelace</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted">
            <User className="size-5 text-muted-foreground" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium">Ada Lovelace</p>
            <p className="text-xs text-muted-foreground">
              Mathematician and writer. First computer programmer.
            </p>
            <p className="text-xs text-muted-foreground">Joined December 1815</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const UserProfile: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@charles_babbage</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted">
            <User className="size-5 text-muted-foreground" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium">Charles Babbage</p>
            <p className="text-xs text-muted-foreground">
              Mathematician and inventor. Originated the concept of a programmable computer.
            </p>
            <p className="text-xs text-muted-foreground">Joined December 1791</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}
