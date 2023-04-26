import React, { useState } from 'react';

import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Header from './components/Nav';
import Home from './pages/Home';
import Items from './pages/Items';
import ItemForm from './components/ItemForm';
import ItemDetails from './components/ItemDetails';
import NewItem from './pages/NewItem';
import EditItem from './pages/EditItem';
// import { BASE_URL } from './globals';

// let BASE_URL = 'https://inventory-api-eoqp.onrender.com/api'
let BASE_URL = 'http://localhost:3001/api/'

export const Context = React.createContext({ value: null, setValue: () => { } });

const App = () => {
  let navigate = useNavigate()

  // hook to populate new items in ItemForm.jsx
  let [newItem, setNewItem] = useState({
    location: '',
    category: '',
    item_name: '',
    description: '',
    unit_measure: '',
    case_size: '',
    count: '',
    vendor_name: '',
    vendor_code: ''
  })

  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value })
  }
  // event handler passed as prop to submit new items in ItemForm.jsx
  const handleSubmit = (e) => {
    e.preventDefault();
    let postItem = axios.post(`${BASE_URL}/item/create`, newItem)
    navigate('/items')
    return postItem

  }

  const handleUpdate = (id) => {
    let editItem = axios.get(`${BASE_URL}/item/${id}`)
    return editItem
  }

  return (
    <div className="App">
      <header className='App-header'>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/items' element={<Items handleUpdate={handleUpdate} />} />
          <Route path='/new' element={<NewItem newItem={newItem} handleChange={handleChange} handleSubmit={handleSubmit} />} />
          <Route path='/items/:id' element={<EditItem newItem={newItem} setNewItem={setNewItem} handleChange={handleChange} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;