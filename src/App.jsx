import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Crew from './routes/Crew'
import Destination from './routes/Destination'
import Home from './routes/Home'
import Technology from './routes/Technology'
import data from './data/data.json'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination data={data.destinations} />} /> 
        <Route path="/crew" element={<Crew data={data.crew} />} />
        <Route path="/technology" element={<Technology data={data.technology} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App