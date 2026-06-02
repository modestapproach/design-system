import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Kbd, KbdGroup } from './kbd'

const meta = {
  title: 'Components/Kbd',
  component: Kbd,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Kbd>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Kbd>K</Kbd>,
}

export const Combination: Story = {
  render: () => (
    <KbdGroup>
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
  ),
}

export const CommonShortcuts: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-3">
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <span className="w-28">Open search</span>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </div>
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <span className="w-28">Save</span>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>S</Kbd>
        </KbdGroup>
      </div>
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <span className="w-28">Copy</span>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>C</Kbd>
        </KbdGroup>
      </div>
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <span className="w-28">Escape</span>
        <Kbd>Esc</Kbd>
      </div>
    </div>
  ),
}
