import { useState } from 'react'
import './App.css'
import DetailsPage from "./pages/DetailsPage"
import AppLayout from "./AppLayout"
import {BrowserRouter as Router , Route,Routes} from "react-router-dom"
import HomePage from './homeComponents/HomePage';


function App() {
  

  return (
      <div>
         <Router>
          <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route path="/" element={<DetailsPage />} />
                </Route>
                <Route path="/home" element={<HomePage />} />
           </Routes>
      </Router>
      </div>
  )
}

export default App
