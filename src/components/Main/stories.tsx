import { Story, Meta } from '@storybook/react/types-6-0'
import { withKnobs, text } from '@storybook/addon-knobs'

import { Main } from '.'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs],
} as Meta

export const Basic: Story = () => (
  <Main
    title={text('Title', 'NextJS Boilerplate')}
    description={text(
      'Description',
      'TypeScript, ReactJS, NextJS and Styled Components'
    )}
  />
)
