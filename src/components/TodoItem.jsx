import React, {useState} from "react";

function TodoItem({ children }) {

  const [ isDone, setIsDone ] = useState( false );

  function handleClick() {
    setIsDone( prevValue => {
      return !prevValue;
    });
  }
  
  return(<div onClick={handleClick} >
    <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
      {children}
    </li>
  </div>)
  
}

export default TodoItem;
