import { Dispatch } from "react";
import { number } from "yup/lib/locale";
import tvmazeService from "../../services/tvmazeService";
import { SerialAction } from "../types/serial";

export const getSerialbyId = (id: number) =>
async(dispatch: Dispatch<SerialAction>) => {
  try {
    dispatch({type: "FETCH_SERIAL"})
    const serial = await tvmazeService.getSerialById(id)
    dispatch({type: "FETCH_SERIAL_SUCCESS", payload: serial})
  } catch (error) {
    dispatch({type: "FETCH_SERIAL_ERROR", payload: error})
  }
}