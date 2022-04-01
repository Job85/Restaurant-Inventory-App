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
  // hook to populate new items in Create.jsx
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
  // event handler passed as prop to submit new items in Create.jsx
  const handleSubmit = (e) => {
    e.preventDefault();
    let postItem = axios.post('http://localhost:3001/items', newItem)
    return postItem
  }

  //hook to populate item to edit in ItemDetails.jsx how to grab item.id?
  let [editItem, setEdit] = useState({
    location: '',
    category: '',
    item: '',
    size: '',
    count: ''
  })

  const handleEdit = (e) => {
    e.preventDefault();
    setEdit({ ...editItem, [e.target.name]: e.target.value })
    return
  }

  // handleSave function passed in props to ItemDetails.jsx
  const handleSave = (e) => {
    e.preventDefault();
    let editItem = axios.put('http://localhost:3001/items')
    return editItem
  }
  // handleDelete function passed in props to ItemDetails.jsx
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
          <Route path='Items/:id' element={<Edit setNewItem={setNewItem} handleEdit={handleEdit} handleDelete={handleDelete} handleSave={handleSave} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;



// setNewItem={setNewItem} editItem={editItem} handleEdit={handleEdit} 