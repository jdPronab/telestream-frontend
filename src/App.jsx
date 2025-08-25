import { useState } from 'react'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  )
}

export default App
