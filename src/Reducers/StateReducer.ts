import {StateType} from "../App";
const ADD_COUNT = 'ADD_COUNT'
const RESET_COUNT = 'RESET_COUNT'
const CHANGE_SC_IF_NUMBER_LESS_ZERO = 'CHANGE_SC_IF_NUMBER_LESS_ZERO'
const CHANGE_SC_IF_NUMBER_LESS_MC = 'CHANGE_SC_IF_NUMBER_LESS_MC'
const CHANGE_SC_IF_OTHERS = 'CHANGE_SC_IF_OTHERS'
const CHANGE_MC_IF_NUMBER_MORE_SC = 'CHANGE_MC_IF_NUMBER_MORE_SC'
const CHANGE_MC_IF_OTHERS = 'CHANGE_MC_IF_OTHERS'
const SET_VALUES = 'SET_VALUES'

export const StateReducer = (state: StateType, action: ActionsType) => {
  switch (action.type) {
    case ADD_COUNT: {
      return {
        ...state,
        count: state.count + 1
      }
    }
    case RESET_COUNT: {
      return {
        ...state,
        count: state.startCount
      }
    }
    case CHANGE_SC_IF_NUMBER_LESS_ZERO: {
      return {
        ...state,
        startCount: action.num,
        errorStartCount: true,
        disabledButtonSet: true,
        error: true
      }
    }
    case CHANGE_SC_IF_NUMBER_LESS_MC: {
      return {
        ...state,
        startCount: action.num,
        errorStartCount: false,
        errorMaxCount: false,
        disabledButtonSet: false,
        error: false
      }
    }
    case CHANGE_SC_IF_OTHERS: {
      return {
        ...state,
        startCount: action.num,
        errorStartCount: true,
        errorMaxCount: true,
        disabledButtonSet: true,
        error: true
      }
    }
    case CHANGE_MC_IF_NUMBER_MORE_SC: {
      return {
        ...state,
        maxCount: action.num,
        errorStartCount: false,
        errorMaxCount: false,
        disabledButtonSet: false,
        error: false
      }
    }
    case CHANGE_MC_IF_OTHERS: {
      return {
        ...state,
        maxCount: action.num,
        errorStartCount: true,
        errorMaxCount: true,
        disabledButtonSet: true,
        error: true
      }
    }
    case SET_VALUES: {
      return {
          ...state,
          count: state.startCount,
          disabledButtonSet: true
      }
    }
  }
}

type ActionsType =
  AddCountActionType
  | ResetCountActionType
  | ChangeSCIfNumberLessZeroActionType
  | ChangeSCIfNumberLessMCActionType
  | ChangeSCIfOthersActionType
  | ChangeMCIfNumberMoreSCActionType
  | ChangeMCIfOthersActionType
  | SetValuesActionType
type AddCountActionType = ReturnType<typeof AddCountAC>
type ResetCountActionType = ReturnType<typeof ResetCountAC>
type ChangeSCIfNumberLessZeroActionType = ReturnType<typeof ChangeSCIfNumberLessZeroAC>
type ChangeSCIfNumberLessMCActionType = ReturnType<typeof ChangeSCIfNumberLessMCAC>
type ChangeSCIfOthersActionType = ReturnType<typeof ChangeSCIfOthersAC>
type ChangeMCIfNumberMoreSCActionType = ReturnType<typeof ChangeMCIfNumberMoreSCAC>
type ChangeMCIfOthersActionType = ReturnType<typeof ChangeMCIfOthersAC>
type SetValuesActionType = ReturnType<typeof SetValuesAC>

export const AddCountAC = () => {
  return {
    type: ADD_COUNT
  } as const
}
export const ResetCountAC = () => {
  return {
    type: RESET_COUNT
  } as const
}
export const ChangeSCIfNumberLessZeroAC = (num: number) => {
  return {
    type: CHANGE_SC_IF_NUMBER_LESS_ZERO, num
  } as const
}
export const ChangeSCIfNumberLessMCAC = (num: number) => {
  return {
    type: CHANGE_SC_IF_NUMBER_LESS_MC, num
  } as const
}
export const ChangeSCIfOthersAC = (num: number) => {
  return {
    type: CHANGE_SC_IF_OTHERS, num
  } as const
}
export const ChangeMCIfNumberMoreSCAC = (num: number) => {
  return {
    type: CHANGE_MC_IF_NUMBER_MORE_SC, num
  } as const
}
export const ChangeMCIfOthersAC = (num: number) => {
  return {
    type: CHANGE_MC_IF_OTHERS, num
  } as const
}
export const SetValuesAC = () => {
  return {
    type: SET_VALUES
  } as const
}