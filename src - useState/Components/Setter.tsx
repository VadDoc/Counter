import React from 'react'
import {Input} from "./Input";

type PropsType = {
  startCount: number
  maxCount: number
  setStartCount: (num: number) => void
  setMaxCount: (num: number) => void
  errorStartCount: boolean
  errorMaxCount: boolean
}

export const Setter = ({startCount, maxCount, setStartCount, errorStartCount, errorMaxCount, setMaxCount}: PropsType) => {
  return (
    <div className={'setter'}>
      <div>
        <span>Max value:</span>
        <Input
          value={maxCount}
          error={errorMaxCount}
          callBack={setMaxCount}
        />
      </div>
      <div>
        <span>Start value:</span>
        <Input
          value={startCount}
          error={errorStartCount}
          callBack={setStartCount}
        />
      </div>
    </div>

  )
}