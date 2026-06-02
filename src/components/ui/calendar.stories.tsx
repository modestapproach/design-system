import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { useState } from 'react'
import { Calendar } from './calendar'

function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border w-fit"
    />
  )
}

const meta = {
  title: 'Components/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <CalendarDemo />,
}
