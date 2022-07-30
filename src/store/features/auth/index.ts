import { createSlice } from "@reduxjs/toolkit";

interface initialStateType {
    bearerToken: string|null,
    refreshToken: string|null,
}

const initialState : initialStateType = {
    bearerToken : null,
    refreshToken : null,
}

export const authState = createSlice({
    name : 'Auth',
    initialState,
    reducers : {
        setCredentials : (state, payload) => {
            state = Object.assign(payload, state);
        },

        clearUser: (state, payload) => {
            state = initialState;
        },
    }
})

export const { setCredentials, clearUser } = authState.actions;
export default authState.reducer;