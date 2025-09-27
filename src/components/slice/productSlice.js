import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItem:[],
}

export const productSlice = createSlice({
   name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      
    },
  },
});

export const { addToCart } = productSlice.actions;

export default productSlice.reducer
