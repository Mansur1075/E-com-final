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

      if (findIndex != -1) {
        // product ase
        
        state.cartItem[findIndex].qun++ ;
      } else {
        // product naii
  
        state.cartItem.push({...action.payload, qun:1});
      }
    },

    removeCart:(state, action)=>{
      let filtercart = state.cartItem.filter((item)=> item.id != action.payload.id)
      state.cartItem = filtercart;
    }



  },
});

export const { addToCart, removeCart } = productSlice.actions;

export default productSlice.reducer;
