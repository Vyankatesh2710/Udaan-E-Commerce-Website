import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  noOfItems: 0,
  totalAmt: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    additem: (state, action) => {
      const cartItem={...action.payload,qty: 1}
      state.cartItems = [...state.cartItems, cartItem];
      state.noOfItems = state.cartItems.length;
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item._id !== itemId);
    },

    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item._id === payload.id);
      cartItem.qty = cartItem.qty + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item._id === payload.id);
      cartItem.qty = cartItem.qty - 1;
    },

    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.qty;
        total += item.qty * item.Prices;
      });
      state.noOfItems = amount;
      state.totalAmt = total;
    },
  },
});

// console.log(cartSlice);
export const {
  clearCart,
  removeItem,
  increase,
  decrease,
  calculateTotals,
  additem,
} = cartSlice.actions;
  
export default cartSlice.reducer;
