import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from './collapsible'
import { Button } from './button'
import { ChevronDown } from 'lucide-react'

const meta = {
  title: 'Components/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Collapsible>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Collapsible defaultOpen className="w-64 space-y-2">
      <CollapsibleTrigger asChild>
        <Button variant="outline" className="flex w-full items-center justify-between">
          Repositories
          <ChevronDown className="size-4" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-1">
        <div className="rounded-md border px-3 py-2 text-sm">design-system</div>
        <div className="rounded-md border px-3 py-2 text-sm">component-lib</div>
      </CollapsibleContent>
    </Collapsible>
  ),
}

export const Closed: Story = {
  render: () => (
    <Collapsible className="w-64 space-y-2">
      <CollapsibleTrigger asChild>
        <Button variant="outline" className="flex w-full items-center justify-between">
          Repositories
          <ChevronDown className="size-4" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-1">
        <div className="rounded-md border px-3 py-2 text-sm">design-system</div>
        <div className="rounded-md border px-3 py-2 text-sm">component-lib</div>
      </CollapsibleContent>
    </Collapsible>
  ),
}
