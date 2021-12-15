import { Dispatch } from "react";
import { Serial, Filter, User } from "../../common/intarfaces";
import firebaseService from "../../services/firebaseService";
import tvmazeService from "../../services/tvmazeService";
import { SearchAction } from "../types/serialsSearch";

export const searchSerials = (...filters: Filter<Serial>[]) =>
async(dispatch: Dispatch<SearchAction>) => {
  try {
    dispatch({type: "SEARCH"})
    const series = await tvmazeService.searchSeries(...filters)
    dispatch({type: "SEARCH_SERIALS_SUCCESS", payload: series})
  } catch (error) {
    dispatch({type: "SEARCH_ERROR", payload: error})
  }
}

export const searchUsers = (...filters: Filter<User>[]) => 
async(dispatch: Dispatch<SearchAction>) => {
  try {
    dispatch({type: "SEARCH"})
    const users = await firebaseService.searchUsers(...filters)
    dispatch({type: "SEARCH_USERS_SUCCESS", payload: users})
  } catch (error) {
    dispatch({type: "SEARCH_ERROR", payload: error})
  }
}