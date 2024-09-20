import { createSlice } from '@reduxjs/toolkit'

export const crudSlice = createSlice({
  name: 'crud',
  initialState: {
    formElement: {
      data: null
    },
    tableEndpoint: null,
    queryString: null
  },
  reducers: {
    showFormElement: (state, action) => {
      state.formElement = action.payload
    },
    refreshTable: (state, action) => {
      state.tableEndpoint = action.payload
    },
    applyFilter: (state, action) => {
      state.queryString = action.payload
    }
  }
})

export const {
  showFormElement,
  refreshTable,
  applyFilter
} = crudSlice.actions

export default crudSlice.reducer
