import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

const App = () => {
  return (
    <>
      <AddTodo />
      <TodoList />
      <Footer />
    </>
  );
};

export default App;