import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Spinner } from './spinner'
import { Button } from './button'

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Spinner />,
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner className="size-3" />
      <Spinner className="size-4" />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
    </div>
  ),
}

export const InButton: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button disabled>
        <Spinner />
        Loading
      </Button>
      <Button variant="outline" disabled>
        <Spinner />
        Saving
      </Button>
    </div>
  ),
}
