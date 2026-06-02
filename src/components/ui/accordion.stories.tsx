import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './accordion'

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: { type: 'single' },
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-80">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is a design system?</AccordionTrigger>
        <AccordionContent>
          A design system is a collection of reusable components and guidelines
          that help teams build consistent user interfaces.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Why use shadcn/ui?</AccordionTrigger>
        <AccordionContent>
          shadcn/ui provides accessible, composable components built on Radix UI
          primitives with Tailwind CSS styling.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it open source?</AccordionTrigger>
        <AccordionContent>
          Yes. The source code is freely available and you can copy components
          directly into your project.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const MultipleOpen: Story = {
  render: () => (
    <Accordion type="multiple" className="w-80">
      <AccordionItem value="item-1">
        <AccordionTrigger>Getting started</AccordionTrigger>
        <AccordionContent>
          Install the dependencies and follow the setup guide to get up and
          running quickly.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Configuration</AccordionTrigger>
        <AccordionContent>
          Customize tokens, themes, and component defaults to match your brand.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Deployment</AccordionTrigger>
        <AccordionContent>
          Build and deploy your application using your preferred hosting
          provider.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}
