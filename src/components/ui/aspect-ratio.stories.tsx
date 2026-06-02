import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { AspectRatio } from './aspect-ratio'

const meta = {
  title: 'Components/Aspect Ratio',
  component: AspectRatio,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof AspectRatio>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-80">
      <AspectRatio ratio={16 / 9}>
        <div className="flex h-full w-full items-center justify-center rounded-md bg-muted text-sm text-muted-foreground">
          16:9
        </div>
      </AspectRatio>
    </div>
  ),
}

export const Square: Story = {
  render: () => (
    <div className="w-48">
      <AspectRatio ratio={1}>
        <div className="flex h-full w-full items-center justify-center rounded-md bg-muted text-sm text-muted-foreground">
          1:1
        </div>
      </AspectRatio>
    </div>
  ),
}

export const Portrait: Story = {
  render: () => (
    <div className="w-48">
      <AspectRatio ratio={3 / 4}>
        <div className="flex h-full w-full items-center justify-center rounded-md bg-muted text-sm text-muted-foreground">
          3:4
        </div>
      </AspectRatio>
    </div>
  ),
}
