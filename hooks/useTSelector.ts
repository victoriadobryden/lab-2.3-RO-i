import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducers";

 export const useTSelector: TypedUseSelectorHook<RootState> = useSelector