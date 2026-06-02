import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Textarea } from './textarea'
import { Label } from './label'

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: { placeholder: 'Type something…' },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="w-72">
      <Textarea {...args} />
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex w-72 flex-col gap-2">
      <Label htmlFor="bio">Bio</Label>
      <Textarea id="bio" placeholder="Tell us a little about yourself…" />
      <p className="text-sm text-muted-foreground">Max 200 characters.</p>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex w-72 flex-col gap-4">
      <Textarea placeholder="Default" />
      <Textarea defaultValue="With a value" />
      <Textarea placeholder="Disabled" disabled />
      <Textarea placeholder="Invalid" aria-invalid />
    </div>
  ),
}
