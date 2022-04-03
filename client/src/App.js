import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Items from './components/Items';
import ItemForm from './components/ItemForm';
import ItemDetails from './components/ItemDetails';
import axios from 'axios';

const App = () => {
  // hook to populate new items in ItemForm.jsx
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
  // event handler passed as prop to submit new items in ItemForm.jsx
  const handleSubmit = (e) => {
    e.preventDefault();
    let postItem = axios.post('http://localhost:3001/items', newItem)
    return postItem
  }

  //hook to populate item to edit in ItemDetails.jsx how to grab item.id?

  // const handleEdit = (e) => {
  //   e.preventDefault();
  //   setEdit({ ...editItem, [e.target.name]: e.target.value })
  //   return
  // }

  // handleSave function passed in props to ItemDetails.jsx
  const handleSave = (e) => {
    e.preventDefault();
    let saveItem = axios.put('http://localhost:3001/items')
    return saveItem
  }
  // handleDelete function passed in props to ItemDetails.jsx
  const handleDelete = (e) => {
    e.preventDefault();
    let deleteItem = axios.delete('http://localhost:3001/items')
    return deleteItem
  }

  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Items' element={<Items />} />
          <Route path='/new' element={<ItemForm newItem={newItem} handleChange={handleChange} handleSubmit={handleSubmit} />} />
          <Route path='Items/:id' element={<ItemDetails setNewItem={setNewItem} handleDelete={handleDelete} handleSave={handleSave} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;



// setNewItem={setNewItem} editItem={editItem} handleEdit={handleEdit} 