import { async } from "firebase/node_modules/@firebase/util";
import { Dispatch } from "react";
import { SignUpValues, User } from "../../common/intarfaces";
import { SignInValues } from "../../common/intarfaces";
import firebaseService from "../../services/firebaseService";
import { UserAction } from "../types/user";

export const setCurrentUser = (user: User) => 
async(dispatch: Dispatch<UserAction>) => {
  dispatch({type: "FETCH_CURRENT_USER_SUCCESS", payload: user})
}

export const setUser = (user: User) => 
async(dispatch: Dispatch<UserAction>) => {
  dispatch({type: "FETCH_USER_SUCCESS", payload: user})
}

export const signUp = ({name, email, password}: SignUpValues) => 
async (dispatch: Dispatch<UserAction>) => {
  try {
    dispatch({type: "FETCH_USER"})
    await firebaseService.signUp(name, email, password, user => {
      dispatch({type: "FETCH_USER_SUCCESS", payload: user})
    })    
  } catch (error) {
    dispatch({type: "FETCH_USER_ERROR", payload: error})
  }
}

export const signIn = ({email, password}: SignInValues) => 
async (dispatch: Dispatch<UserAction>) => {
  try {
    dispatch({type: "FETCH_USER"})
    const user = await firebaseService.signIn(email, password, user => {
      dispatch({type: "FETCH_USER_SUCCESS", payload: user})
    })
  } catch (error) {
    dispatch({type: "FETCH_USER_ERROR", payload: error})
  }
}

export const signOut = () => 
async (dispatch: Dispatch<UserAction>) => {
  try {
    dispatch({type: "FORGET_USER"})
    await firebaseService.signOut()
  } catch (error) {
     dispatch({type: "FETCH_USER_ERROR", payload: error})
  }
}

export const addFriend = (me: User, userId: string) => 
async () => {
  await firebaseService.addFriend(me, userId)
}

export const removeFriend = (me: User, userId: string) => 
async () => {
  await firebaseService.removeFriend(me, userId)
}

export const addSerial = (user: User, serialID: string) => 
async() => {
  await firebaseService.addSerial(user, serialID)
}

export const removeSerial = (user: User, serialID: string) => 
async() => {
  await firebaseService.removeSerial(user, serialID)
}