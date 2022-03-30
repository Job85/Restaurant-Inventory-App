// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import axios from 'axios'

const App = () => {
  let [items, updateItems] = useState([])
  const getItems = async () => {
    let retrievedItems = await axios.get('http://localhost:3001/items')
    return retrievedItems
  }
  useEffect(async () => {
    let items = await getItems()
    updateItems(items.data)
  }, [])
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;
