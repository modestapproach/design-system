import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Popover, PopoverTrigger, PopoverContent } from './popover'
import { Button } from './button'
import { Label } from './label'
import { Input } from './input'
import { Settings } from 'lucide-react'

const meta = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium">Dimensions</p>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="width">Width</Label>
            <Input id="width" defaultValue="100%" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="height">Height</Label>
            <Input id="height" defaultValue="25px" />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon">
          <Settings />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium">Settings</p>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="name">Display name</Label>
            <Input id="name" defaultValue="Ada Lovelace" />
          </div>
          <Button size="sm">Save</Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
}
