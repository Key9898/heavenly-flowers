import type { Meta, StoryObj } from '@storybook/react'
import HeroSection from './HeroSection'

const meta = {
  title: 'Components/Hero/HeroSection',
  component: HeroSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    onNavigate: { action: 'navigate' },
  },
} satisfies Meta<typeof HeroSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const WithNavigation: Story = {
  args: {
    onNavigate: (page: string) => console.log(`Navigate to: ${page}`),
  },
}
