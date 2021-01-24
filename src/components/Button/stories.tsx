import { withKnobs, text } from '@storybook/addon-knobs'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Button } from '.'

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
} as Meta

export const Basic: Story = () => <Button text={text('Text', 'Button')} />
