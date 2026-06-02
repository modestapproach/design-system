import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Switch } from './switch'
import { Label } from './label'

const meta = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="airplane" />
      <Label htmlFor="airplane">Airplane mode</Label>
    </div>
  ),
}

export const Checked: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="wifi" defaultChecked />
      <Label htmlFor="wifi">Wi-Fi</Label>
    </div>
  ),
}
