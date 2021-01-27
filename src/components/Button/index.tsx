import theme from '../../styles/theme'
import * as S from './styles'

export type ButtonProps = {
  text?: string
  size?: 'normal' | 'large'
  disabled?: boolean
  color?: string
  float?: boolean
}

export const Button = ({
  text = 'button',
  size = 'normal',
  disabled = false,
  color = theme.colors.white,
  float = false,
}: ButtonProps) => {
  return (
    <S.Box size={size} disabled={disabled} color={color} float={float}>
      <S.Text disabled={disabled} color={color} float={float}>
        {text}
      </S.Text>
    </S.Box>
  )
}
