import React from "react"
import "./App.css"
import Home from "./pages/Home"
import SingleProduct from "pages/SingleProduct"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/single-product' element={<SingleProduct />} />
      </Routes>
    </div>
  )
}

export default App