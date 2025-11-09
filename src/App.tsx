import { useParams } from 'react-router-dom'
import './App.css'
import { useState } from 'react'
import ToDoList from './components/ToDoList'

function App() {

  return (
    <div className='h-100vh'>
      <ToDoList />
    </div>
  )
}

export default App
