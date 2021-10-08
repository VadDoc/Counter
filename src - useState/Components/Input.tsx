import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type PropsType = DefaultInputPropsType & {
  value: number
  error: boolean
  callBack: (number: number) => void
}

export const Input = ({value, callBack, error}: PropsType) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    callBack(Number(e.currentTarget.value))
  }

  const className = `${error ? 'error-input' : ''}`

  return (
    <input
      className={className}
      type={'number'}
      value={value}
      onChange={onChange} />
  )
}