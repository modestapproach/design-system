import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Input } from './input'
import { Label } from './label'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: { placeholder: 'Enter text…' },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="w-72">
      <Input {...args} />
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex w-72 flex-col gap-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex w-72 flex-col gap-4">
      <Input placeholder="Default" />
      <Input defaultValue="With a value" />
      <Input placeholder="Disabled" disabled />
      <Input placeholder="Invalid" aria-invalid />
    </div>
  ),
}
