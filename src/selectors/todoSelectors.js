import createCachedSelector from 're-reselect';

const getVisibilityFilter = (state, props) => {
  return  state.todoLists[props.listId].visibilityFilter
}
const getTodos = (state, props) =>
  state.todoLists[props.listId].todos

const getVisibleTodos = createCachedSelector(
  [ getVisibilityFilter, getTodos ],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case 'SHOW_COMPLETED':
        return todos.filter(todo => todo.completed)
      case 'SHOW_ACTIVE':
        return todos.filter(todo => !todo.completed)
      default:
        return todos
    }
  }
)(
  /*
   * Re-reselect resolver function.
   * Cache/call a new selector for each different "listId"
   */
  (state, props) => props.listId,
);

export default getVisibleTodos
