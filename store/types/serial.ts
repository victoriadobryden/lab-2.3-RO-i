import { Serial } from "../../common/intarfaces";

export interface SerialState {
  serial: Serial | null
  loading: boolean
  error: any
}

export type SerialAction =
  | FetchSerialAction
  | FetchSerialSuccessAction
  | FetchSerialErrorAction

interface FetchSerialAction {
  type: "FETCH_SERIAL"
}

interface FetchSerialSuccessAction {
  type: "FETCH_SERIAL_SUCCESS"
  payload: Serial
}

interface FetchSerialErrorAction {
  type: "FETCH_SERIAL_ERROR"
  payload: any
}