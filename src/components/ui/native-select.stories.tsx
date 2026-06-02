import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { NativeSelect, NativeSelectOption, NativeSelectOptGroup } from './native-select'
import { Label } from './label'

const meta = {
  title: 'Components/Native Select',
  component: NativeSelect,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof NativeSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <NativeSelect>
      <NativeSelectOption value="">Pick a fruit…</NativeSelectOption>
      <NativeSelectOption value="apple">Apple</NativeSelectOption>
      <NativeSelectOption value="banana">Banana</NativeSelectOption>
      <NativeSelectOption value="cherry">Cherry</NativeSelectOption>
      <NativeSelectOption value="mango">Mango</NativeSelectOption>
    </NativeSelect>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex w-72 flex-col gap-2">
      <Label htmlFor="country">Country</Label>
      <NativeSelect id="country">
        <NativeSelectOption value="">Select a country…</NativeSelectOption>
        <NativeSelectOption value="us">United States</NativeSelectOption>
        <NativeSelectOption value="gb">United Kingdom</NativeSelectOption>
        <NativeSelectOption value="de">Germany</NativeSelectOption>
        <NativeSelectOption value="jp">Japan</NativeSelectOption>
      </NativeSelect>
    </div>
  ),
}

export const WithOptGroups: Story = {
  render: () => (
    <div className="flex w-72 flex-col gap-2">
      <Label htmlFor="city">City</Label>
      <NativeSelect id="city">
        <NativeSelectOption value="">Select a city…</NativeSelectOption>
        <NativeSelectOptGroup label="Europe">
          <NativeSelectOption value="london">London</NativeSelectOption>
          <NativeSelectOption value="paris">Paris</NativeSelectOption>
          <NativeSelectOption value="berlin">Berlin</NativeSelectOption>
        </NativeSelectOptGroup>
        <NativeSelectOptGroup label="Asia">
          <NativeSelectOption value="tokyo">Tokyo</NativeSelectOption>
          <NativeSelectOption value="singapore">Singapore</NativeSelectOption>
        </NativeSelectOptGroup>
      </NativeSelect>
    </div>
  ),
}
