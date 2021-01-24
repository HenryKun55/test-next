import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import { Button } from '.'

describe('<Button />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Button />)
    expect(screen.getByText('button')).toHaveStyle({
      color: '#FFF',
    })
  })
})
