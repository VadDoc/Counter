import React from 'react'

type PropsType = {
  count: number
  maxCount: number
  error: boolean
  disabledButtonSet: boolean
}

export const Monitor = ({count, maxCount, error, disabledButtonSet}: PropsType) => {
  const valueMonitor = (): JSX.Element => {
    if (disabledButtonSet) {
        if(error) {
          return <span className={'error'}>Incorrect value</span>
        } else if(count === maxCount) {
          return <span className={'red'}>{count}</span>
        } else {
          return <span>{count}</span>
        }
      } else {
        return <span className={'text'}>Enter values and press "Set"</span>
      }
  }

  return (
    <div className={'monitor'}>
      {valueMonitor()}
    </div>
  )
}