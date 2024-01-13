import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./SliceAuth";
import cartReducer from "./cartSlice";

export const MainStore = configureStore({
  reducer: {
    Authentication: AuthReducer,
    cart: cartReducer,
  },
});
