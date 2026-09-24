import React, { useState } from "react";
import TodoItem from "./TodoItem";

function App() {
  const [newAddition, setNewAddition] = useState("");
  const [items, setItems] = useState([]);

  function handleInput(event) {
    setNewAddition(event.target.value);
  }

  function handleAdd(event) {
    event.preventDefault();

    if (newAddition.trim() === "") {
      return;
    }

    setItems((prevItems) => [...prevItems, newAddition]);
    setNewAddition("");
  }

  function handleDelete(indexToDelete) {
    setItems((prevItems) =>
      prevItems.filter((_, index) => index !== indexToDelete),
    );
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <form onSubmit={handleAdd} className="form">
        <input value={newAddition} onChange={handleInput} type="text" />
        <button type="submit">
          <span>Add</span>
        </button>
      </form>
      <div>
        <ul>
          {items.map((item, index) => (
            <TodoItem key={index}>
              <span>{item}</span>

              <button
                type="button"
                className="delete-button"
                aria-label={`Delete ${item}`}
                title={`Delete ${item}`}
                onClick={() => handleDelete(index)}
              >
                &#128465;
              </button>
            </TodoItem>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

// function App() {
//   const [inputText, setInputText] = useState("");
//   const [items, setItems] = useState([]);

//   function handleChange(event) {
//     const newValue = event.target.value;
//     setInputText(newValue);
//   }

//   function addItem() {
//     setItems(prevItems => {
//       return [...prevItems, inputText];
//     });
//     setInputText("");
//   }

//   return (
//     <div className="container">
//       <div className="heading">
//         <h1>To-Do List</h1>
//       </div>
//       <div className="form">
//         <input onChange={handleChange} type="text" value={inputText} />
//         <button onClick={addItem}>
//           <span>Add</span>
//         </button>
//       </div>
//       <div>
//         <ul>
//           {items.map(todoItem => (
//             <li>{todoItem}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
