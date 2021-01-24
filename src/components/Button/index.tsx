import * as S from './styles'

export const Button = ({ text = 'button' }) => {
  return (
    <S.Box>
      <S.Text>{text}</S.Text>
    </S.Box>
  )
}
