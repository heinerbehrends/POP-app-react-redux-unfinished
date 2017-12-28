// import todoList from './todoList'
import { todos } from './todos'
import visibilityFilter from './visibilityFilter'
import todoList from './todoList'

// function createNamedWrapperReducer(reducerFunction, reducerName) {
//     return (state, action) => {
//         console.log(action.props.Id);
//         const {name} = action.props.listId;
//         const isInitializationCall = state === undefined;
//         if(name !== reducerName && !isInitializationCall) return state;
//
//         return reducerFunction(state, action);
//     }
// }

function todoApp(state = {todoLists: {1:{todos: [{id: 0, text:'bla', completed: false, visibilityFilter: "SHOW_ALL"}], },2:{}}}, action) {
  if (typeof action.props !== 'undefined') {
    switch (action.props.listId) {
      case 1: console.log('listId 1');
    }
  }
  return {
    todoLists:
    { 1: {todos: todos(state.todoLists[1].todos, action, '1'),
          visibilityFilter: visibilityFilter(state.todoLists[1].visibilityFilter, action, '1') },
      2: {todos: todos(state.todoLists[2].todos, action, '2'),
          visibilityFilter: visibilityFilter(state.todoLists[2].visibilityFilter, action, '2') }
    }
  }
}

export default todoApp
