import { useState } from 'react'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import './App.css'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}

export default App
