import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Destination from './routes/Destination'
import Home from './routes/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destination />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App