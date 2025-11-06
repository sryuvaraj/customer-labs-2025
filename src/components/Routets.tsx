import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Subages/Home'
import About from './Subages/About'
import Careers from './Subages/Careers'
import Contacts from './Subages/Contacts'
import AboutOne from './Subages/AboutOne'

const Routets = () => {
  return (
    <div>
         <Routes>
            <Route path='/' element={<Home></Home>} />
            <Route path='/about' element={<About />} />
            <Route path='/about/:id' element={<AboutOne />} />
            <Route path='/careers' element={<Careers />} />
            <Route path='/contacts' element={<Contacts />} />
        </Routes>
    </div>
  )
}

export default Routets