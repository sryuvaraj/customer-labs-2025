import { useParams } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Pagination from './components/Pagination'
import Routets from './components/Routets'
import ViewAudience from './components/ViewAudience'
import { useState } from 'react'

function App() {

  const protectedRoutes = ["about","careers","contacts"]
  const [isProtected, setIsProtected] = useState(false)

  const route = useParams()
  console.log(route)
  const user = true
  if(user){
    setIsProtected(true)
  }
  else{
    const isExist = protectedRoutes.find((i:any) => i === route)
  }

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
