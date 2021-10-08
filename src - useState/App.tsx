import React, {useState} from 'react';
import './App.css';
import {Monitor} from "./Components/Monitor";
import {Button} from "./Components/Button";
import {Setter} from "./Components/Setter";

function App() {


  const [startCount, setStartCount] = useState(Number(localStorage.getItem('startCount')))
  const [maxCount, setMaxCount] = useState(Number(localStorage.getItem('maxCount')))
  const [count, setCount] = useState(startCount)
  const [error, setError] = useState(false)
  const [errorStartCount, setErrorStartCount] = useState(false)
  const [errorMaxCount, setErrorMaxCount] = useState(false)
  const [disabledButtonSet, setDisabledButtonSet] = useState(true)

  const addCount = () => {
    if (count < maxCount) setCount(count + 1)
  }

  const resetCount = () => {
    setCount(startCount)
  }

  const changeStartCount = (num: number) => {
    setStartCount(num)
    if (num < 0) {
      setErrorStartCount(true)
      setDisabledButtonSet(true)
      setError(true)
    } else if (num < maxCount) {
      setErrorStartCount(false)
      setErrorMaxCount(false)
      setDisabledButtonSet(false)
      setError(false)
    } else {
      setErrorStartCount(true)
      setErrorMaxCount(true)
      setDisabledButtonSet(true)
      setError(true)
    }
  }

  const changeMaxCount = (num: number) => {
    setMaxCount(num)
    if (num > startCount) {
      setErrorStartCount(false)
      setErrorMaxCount(false)
      setDisabledButtonSet(false)
      setError(false)
    } else {
      setErrorStartCount(true)
      setErrorMaxCount(true)
      setDisabledButtonSet(true)
      setError(true)
    }
  }

  const setValues = () => {
    setCount(startCount)
    setDisabledButtonSet(true)
    localStorage.setItem('startCount', startCount.toString())
    localStorage.setItem('maxCount', maxCount.toString())
  }

  const buttonIncDisabled = count === maxCount || !disabledButtonSet
  const buttonResetDisabled = count === startCount || !disabledButtonSet

  return (
    <div className="App">
      <div className='wrapper'>
        <Setter
          startCount={startCount}
          maxCount={maxCount}
          setStartCount={changeStartCount}
          setMaxCount={changeMaxCount}
          errorStartCount={errorStartCount}
          errorMaxCount={errorMaxCount}
        />
        <div className='button-wrapper'>
          <Button
            callBack={setValues}
            disabled={disabledButtonSet}
          >Set</Button>
        </div>
      </div>
      <div className='wrapper'>
        <Monitor
          count={count}
          maxCount={maxCount}
          error={error}
          disabledButtonSet={disabledButtonSet}
        />
        <div className='button-wrapper'>
          <Button
            callBack={addCount}
            disabled={buttonIncDisabled}
          >Inc</Button>
          <Button
            callBack={resetCount}
            disabled={buttonResetDisabled}
          >Reset</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
