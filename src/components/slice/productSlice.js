import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItem: [],
}

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let findIndex = state.cartItem.findIndex((item) => item.id === action.payload.id);

      if (findIndex !== -1) {
        // Product already in cart
        state.cartItem[findIndex].qun++;
        state.cartItem[findIndex].totalPrice =
          state.cartItem[findIndex].price * state.cartItem[findIndex].qun; // ✅ price update
      } else {
        // New product
        state.cartItem.push({
          ...action.payload,
          qun: 1,
          totalPrice: action.payload.price, // ✅ initial total price
        });
      }
    },

    removeCart: (state, action) => {
      state.cartItem = state.cartItem.filter((item) => item.id !== action.payload.id);
    },

    increment: (state, action) => {
      let item = state.cartItem.find((item) => item.id === action.payload);
      if (item) {
        item.qun += 1;
        item.totalPrice = item.price * item.qun; // ✅ price update with quantity
      }
    },

    decrement: (state, action) => {
      let item = state.cartItem.find((item) => item.id === action.payload);
      if (item && item.qun > 1) {
        item.qun -= 1;
        item.totalPrice = item.price * item.qun; // ✅ price update with quantity
      }
    },
  },
});

export const { addToCart, removeCart, increment, decrement } = productSlice.actions;
export default productSlice.reducer;
