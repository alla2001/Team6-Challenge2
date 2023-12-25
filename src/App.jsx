import './App.css'
import React from 'react'
import {BrowserRouter as Router , Route,Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import DetailsPage from './pages/DetailsPage'
import CartPage from './pages/CartPage'
import NotfoundPage from './pages/NotfoundPage'

function App() {


  return (
    <div>
         <Router>
          <Routes>
                
                    <Route exact path="/" element={<HomePage />} />
                    <Route  path="/details/:name/:price/:description/:image" element={<DetailsPage />} />
                    <Route  path="/cart"    element={<CartPage />}     /> 
                    <Route  path="*"    element={<NotfoundPage />}  /> 
                    
           </Routes>
      </Router>
      </div>
   
    
  )
}

export default App
