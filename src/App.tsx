import { useParams } from 'react-router-dom'
import './App.css'
import { createContext, useState } from 'react'
import ToDoList from './components/ToDoList'
import StreetLights from './components/StreetLights'
import Profile from './components/Profile'
import ThemContext from './components/ThemContext'
import ChangeTheme from './components/ChangeTheme'

function App() {

  const ContextProvider = createContext(null)

  return (
    <ThemContext>
      <ToDoList />
      <ChangeTheme />
    </ThemContext>
  )
}

export default App
