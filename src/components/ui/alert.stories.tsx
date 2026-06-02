import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Alert, AlertTitle, AlertDescription } from './alert'
import { CheckCircle2Icon, AlertTriangleIcon } from 'lucide-react'

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Alert className="max-w-md">
      <CheckCircle2Icon />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the CLI.
      </AlertDescription>
    </Alert>
  ),
}

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="max-w-md">
      <AlertTriangleIcon />
      <AlertTitle>Something went wrong</AlertTitle>
      <AlertDescription>
        Your changes could not be saved. Please try again.
      </AlertDescription>
    </Alert>
  ),
}
