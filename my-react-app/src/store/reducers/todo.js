import { ADD_NODE, COMPLETED_NODE } from "../actions/todo";

const initialState = {
  todos: [],
};

export default function listReducers(state = initialState, action) {
  switch(action.type) {
    case ADD_NODE: 
      if(state.todoNote = !"") 
        return {
          ...state,
          todos: [...state.todos, action.payload],
          todoNote: "",
      } 
    case COMPLETED_NODE: 
      const completedTodos = [...state.todos];
      completedTodos[action.payload].completed = !completedTodos[action.payload].completed;
      return {
        ...state,
        todos: completedTodos,
      };
    default: {
      return state
    }
  }
}