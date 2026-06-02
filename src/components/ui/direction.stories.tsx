import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { DirectionProvider } from './direction'
import { Button } from './button'

const meta = {
  title: 'Components/Direction',
  component: DirectionProvider,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: { dir: 'ltr' },
} satisfies Meta<typeof DirectionProvider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <DirectionProvider dir="ltr">
      <div className="flex flex-col gap-3 rounded-lg border p-4">
        <p className="text-xs text-muted-foreground">Direction: ltr (left-to-right)</p>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">Cancel</Button>
          <Button size="sm">Confirm</Button>
        </div>
      </div>
    </DirectionProvider>
  ),
}

export const RightToLeft: Story = {
  render: () => (
    <DirectionProvider dir="rtl">
      <div className="flex flex-col gap-3 rounded-lg border p-4" dir="rtl">
        <p className="text-xs text-muted-foreground">Direction: rtl (right-to-left)</p>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">إلغاء</Button>
          <Button size="sm">تأكيد</Button>
        </div>
      </div>
    </DirectionProvider>
  ),
}
