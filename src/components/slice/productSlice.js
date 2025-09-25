import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products:0,
  Number : 0
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    allproduct: (state,action) => {
      state.products = action.payload
   
    
      
         
    }
  },
})

// Action creators are generated for each case reducer function
export const { allproduct } = productSlice.actions

export default productSlice.reducer
