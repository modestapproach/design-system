import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Search, Mail } from 'lucide-react'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from './input-group'

const meta = {
  title: 'Components/Input Group',
  component: InputGroup,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof InputGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex w-72 flex-col gap-4">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>
            <Search />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="Search…" />
      </InputGroup>
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="flex w-72 flex-col gap-4">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>
            <Search />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="Search…" />
      </InputGroup>

      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>
            <Mail />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="you@example.com" type="email" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="example.com" />
      </InputGroup>
    </div>
  ),
}
