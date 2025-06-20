import React, { useState, useEffect } from 'react';
import { fetchItems, addItem } from '../api';

function InventoryList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', quantity: 0, category: 'Electronics' });

  useEffect(() => {
    fetchItems().then(res => setItems(res.data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(newItem).then(res => {
      setItems([...items, res.data]);
      setNewItem({ name: '', quantity: 0, category: 'Electronics' });
    });
  };

  return (
    <div>
      <h1>Inventory List</h1>
      <ul>
        {items.map(item => (
          <li key={item._id}>{item.name} - {item.quantity} ({item.category})</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
        />
        <select
          value={newItem.category}
          onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
        >
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Food">Food</option>
        </select>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default InventoryList;
