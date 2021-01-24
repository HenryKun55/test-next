import * as S from './styles'

export type LogoProps = {
  color?: 'green' | 'purple' | 'white'
  size?: 'small' | 'normal' | 'large'
}

export const Logo = ({ color = 'green', size = 'normal' }: LogoProps) => (
  <S.Wrapper color={color} size={size}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      fill="none"
      role="img"
      aria-label="Mimoo"
    >
      <g>
        <path
          fill="currentColor"
          className="prefix__st0"
          d="M67.58 197.81v7.78c3.41-6.01 12.15-9.83 19.52-9.83 9.69 0 16.66 3.96 20.07 10.65 5.32-7.65 11.88-10.65 21.03-10.65 12.83 0 25.12 7.51 25.12 25.94v43.96h-20.07v-39.32c0-6.42-3.41-11.47-10.79-11.47-7.37 0-11.33 5.6-11.33 11.61v39.18H90.66v-39.32c0-6.42-3.41-11.47-10.92-11.47-7.24 0-11.2 5.6-11.2 11.74v39.05H47.79V197.8h19.79zM174.21 164.9c6.83 0 12.29 5.46 12.29 12.15s-5.46 12.15-12.29 12.15c-6.55 0-12.01-5.46-12.01-12.15s5.46-12.15 12.01-12.15zm10.52 32.91v67.86h-20.75v-67.86h20.75zM215.85 197.81v7.78c3.41-6.01 12.15-9.83 19.52-9.83 9.69 0 16.66 3.96 20.07 10.65 5.32-7.65 11.88-10.65 21.03-10.65 12.83 0 25.12 7.51 25.12 25.94v43.96h-20.07v-39.32c0-6.42-3.41-11.47-10.79-11.47-7.37 0-11.33 5.6-11.33 11.61v39.18h-20.48v-39.32c0-6.42-3.41-11.47-10.92-11.47-7.24 0-11.2 5.6-11.2 11.74v39.05h-20.75V197.8h19.8zM379.42 231.67c0 21.03-15.7 36.04-36.04 36.04-20.21 0-36.04-15.02-36.04-36.04 0-21.03 15.84-35.91 36.04-35.91 20.33 0 36.04 14.88 36.04 35.91zm-20.76 0c0-11.47-7.37-16.79-15.29-16.79-7.78 0-15.29 5.32-15.29 16.79 0 11.33 7.51 16.93 15.29 16.93 7.92 0 15.29-5.47 15.29-16.93zM453.14 231.67c0 21.03-15.7 36.04-36.04 36.04-20.21 0-36.04-15.02-36.04-36.04 0-21.03 15.84-35.91 36.04-35.91 20.34 0 36.04 14.88 36.04 35.91zm-20.75 0c0-11.47-7.37-16.79-15.29-16.79-7.78 0-15.29 5.32-15.29 16.79 0 11.33 7.51 16.93 15.29 16.93 7.92 0 15.29-5.47 15.29-16.93z"
        />
        <path
          d="M419.9 277.07c-1.29 20.65-18.45 37-39.43 37-20.57 0-37.47-15.73-39.34-35.82"
          fill="none"
          stroke="currentColor"
          strokeWidth={25}
          strokeMiterlimit={10}
        />
      </g>
    </svg>
  </S.Wrapper>
)
