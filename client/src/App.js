// import logo from './logo.svg';
// import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Items from './components/Items';
import Create from './components/Create';
import Edit from './components/Edit';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Items' element={<Items />} />
          <Route path='Create' element={<Create />} />
          <Route path='Edit' element={<Edit />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;
