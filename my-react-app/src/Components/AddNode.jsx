export default function TodoList(props) {
    return(
      <div className="input_node">
        <input 
          type="text" 
          value={props.todoNote.text} 
          placeholder="Added a node" 
          onChange={(e) => props.todoNote(e.target.value)}>
        </input>
        <button className="btn-button" onClick={props.addNoteTodo}>Save</button>
      </div>
    )
  }
  