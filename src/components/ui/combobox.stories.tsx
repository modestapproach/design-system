import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxEmpty,
} from './combobox'

const frameworks = [
  { value: 'next', label: 'Next.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
  { value: 'nuxt', label: 'Nuxt' },
  { value: 'svelte', label: 'SvelteKit' },
]

const meta = {
  title: 'Components/Combobox',
  component: Combobox,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Combobox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Combobox>
      <ComboboxInput placeholder="Select framework…" className="w-56" />
      <ComboboxContent>
        <ComboboxList>
          <ComboboxEmpty>No frameworks found.</ComboboxEmpty>
          <ComboboxGroup>
            <ComboboxLabel>Frameworks</ComboboxLabel>
            {frameworks.map((fw) => (
              <ComboboxItem key={fw.value} value={fw.value}>
                {fw.label}
              </ComboboxItem>
            ))}
          </ComboboxGroup>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
}

export const WithClear: Story = {
  render: () => (
    <Combobox defaultValue="next">
      <ComboboxInput
        placeholder="Select framework…"
        className="w-56"
        showClear
      />
      <ComboboxContent>
        <ComboboxList>
          <ComboboxEmpty>No frameworks found.</ComboboxEmpty>
          <ComboboxGroup>
            <ComboboxLabel>Frameworks</ComboboxLabel>
            {frameworks.map((fw) => (
              <ComboboxItem key={fw.value} value={fw.value}>
                {fw.label}
              </ComboboxItem>
            ))}
          </ComboboxGroup>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
}
