import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo listId="1" />
    <VisibleTodoList listId="1" />
    <AddTodo listId="2" />
    <VisibleTodoList listId="2" />
    <Footer />
  </div>
)

export default App
