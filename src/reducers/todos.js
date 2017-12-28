const initialStructure =
{
  todoLists: { 1: {todos: []}, 2: {todos: []} }
}


export const todos = (state = [], action, id = '') => {
  switch (action.type) {

    case 'ADD_TODO':
      if (id === action.props.listId) {
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      }
      else {
        return state
      }

    case 'TOGGLE_TODO':
      if (id === action.props.listId) {
        return state.map(todo =>
          (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
        )
      }
      else {
        return state
      }

    default:
      return state
  }
}

export default todos
