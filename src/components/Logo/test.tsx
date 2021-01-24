import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'
import 'jest-styled-components'

import { Logo } from '.'

describe('<Logo />', () => {
  it('should render the logo by color default "green"', () => {
    renderWithTheme(<Logo />)

    expect(screen.getByLabelText('Mimoo').parentElement).toHaveStyle({
      color: '#00C3A3',
    })
  })

  it('should render the logo by color purple by pass in props "color" ', () => {
    renderWithTheme(<Logo color="purple" />)

    expect(screen.getByLabelText('Mimoo').parentElement).toHaveStyle({
      color: '#AB67FF',
    })
  })

  it('should render the logo by color default "green" with large size ', () => {
    renderWithTheme(<Logo size="small" />)

    expect(screen.getByLabelText('Mimoo').parentElement).toHaveStyle({
      width: '8.5rem',
    })
  })

  it('should render the logo by color default "green" with normal size ', () => {
    renderWithTheme(<Logo size="normal" />)

    expect(screen.getByLabelText('Mimoo').parentElement).toHaveStyle({
      width: '12.5rem',
    })
  })

  it('should render the logo by color default "green" with large size ', () => {
    renderWithTheme(<Logo size="large" />)

    expect(screen.getByLabelText('Mimoo').parentElement).toHaveStyle({
      width: '16.5rem',
    })
  })
})
