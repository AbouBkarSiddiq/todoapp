import { combineReducers } from "redux";
import { addTodoReducer } from './todoReducers'
const rootReducer = combineReducers({
  addTodoReducer
})

export default rootReducer