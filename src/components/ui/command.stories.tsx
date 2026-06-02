import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Settings, User, Search } from 'lucide-react'
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from './command'

const meta = {
  title: 'Components/Command',
  component: Command,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Command>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Command className="rounded-lg border w-80">
      <CommandInput placeholder="Type a command…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Search />
            Search
          </CommandItem>
          <CommandItem>
            <User />
            Profile
          </CommandItem>
          <CommandItem>
            <Settings />
            Settings
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="More">
          <CommandItem>Documentation</CommandItem>
          <CommandItem>Support</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}
