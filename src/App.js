import React from 'react'
import Login from './components/Login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="admin/login" element={<Login />} />
        <Route path="/" element = {<Dashboard />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App