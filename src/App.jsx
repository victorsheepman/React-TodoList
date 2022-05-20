import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { All } from './pages/All'
import './main.css'
import { Active } from './pages/Active'
import { Completed } from './pages/Completed'
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<All />}/>
        <Route path='/Active' element={<Active />} />
        <Route path='/Completed' element={<Completed />} />
      </Routes>
    </BrowserRouter>
  )
}
