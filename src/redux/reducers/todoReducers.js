const initialState = {
  list: []
}

export const addTodoReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'ADD_TODO' :
      const {id, data} = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data
          }
        ]
      }
    case 'DELETE_TODO' :
      const newList = state.list.filter((todo) => todo.id !== action.id)
      console.log(newList)
      return { 
        ...state,
        list: newList,
      }       
      default :
      return state;
  }
}