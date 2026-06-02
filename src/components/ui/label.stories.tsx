import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Label } from './label'
import { Input } from './input'

const meta = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: { children: 'Label' },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithInput: Story = {
  render: () => (
    <div className="flex w-72 flex-col gap-2">
      <Label htmlFor="username">Username</Label>
      <Input id="username" placeholder="johndoe" />
    </div>
  ),
}

export const MultipleFields: Story = {
  render: () => (
    <div className="flex w-72 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="first-name">First name</Label>
        <Input id="first-name" placeholder="Jane" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="last-name">Last name</Label>
        <Input id="last-name" placeholder="Doe" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email-addr">Email</Label>
        <Input id="email-addr" type="email" placeholder="jane@example.com" />
      </div>
    </div>
  ),
}
