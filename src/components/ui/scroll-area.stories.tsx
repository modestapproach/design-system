import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ScrollArea } from './scroll-area'
import { Separator } from './separator'

const tags = Array.from({ length: 20 }, (_, i) => `Tag ${i + 1}`)

const meta = {
  title: 'Components/Scroll Area',
  component: ScrollArea,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-48 w-56 rounded-md border p-4">
      <div className="space-y-1">
        {tags.map((tag, index) => (
          <div key={tag}>
            <div className="text-sm py-1">{tag}</div>
            {index < tags.length - 1 && <Separator />}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}
