import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Separator } from './separator'

const meta = {
  title: 'Components/Separator',
  component: Separator,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-64 space-y-4">
      <p className="text-sm font-medium">Section one</p>
      <Separator />
      <p className="text-sm text-muted-foreground">Section two</p>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex h-5 items-center gap-3 text-sm">
      <span>Blog</span>
      <Separator orientation="vertical" />
      <span>Docs</span>
      <Separator orientation="vertical" />
      <span>Source</span>
    </div>
  ),
}
