import { useParams } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Pagination from './components/Pagination'
import Routets from './components/Routets'
import ViewAudience from './components/ViewAudience'
import { useState } from 'react'

function App() {

  return (
    <div className='h-100vh'>
    {/* <ViewAudience /> */}
    {/* <Pagination /> */}
    <NavBar />
    <Routets />
    </div>
  )
}

export default App
