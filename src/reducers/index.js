const initialState = {
  todos: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [...state.todos, action.payload]
      };
      case 'DELETE_TODO':
  return {
    todos: state.todos.filter((_, index) => index !== action.payload.index)
  };

    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map((todo, index) => {
          if (index === action.payload.index) {
            return {
              ...todo,
              completed: !todo.completed
            };
          }
          return todo;
        })
      };
    default:
      return state;
  }
};

export default rootReducer;
