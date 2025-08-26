import { useState } from 'react'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import './App.css'
import Dashboard from './pages/Dashboard'
import Files from './pages/Files'
import Earnings from './pages/Earnings'
import Reports from './pages/Reports'
import Settings from './pages/Settings'

function App() {

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/files' element={<Files />} />
      <Route path='/earnings' element={<Earnings />} />
      <Route path='/daily/reports' element={<Reports />} />
      <Route path='/settings' element={<Settings />} />
    </Routes>
  )
}

export default App
