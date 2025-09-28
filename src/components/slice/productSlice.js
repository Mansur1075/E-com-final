import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItem: [],
}

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let findindex = state.cartItem.findIndex((item) => item.id === action.payload.id);

      if (findindex !== -1) {
        // product ase
        state.cartItem[findindex].qun += 1;
      } else {
        // product naii
        state.cartItem=[state.cartItem, action.payload];
      }
    },
  },
});

export const { addToCart } = productSlice.actions;

export default productSlice.reducer;
