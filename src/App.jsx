import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Crew from './routes/Crew'
import Destination from './routes/Destination'
import Home from './routes/Home'
import Technology from './routes/Technology'

const App = () => {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/destination" element={<Destination />} /> 
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </HashRouter>
  )
}

export default App