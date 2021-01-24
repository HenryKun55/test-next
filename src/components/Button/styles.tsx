import styled, { css } from 'styled-components'

export const Box = styled.div`
  ${({ theme }) => css`
    width: 10rem;
    height: 4rem;
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.green};
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`

export const Text = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.normal};
    font-family: ${theme.font.family};
    color: ${theme.colors.white};
  `}
`
