import { createSlice } from '@reduxjs/toolkit'

export const crudSlice = createSlice({
  name: 'crud',
  initialState: {
    formElement: {
      data: null
    }
  },
  reducers: {
    showFormElement: (state, action) => {
      state.formElement = action.payload
    }
  }
})

export const {
  showFormElement
} = crudSlice.actions

export default crudSlice.reducer
