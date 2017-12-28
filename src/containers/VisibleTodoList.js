import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import getVisibleTodos from '../selectors/todoSelectors.js'

// const getVisibleTodos = (todos, filter) => {
//   switch (filter) {
//     case 'SHOW_ALL':
//       return todos
//     case 'SHOW_COMPLETED':
//       return todos.filter(t => t.completed)
//     case 'SHOW_ACTIVE':
//       return todos.filter(t => !t.completed)
//   }
// }

const mapStateToProps = (state, props) => {
  return {
    todos: getVisibleTodos(state, props)
  }
}

const mapDispatchToProps = (dispatch, props) => {
  console.log(props);
  return {
    onTodoClick: (id, props) => {
      dispatch(toggleTodo(id, props))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
