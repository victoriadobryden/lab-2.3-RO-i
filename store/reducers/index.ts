import { combineReducers } from "redux";
import { serialReduser } from "./serialReduser";
import { serialsSearchReduser } from "./searchlReduser";
import { userReducer } from "./userReduser";

const rootReduser = combineReducers({
  user: userReducer,
  search: serialsSearchReduser,
  serial: serialReduser,
})

export default rootReduser 
export type RootState = ReturnType<typeof rootReduser>