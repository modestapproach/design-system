import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Checkbox } from './checkbox'
import { Label } from './label'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
}

export const Checked: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="subscribe" defaultChecked />
      <Label htmlFor="subscribe">Subscribe to newsletter</Label>
    </div>
  ),
}
