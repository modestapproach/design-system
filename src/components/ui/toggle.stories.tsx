import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Bold, Italic, Underline } from 'lucide-react'
import { Toggle } from './toggle'

const meta = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Toggle aria-label="Toggle bold">
      <Bold />
    </Toggle>
  ),
}

export const WithText: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Toggle aria-label="Toggle bold">
        <Bold />
        Bold
      </Toggle>
      <Toggle aria-label="Toggle italic">
        <Italic />
        Italic
      </Toggle>
      <Toggle aria-label="Toggle underline">
        <Underline />
        Underline
      </Toggle>
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Toggle variant="default" aria-label="Default variant">
        <Bold />
      </Toggle>
      <Toggle variant="outline" aria-label="Outline variant">
        <Bold />
      </Toggle>
      <Toggle variant="default" disabled aria-label="Disabled">
        <Bold />
      </Toggle>
    </div>
  ),
}
