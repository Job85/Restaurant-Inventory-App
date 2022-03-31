import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Items from './components/Items';
import Create from './components/Create';

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

  // const handleSubmit = (e) => {
  //   let addItem = e.target.onSubmit;
  // }

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Items' element={<Items />} />
          <Route path='Create' element={<Create newItem={newItem} handleChange={handleChange} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;
