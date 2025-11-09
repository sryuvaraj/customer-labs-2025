import { useParams } from 'react-router-dom'
import './App.css'
import { useState } from 'react'
import ToDoList from './components/ToDoList'
import StreetLights from './components/StreetLights'

function App() {

  return (
    <div className='h-100vh'>
      {/* <ToDoList /> */}
      <StreetLights />
    </div>
  )
}

export default App
