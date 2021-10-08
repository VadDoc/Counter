import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type PropsType = DefaultButtonPropsType & {
  callBack: () => void
  disabled?: boolean
}

export const Button = ({disabled, callBack, children}: PropsType) => {

  const onClick = () => {
    callBack()
  }
  return (
    <button
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}