import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Slider } from './slider'

const meta = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: { defaultValue: [50], max: 100, step: 1, className: 'w-64' },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Range: Story = {
  render: () => (
    <Slider defaultValue={[25, 75]} max={100} step={1} className="w-64" />
  ),
}

export const Steps: Story = {
  render: () => (
    <div className="flex w-64 flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-muted-foreground">Step 10</span>
        <Slider defaultValue={[40]} max={100} step={10} className="w-64" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm text-muted-foreground">Disabled</span>
        <Slider defaultValue={[60]} max={100} step={1} className="w-64" disabled />
      </div>
    </div>
  ),
}
