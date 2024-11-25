import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import Plans from './components/pages/Plans/Plans'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Plans />} path='/plans' />
      </Routes>
    </>
  )
}

export default App
