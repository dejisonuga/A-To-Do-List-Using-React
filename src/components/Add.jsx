import React, { useState } from "react";
import TodoItem from "./TodoItem";
import Delete from "./Delete";
import Input from "./input";

function Add() {
  const [newAddition, setNewAddition] = useState("");
  const [items, setItems] = useState([]);

  function handleDelete(indexToDelete) {
    setItems((prevItems) =>
      prevItems.filter((_, index) => index !== indexToDelete),
    );
  }

  function handleAdd(event) {
    event.preventDefault();

    if (newAddition.trim() === "") {
      return;
    }
    setItems((prevItems) => [...prevItems, newAddition]);
    setNewAddition("");
  }
  return (
    <div>
      <form onSubmit={handleAdd} className="form">
        <Input
          value={newAddition}
          onChange={(event) => setNewAddition(event.target.value)}
        />
        <button type="submit">
          <span>Add</span>
        </button>
        <div>
          <ul>
            {items.map((item, index) => (
              <TodoItem key={index}>
                <span>{item}</span>
                <Delete
                  item={item}
                  onDelete={() => handleDelete(index)}
                />
              </TodoItem>
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
}

export default Add;
