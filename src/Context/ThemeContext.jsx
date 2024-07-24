import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light')
    
    useEffect(() => {
        setTheme(localStorage.getItem('theme') || 'light')
    }, []) 

    const toggleTheme = () => {
        const updatedTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(updatedTheme)
        localStorage.setItem('theme', updatedTheme)
    }
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeContext