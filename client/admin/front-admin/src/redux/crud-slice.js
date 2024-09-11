import { createSlice } from '@reduxjs/toolkit'

export const crudSlice = createSlice({
  name: 'crud',
  initialState: {
    formElement: {
      data: null
    },
    tableEndpoint: null
  },
  reducers: {
    showFormElement: (state, action) => {
      state.formElement = action.payload
    },
    refreshTable: (state, action) => {
      state.tableEndpoint = action.payload
    }
  }
})

export const {
  showFormElement,
  refreshTable
} = crudSlice.actions

export default crudSlice.reducer
