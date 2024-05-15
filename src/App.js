import React, { useState } from 'react';
import './App.css';

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    if (!newItem) {
      alert("Insira um item");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
      isCompleted: false
    };

    setItems(oldList => [...oldList, item]);
    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }

  function toggleComplete(id) {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted };
      }
      return item;
    });
    setItems(updatedItems);
  }

  return (
    <div className="App">
      <h1>Todo List</h1>

      <input
        type='text'
        placeholder='Adicionar uma tarefa'
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
      />

      <button onClick={addItem}>Add</button>

      <ul>
        {items.map(item => {
          return(
            <li key={item.id} className={item.isCompleted ? 'completed' : ''}>
              {item.value}
              <button className='delete-button' onClick={() => deleteItem(item.id)}>Deletar</button>
              <button className='complete-button' onClick={() => toggleComplete(item.id)}>
                {item.isCompleted ? 'Desfazer' : 'Concluir'}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;



