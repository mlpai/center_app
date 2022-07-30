import { combineReducers } from "@reduxjs/toolkit";
import authState from "./features/auth";

export const allReducers = combineReducers({
    authState,
    
})