import { User } from "../../common/intarfaces"

export interface UserState {
  user: User | null
  currentUser: User | null
  error: string | null
  loading: boolean
}

export type UserAction = 
  | FetchUserAction
  | FetchUserSuccessAction
  | FetchCurrentUserSuccessAction
  | FetchUserErrorAction
  | ForgetUserAction

interface FetchUserAction {
  type: "FETCH_USER"
}

interface FetchUserSuccessAction {
  type: "FETCH_USER_SUCCESS"
  payload: User
}

interface FetchCurrentUserSuccessAction {
  type: "FETCH_CURRENT_USER_SUCCESS"
  payload: User
}

interface FetchUserErrorAction {
  type: "FETCH_USER_ERROR"
  payload: any
}

interface ForgetUserAction {
  type: "FORGET_USER"
}