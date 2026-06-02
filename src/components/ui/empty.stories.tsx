import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Inbox } from 'lucide-react'
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from './empty'
import { Button } from './button'

const meta = {
  title: 'Components/Empty',
  component: Empty,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Empty>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Empty className="max-w-sm">
      <EmptyHeader>
        <EmptyMedia>
          <Inbox className="size-8 text-muted-foreground" />
        </EmptyMedia>
        <EmptyTitle>No items yet</EmptyTitle>
        <EmptyDescription>
          Your list is empty. Add your first item to get started.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">
          Add item
        </Button>
      </EmptyContent>
    </Empty>
  ),
}

export const IconVariant: Story = {
  render: () => (
    <Empty className="max-w-sm">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Inbox />
        </EmptyMedia>
        <EmptyTitle>No messages</EmptyTitle>
        <EmptyDescription>
          When you receive messages, they will appear here.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
}
