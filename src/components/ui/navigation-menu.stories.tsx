import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from './navigation-menu'

const meta = {
  title: 'Components/Navigation Menu',
  component: NavigationMenu,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof NavigationMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-32 items-start justify-start pt-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[300px] gap-2 p-3">
                <NavigationMenuLink href="#">
                  <div>
                    <div className="text-sm font-medium">Introduction</div>
                    <div className="text-xs text-muted-foreground">
                      Overview of the design system and its components.
                    </div>
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink href="#">
                  <div>
                    <div className="text-sm font-medium">Installation</div>
                    <div className="text-xs text-muted-foreground">
                      How to install and configure in your project.
                    </div>
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink href="#">
                  <div>
                    <div className="text-sm font-medium">Theming</div>
                    <div className="text-xs text-muted-foreground">
                      Customise colours, typography, and spacing.
                    </div>
                  </div>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
              Components
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  ),
}
