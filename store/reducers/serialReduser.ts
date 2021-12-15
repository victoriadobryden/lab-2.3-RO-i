import { SerialAction, SerialState } from "../types/serial"

const initialState: SerialState = {
  serial: null,
  loading: true,
  error: null
}

export const serialReduser = (state = initialState, action: SerialAction): SerialState => {
  switch (action.type) {
    case "FETCH_SERIAL":
      return {serial: null, loading: true, error: null}

    case "FETCH_SERIAL_SUCCESS":
      return {serial: action.payload, loading: false, error: null}

    case "FETCH_SERIAL_ERROR":
      return {serial: null, loading: false, error: action.payload}

    default:
      return state
  }
}