import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';
import TodoList from './components/TodoList';

const App = ({ todos, addTodo }) => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim() !== '') {
      addTodo(text);
      setText('');
    }
  };

  return (
    <div className='App'>
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
      <TodoList />
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = {
  addTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
