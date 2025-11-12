import React, { createContext, useState } from 'react'

const ThemContextProvider = createContext(null)


const ThemContext = ({ children }:any) => {
const [theme, setTheme] = useState<any>('light');
  return (
    <ThemContextProvider.Provider value={{theme, setTheme}}>
    {children}
    </ThemContextProvider.Provider>
  )
}

export default ThemContext

export { ThemContextProvider }