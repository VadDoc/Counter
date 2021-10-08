import React, {useState} from 'react';
import './App.css';
import {Monitor} from "./Components/Monitor";
import {Button} from "./Components/Button";
import {Setter} from "./Components/Setter";

function App() {
  type initStateType = {
    startCount: number,
    maxCount: number,
    count: number,
    error: boolean,
    errorStartCount: boolean,
    errorMaxCount: boolean,
    disabledButtonSet: boolean
  }

  const startCountLocalStorage = Number(localStorage.getItem('startCount'))
  const maxCountLocalStorage = Number(localStorage.getItem('maxCount'))

  const initState: initStateType = {
    startCount: startCountLocalStorage,
    maxCount: maxCountLocalStorage,
    count: startCountLocalStorage,
    error: false,
    errorStartCount: false,
    errorMaxCount: false,
    disabledButtonSet: true
  }
  const [state, setState] = useState(initState);

  const addCount = () => {
    if(state.count < state.maxCount) {
      setState({...state, count: state.count + 1})
    }
  }

  const resetCount = () => {
    setState({...state, count: startCountLocalStorage})
  }

  const changeStartCount = (num: number) => {
    if (num < 0) {
      setState({
        ...state,
        startCount: num,
        errorStartCount: true,
        disabledButtonSet: true,
        error: true
      })
    } else if (num < state.maxCount) {
      setState({
        ...state,
        startCount: num,
        errorStartCount: false,
        errorMaxCount: false,
        disabledButtonSet: false,
        error: false
      })
    } else {
      setState({
        ...state,
        startCount: num,
        errorStartCount: true,
        errorMaxCount: true,
        disabledButtonSet: true,
        error: true
      })
    }
  }

  const changeMaxCount = (num: number) => {
    if (num > state.startCount) {
      setState({
        ...state,
        maxCount: num,
        errorStartCount: false,
        errorMaxCount: false,
        disabledButtonSet: false,
        error: false
      })
    } else {
      setState({
        ...state,
        maxCount: num,
        errorStartCount: true,
        errorMaxCount: true,
        disabledButtonSet: true,
        error: true
      })
    }
  }
  const setValues = () => {
    setState({
      ...state,
      count: startCountLocalStorage,
      disabledButtonSet: true
    })
    localStorage.setItem('startCount', state.startCount.toString())
    localStorage.setItem('maxCount', state.maxCount.toString())
  }

  const buttonIncDisabled = state.count === state.maxCount || !state.disabledButtonSet
  const buttonResetDisabled = state.count === state.startCount || !state.disabledButtonSet

  return (
    <div className="App">
      <div className='wrapper'>
        <Setter
          startCount={state.startCount}
          maxCount={state.maxCount}
          setStartCount={changeStartCount}
          setMaxCount={changeMaxCount}
          errorStartCount={state.errorStartCount}
          errorMaxCount={state.errorMaxCount}
        />
        <div className='button-wrapper'>
          <Button
            callBack={setValues}
            disabled={state.disabledButtonSet}
          >Set</Button>
        </div>
      </div>
      <div className='wrapper'>
        <Monitor
          count={state.count}
          maxCount={state.maxCount}
          error={state.error}
          disabledButtonSet={state.disabledButtonSet}
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