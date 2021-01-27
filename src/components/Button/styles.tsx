import styled, { css } from 'styled-components'

import { ButtonProps } from '.'

function getBackgroundColorBox(disabled: boolean, float: boolean) {
  if (disabled) {
    return 'lightGray'
  }
  if (float) {
    return 'white'
  }
  return 'green'
}

function getColorText(disabled: boolean, float: boolean) {
  if (disabled) {
    return 'darkGray'
  }
  if (float) {
    return 'alternativeGray'
  }
  return 'white'
}

export const Box = styled.div<Omit<ButtonProps, 'text'>>`
  ${({ theme, size, disabled = false, float = false }) => css`
    width: ${size ? theme.button[size] : theme.button.normal};
    height: 4rem;
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors[getBackgroundColorBox(disabled, float)]};
    box-shadow: 0 0.6rem 0.6rem 0 ${theme.colors.boxShadow};
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`

export const Text = styled.div<
  Pick<ButtonProps, 'color' | 'float' | 'disabled'>
>`
  ${({ theme, color, disabled = false, float = false }) => css`
    font-size: ${theme.font.normal};
    font-family: ${theme.font.family};
    color: ${color || getColorText(disabled, float)};
    font-weight: ${theme.font.bold};
  `}
`
