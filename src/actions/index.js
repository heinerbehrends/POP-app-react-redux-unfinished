let nextTodoId = 0

export const addTodo = (props, text) => {
  console.log(props);
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    props,
    text
  }
}

export const setVisibilityFilter = (props, filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    props,
    filter
  }
}

export const toggleTodo = (props, id) => {
  return {
    type: 'TOGGLE_TODO',
    props,
    id
  }
}
