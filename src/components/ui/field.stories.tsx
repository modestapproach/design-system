import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSet,
} from './field'
import { Input } from './input'

const meta = {
  title: 'Components/Field',
  component: Field,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <FieldGroup className="w-80">
      <Field>
        <FieldLabel htmlFor="first-name">First name</FieldLabel>
        <Input id="first-name" placeholder="Jane" />
        <FieldDescription>Enter your legal first name.</FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="last-name">Last name</FieldLabel>
        <Input id="last-name" placeholder="Doe" />
        <FieldDescription>Enter your legal last name.</FieldDescription>
      </Field>
    </FieldGroup>
  ),
}

export const WithError: Story = {
  render: () => (
    <FieldGroup className="w-80">
      <Field data-invalid="true">
        <FieldLabel htmlFor="email-err">Email</FieldLabel>
        <Input id="email-err" type="email" defaultValue="not-an-email" aria-invalid />
        <FieldError>Please enter a valid email address.</FieldError>
      </Field>
    </FieldGroup>
  ),
}

export const FieldSetExample: Story = {
  render: () => (
    <FieldSet className="w-80">
      <FieldLegend>Account details</FieldLegend>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="username">Username</FieldLabel>
          <Input id="username" placeholder="janedoe" />
          <FieldDescription>Must be unique across the platform.</FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input id="password" type="password" placeholder="••••••••" />
          <FieldDescription>At least 8 characters.</FieldDescription>
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
}
