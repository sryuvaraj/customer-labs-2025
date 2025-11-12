import React, { useContext } from 'react'
import { ThemContextProvider } from './ThemContext'

const ChangeTheme = () => {
    const vals = useContext(ThemContextProvider)
  return (
    <div></div>
  )
}

export default ChangeTheme