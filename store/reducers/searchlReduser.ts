import { SearchAction as SearchAction, SerialsSearchState as SearchState } from "../types/serialsSearch"

const initialState: SearchState = {
  series: [],
  actors: null,
  users: [],
  loading: true,
  error: null
}

export const serialsSearchReduser = (state = initialState, action: SearchAction): SearchState => {
  switch (action.type) {
    case "SEARCH":
      return {...state, loading: true}

    case "SEARCH_SERIALS_SUCCESS":
      return {...state, series: action.payload, loading: false}

    case "SEARCH_USERS_SUCCESS":
      return {...state, users: action.payload, loading: false}

    case "SEARCH_ERROR": 
      return {...state, error: true}

    default:
      return state
  }
}