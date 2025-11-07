import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Subages/Home'
import Contacts from './Subages/Contacts'
import Careers from './Subages/Careers'
import About from './Subages/About'

const NavBar = () => {
  return (
    <div className='flex gap-4 items-center'>
       <Link to={"/"}>Home</Link>
       {/* <Link to={"/about"}>About</Link> */}
       <Link to={"/careers"}>Careers</Link>
       <Link to={"/contacts"}>Contacts</Link>
    </div>
  )
}

export default NavBar