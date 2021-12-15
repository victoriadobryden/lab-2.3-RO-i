import { User } from "../../common/intarfaces"
import { UserAction, UserState } from "../types/user"

const initialState: UserState = {
  user: null,
  currentUser: null,
  error: null,
  loading: true, 
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case "FETCH_USER": 
      return {...state, loading: true, user: null}

    case "FETCH_USER_SUCCESS":
      return {...state, loading: false, user: action.payload}

    case "FETCH_CURRENT_USER_SUCCESS":
      return {...state, loading: false, currentUser: action.payload}

    case "FETCH_USER_ERROR":
      return {...state, error: action.payload}

    case "FORGET_USER":
      return {...state, user: null, loading: false}

    default:
      return state
  }
}