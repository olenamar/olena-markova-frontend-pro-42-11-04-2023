import { React } from "react";
import { useDispatch, useSelector} from "react-redux";
import { ADD_NODE } from "../store/actions/todo";
import {COMPLETED_NODE} from "../store/actions/todo"
import AddNode from "./AddNode";
import CompletedList  from "./CompletedList";


export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  const todoNote = useSelector((state) => state.todoNote);

  const dispatch = useDispatch();
  
  const addNoteTodo  = text => {
    dispatch({type: ADD_NODE, payload: { text, completed: false }});
  }

  const completedNote = index => {
    dispatch({type: COMPLETED_NODE, payload: { index }}) 
  }
  return(
    <div className="container">
      <h1>My to-do list</h1>
      <CompletedList todos={todos} completedNote={completedNote}></CompletedList>
      <AddNode todoNote={todoNote} addNoteTodo ={addNoteTodo} ></AddNode>
    </div>
  );
}