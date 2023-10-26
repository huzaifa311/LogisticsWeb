import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from '../Pages/Index'

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Index />} />
      </Routes>
    </div>
  )
}

export default Routing
