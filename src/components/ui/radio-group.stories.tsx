import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { RadioGroup, RadioGroupItem } from './radio-group'
import { Label } from './label'

const meta = {
  title: 'Components/Radio Group',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one" className="w-48">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option one</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option two</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-three" id="option-three" />
        <Label htmlFor="option-three">Option three</Label>
      </div>
    </RadioGroup>
  ),
}

export const Subscription: Story = {
  render: () => (
    <RadioGroup defaultValue="pro" className="w-56">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="free" id="plan-free" />
        <Label htmlFor="plan-free">Free</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="pro" id="plan-pro" />
        <Label htmlFor="plan-pro">Pro</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="enterprise" id="plan-enterprise" />
        <Label htmlFor="plan-enterprise">Enterprise</Label>
      </div>
    </RadioGroup>
  ),
}

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="b" className="w-48">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="a" id="dis-a" disabled />
        <Label htmlFor="dis-a">Disabled A</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="b" id="dis-b" />
        <Label htmlFor="dis-b">Enabled B</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="c" id="dis-c" disabled />
        <Label htmlFor="dis-c">Disabled C</Label>
      </div>
    </RadioGroup>
  ),
}
