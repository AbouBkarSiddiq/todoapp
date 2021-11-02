export const AddTodoAction = (data) => {
  return {
    type: 'ADD_TODO',
    payload : {
      id: new Date().getTime().toString(),
      data: data
    }

  }
}

export const DeleteTodoAction = (id) => {
  return {
    type: 'DELETE_TODO',
    id
  }
}