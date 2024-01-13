import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
};

export const AuthSlice = createSlice({
    name: "Authentication",
    initialState,
    reducers: {
        logIn: (state, action) => {
            state.user = action.payload;
        },
        logOut: (state) => {
            state.user = null;
        },
    },
});

export const { logIn, logOut } = AuthSlice.actions;
export const userData = (state) => state.Authentication.user;
export default AuthSlice.reducer;