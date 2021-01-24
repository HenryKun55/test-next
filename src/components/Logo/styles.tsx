import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { LogoProps } from '.'

const wrapperSize = {
  small: () => css`
    width: 8.5rem;
    height: 3.5rem;
  `,
  normal: () => css`
    width: 12.5rem;
    height: 4.5rem;
  `,
  large: () => css`
    width: 16.5rem;
    height: 5.5rem;
  `,
  onHideSmile: () => css`
    ${media.lessThan('medium')`
      width: 12.5rem;
      height: 4.5rem;

      .smile {
        display: none;
      }
    `}
    ${media.greaterThan('medium')`
      width: 16.5rem;
      height: 5.5rem;
    `}
  `,
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size, onHideSmile }) => css`
    color: ${theme.colors[color!]};
    ${!!size && wrapperSize[size]}
    ${!!onHideSmile && wrapperSize.onHideSmile}
  `}
`
