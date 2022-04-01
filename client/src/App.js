import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Items from './components/Items';
import Create from './components/Create';
import Edit from './components/ItemDetails';
import axios from 'axios';

const App = () => {
  let [newItem, setNewItem] = useState({
    location: '',
    category: '',
    item: '',
    size: '',
    count: ''
  })

  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let postItem = axios.post('http://localhost:3001/items', newItem)
    return postItem
  }

  let [editItem, setEdit] = useState({
    location: '',
    category: '',
    item: '',
    size: '',
    count: ''
  })
  // handleEdit function passed in props to Edit.jsx
  const handleEdit = (e) => {
    e.preventDefault();
    setEdit({ ...editItem, [e.target.name]: e.target.value })
    return
  }
  // handleSave function passed in props to Edit.jsx
  const handleSave = (e) => {
    e.preventDefault();
    let editItem = axios.put('http://localhost:3001/items')
    return editItem
  }
  // handleDelete function passed in props to Edit.jsx
  const handleDelete = (e) => {
    e.preventDefault();
    let deleteItem = axios.delete('http://localhost:3001/items')
    return deleteItem
  }

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Items' element={<Items />} />
          <Route path='Create' element={<Create newItem={newItem} handleChange={handleChange} handleSubmit={handleSubmit} />} />
          <Route path='Items/:id' element={<Edit handleEdit={handleEdit} handleDelete={handleDelete} handleSave={handleSave} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;



// setNewItem={setNewItem} editItem={editItem} handleEdit={handleEdit} 