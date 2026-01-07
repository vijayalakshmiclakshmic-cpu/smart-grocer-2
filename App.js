import './App.css';
import { useState } from 'react';

function App() {

  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    if (item !== "") {
      setItems([...items, item]);
      setItem("");
    }
  }

  return (
    <div className="container">
      <h1>Smart Grocer</h1>
      <p>Grocery Planner</p>

      <input
        type="text"
        placeholder="Enter grocery item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />

      <button onClick={addItem}>Add Item</button>

      <ul>
        {items.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;