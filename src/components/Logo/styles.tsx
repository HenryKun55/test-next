import styled, { css } from 'styled-components'

import { LogoProps } from '.'

const wrapperSize = {
  small: () => css`
    width: 8.5rem;
    height: 8.5rem;
  `,
  normal: () => css`
    width: 12.5rem;
    height: 12.5rem;
  `,
  large: () => css`
    width: 16.5rem;
    height: 16.5rem;
  `,
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size }) => css`
    color: ${theme.colors[color!]};

    ${!!size && wrapperSize[size]}
  `}
`
