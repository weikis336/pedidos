import { configureStore } from '@reduxjs/toolkit'
import crudReducer from './crud-slice'

export const store = configureStore({
  reducer: {
    crud: crudReducer
  }
})

export default store
