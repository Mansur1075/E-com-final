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
        state.cartItem[findIndex].qun++ ;       
        state.cartItem[findIndex].totalPrice = (state.cartItem[findIndex].price * state.cartItem[findIndex].qun).toFixed(2)
      } else {         
        state.cartItem.push({...action.payload, qun:1, totalPrice: action.payload.price.toFixed(2)});       
      }     
    },      

    removeCart:(state, action)=>{       
      let filtercart = state.cartItem.filter((item)=> item.id != action.payload.id)       
      state.cartItem = filtercart;     
    },          

    increment: (state, action) => {       
      let item = state.cartItem.find((item) => item.id === action.payload);       
      if (item) {         
        item.qun += 1;       
        item.totalPrice = (item.price * item.qun).toFixed(2)
      }     
    },       

    decrement: (state, action) => {       
      let item = state.cartItem.find((item) => item.id === action.payload);       
      if (item && item.qun > 1) {         
        item.qun -= 1;       
        item.totalPrice = (item.price * item.qun).toFixed(2)
      }     
    },     
  }, 
});  

export const { addToCart, removeCart, increment, decrement } = productSlice.actions;  
export default productSlice.reducer;
