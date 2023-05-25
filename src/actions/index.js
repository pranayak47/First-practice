export const addTodo = (text) => ({
  type: 'ADD_TODO',
  payload: {
    text,
    completed: false
  }
});

export const toggleTodo = (index) => ({
  type: 'TOGGLE_TODO',
  payload: {
    index
  }
});
export const deleteTodo = (index) => ({
  type: 'DELETE_TODO',
  payload: {
    index
  }
});

