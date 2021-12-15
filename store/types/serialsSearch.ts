import { Serial, User } from "../../common/intarfaces";

export interface SerialsSearchState {
  series: Serial[]
  actors: null
  users: User[]
  loading: boolean
  error: any
}

export type SearchAction =
  | SerialsAction
  | SearchSerialsSuccessAction
  | SearchUserSuccessAction
  | SearchErrorAction

interface SerialsAction {
  type: "SEARCH"
}

interface SearchSerialsSuccessAction {
  type: "SEARCH_SERIALS_SUCCESS"
  payload: Serial[]
}

interface SearchUserSuccessAction {
  type: "SEARCH_USERS_SUCCESS"
  payload: User[]
}

interface SearchErrorAction {
  type: "SEARCH_ERROR"
  payload: any
}