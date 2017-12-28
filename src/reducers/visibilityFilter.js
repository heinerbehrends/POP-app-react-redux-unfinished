const visibilityFilter = (props, state = 'SHOW_ALL', action) => {
  switch (action.type) {

    case 'SET_VISIBILITY_FILTER':
    console.log(action.props.listId);

      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
