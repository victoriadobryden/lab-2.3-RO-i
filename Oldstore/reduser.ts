import { Serial } from "../common/intarfaces"

export interface State {
  user: any
  userData: any
  findText: string | null
  currentSerial: Serial | null
}

const initialState: State = {
  user: null,
  userData: null,
  findText: null,
  currentSerial: null
}

type Action = {
  type: "SET_FIND_TEXT" | "SET_CURRENT_SERIAL_ID",
  payload: any
}

export const reduser = (state = initialState, action: Action): State => {
  switch(action.type) {
    case "SET_FIND_TEXT": {
      return {...state, findText: action.payload}
    } 
    case "SET_CURRENT_SERIAL_ID": {
      return {...state, currentSerial: action.payload}
    }
    default: {
      return state
    }
  }  
}
