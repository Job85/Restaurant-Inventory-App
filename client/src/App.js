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

  const handleEdit = (e) => {
    e.preventDefault();
    setEdit({ ...editItem, [e.target.name]: e.target.value })
    console.log('button clicked')
    return
  }

  // const handleDelete = (e) => {

  // }
  // handleClick={handleClick}
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Items' element={<Items />} />
          <Route path='Create' element={<Create newItem={newItem} handleChange={handleChange} handleSubmit={handleSubmit} />} />
          <Route path='Items/:id' element={<Edit setNewItem={setNewItem} editItem={editItem} handleEdit={handleEdit} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;