import React from 'react'
import {Outlet} from "react-router-dom"
import DetailsNavbar from './components/DetailsNavbar.jsx'
function AppLayout() {
  return (
    <div>
      <DetailsNavbar />
      <Outlet />
    </div>
  )
}

export default AppLayout
