import React, { useState, ChangeEvent, FormEvent } from 'react';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function TodoList() {
  const [todos, setTodos] = useState<string[]>([]); 
  const [inputValue, setInputValue] = useState<string>(''); 
  const [editIndex, setEditIndex] = useState<number | null>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    if (editIndex !== null) {
      
      const newTodos = [...todos];
      newTodos[editIndex] = inputValue;
      setTodos(newTodos);
      setEditIndex(null);
    } else {
      // Add a new todo item
      setTodos([...todos, inputValue]);
    }
    setInputValue('');
  }

  function handleDelete(index: number) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  function handleEdit(index: number) {
    setInputValue(todos[index]);
    setEditIndex(index);
  }

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit}>
          <input type='text' value={inputValue} onChange={handleChange} />
          <button type="submit">{editIndex !== null ? 'Update' : '+'}</button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => handleEdit(index)}><MdEdit /></button>
              <button onClick={() => handleDelete(index)}><MdDelete /></button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
    backgroundColor: '#f0f0f0',
  } as React.CSSProperties,
  box: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)',
    textAlign: 'center' as 'center',
    minWidth: '300px',
    maxWidth: '500px',
    width: '100%',
  } as React.CSSProperties,
};

export default TodoList;