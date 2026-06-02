import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Inbox, Bell, Folder, User } from 'lucide-react'
import {
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemGroup,
  ItemSeparator,
} from './item'
import { Button } from './button'

const meta = {
  title: 'Components/Item',
  component: Item,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Item>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Item className="w-80" variant="outline">
      <ItemMedia variant="icon">
        <Inbox />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Inbox</ItemTitle>
        <ItemDescription>You have 3 unread messages.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button size="xs" variant="ghost">View</Button>
      </ItemActions>
    </Item>
  ),
}

export const Group: Story = {
  render: () => (
    <ItemGroup className="w-80">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <Bell />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Notifications</ItemTitle>
          <ItemDescription>Manage your notification preferences.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline">
        <ItemMedia variant="icon">
          <Folder />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Projects</ItemTitle>
          <ItemDescription>Browse all your active projects.</ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item variant="outline">
        <ItemMedia variant="icon">
          <User />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Profile</ItemTitle>
          <ItemDescription>Update your personal information.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="xs" variant="outline">Edit</Button>
        </ItemActions>
      </Item>
    </ItemGroup>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-3">
      <Item variant="outline" size="default">
        <ItemMedia variant="icon"><Inbox /></ItemMedia>
        <ItemContent><ItemTitle>Default size</ItemTitle></ItemContent>
      </Item>
      <Item variant="outline" size="sm">
        <ItemMedia variant="icon"><Inbox /></ItemMedia>
        <ItemContent><ItemTitle>Small size</ItemTitle></ItemContent>
      </Item>
      <Item variant="outline" size="xs">
        <ItemMedia variant="icon"><Inbox /></ItemMedia>
        <ItemContent><ItemTitle>Extra small size</ItemTitle></ItemContent>
      </Item>
    </div>
  ),
}
