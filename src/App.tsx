import React, {useReducer} from 'react';
import './App.css';
import {Monitor} from "./Components/Monitor";
import {Button} from "./Components/Button";
import {Setter} from "./Components/Setter";
import {
  AddCountAC, ChangeMCIfNumberMoreSCAC, ChangeMCIfOthersAC,
  ChangeSCIfNumberLessMCAC,
  ChangeSCIfNumberLessZeroAC, ChangeSCIfOthersAC,
  ResetCountAC, SetValuesAC,
  StateReducer
} from "./Reducers/StateReducer";

export type StateType = {
  startCount: number,
  maxCount: number,
  count: number,
  error: boolean,
  errorStartCount: boolean,
  errorMaxCount: boolean,
  disabledButtonSet: boolean
}

function App() {
  const startCountLocalStorage = Number(localStorage.getItem('startCount'))
  const maxCountLocalStorage = Number(localStorage.getItem('maxCount'))

  const initState: StateType = {
    startCount: startCountLocalStorage,
    maxCount: maxCountLocalStorage,
    count: startCountLocalStorage,
    error: false,
    errorStartCount: false,
    errorMaxCount: false,
    disabledButtonSet: true
  }
  const [state, dispatchState] = useReducer(StateReducer, initState);

  const addCount = () => {
    if(state.count < state.maxCount) {
      dispatchState(AddCountAC())
    }
  }
  const resetCount = () => {
    dispatchState(ResetCountAC())
  }
  const changeStartCount = (num: number) => {
    if (num < 0) {
      dispatchState(ChangeSCIfNumberLessZeroAC(num))
    } else if (num < state.maxCount) {
      dispatchState(ChangeSCIfNumberLessMCAC(num))
    } else {
      dispatchState(ChangeSCIfOthersAC(num))
    }
  }
  const changeMaxCount = (num: number) => {
    if (num > state.startCount) {
      dispatchState(ChangeMCIfNumberMoreSCAC(num))
    } else {
      dispatchState(ChangeMCIfOthersAC(num))
    }
  }
  const setValues = () => {
    dispatchState(SetValuesAC())
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