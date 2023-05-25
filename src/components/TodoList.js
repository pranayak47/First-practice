import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  const handleToggle = (index) => {
    toggleTodo(index);
  };
  const handleDelete = (index) => {
    deleteTodo(index);
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li
          key={index}
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none'
          }}
        >
           <span onClick={() => handleToggle(index)}>{todo.text}</span>
           <button onClick={() => handleDelete(index)}>Delete</button>
          {/* {todo.text} */}
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = {
  toggleTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
