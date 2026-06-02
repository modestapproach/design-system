import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { toast } from 'sonner'
import { Toaster } from './sonner'
import { Button } from './button'

const meta = {
  title: 'Components/Sonner',
  component: Toaster,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-4">
      <Toaster />
      <Button
        variant="outline"
        onClick={() =>
          toast('Event has been created', {
            description: 'Sunday, December 03',
          })
        }
      >
        Show toast
      </Button>
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-3">
      <Toaster />
      <Button variant="outline" onClick={() => toast('Default notification')}>
        Default
      </Button>
      <Button variant="outline" onClick={() => toast.success('Changes saved successfully')}>
        Success
      </Button>
      <Button variant="outline" onClick={() => toast.error('Something went wrong')}>
        Error
      </Button>
      <Button variant="outline" onClick={() => toast.warning('Disk space is low')}>
        Warning
      </Button>
      <Button variant="outline" onClick={() => toast.info('New update available')}>
        Info
      </Button>
    </div>
  ),
}
