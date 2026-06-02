import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Progress } from './progress'

const meta = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
  },
  args: { value: 60, className: 'w-64' },
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Values: Story = {
  render: () => (
    <div className="flex w-64 flex-col gap-4">
      <Progress value={10} />
      <Progress value={40} />
      <Progress value={70} />
      <Progress value={100} />
    </div>
  ),
}
