import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from './button-group'
import { Button } from './button'
import { ChevronRight, Plus, Search } from 'lucide-react'

const meta = {
  title: 'Components/Button Group',
  component: ButtonGroup,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Back</Button>
      <Button variant="outline">Forward</Button>
      <Button variant="outline">
        <ChevronRight />
      </Button>
    </ButtonGroup>
  ),
}

export const WithText: Story = {
  render: () => (
    <ButtonGroup>
      <ButtonGroupText>
        <Search />
      </ButtonGroupText>
      <Button variant="outline">Search</Button>
      <ButtonGroupSeparator />
      <Button variant="outline">
        <Plus />
        New
      </Button>
    </ButtonGroup>
  ),
}

export const Vertical: Story = {
  render: () => (
    <ButtonGroup orientation="vertical">
      <Button variant="outline">Top</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Bottom</Button>
    </ButtonGroup>
  ),
}
