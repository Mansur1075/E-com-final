import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products:"kire bhai",
  Number : 0
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    allproduct: (state) => {
         
    }
  },
})

// Action creators are generated for each case reducer function
export const { allproduct } = productSlice.actions

export default productSlice.reducer
