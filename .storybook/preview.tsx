import type { Preview } from '@storybook/nextjs-vite'
import '../src/app/globals.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
    options: {
      storySort: { order: ['Overview', 'Components', '*'] },
    },
    backgrounds: {
      default: 'app',
      values: [
        { name: 'app', value: 'var(--background, #ffffff)' },
        { name: 'white', value: '#ffffff' },
        { name: 'dark', value: '#0a0a0a' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className="font-sans p-5 bg-background text-foreground">
        <Story />
      </div>
    ),
  ],
}

export default preview
