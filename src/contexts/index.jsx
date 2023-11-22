import { createContext, useState } from "react";

import bgLight from '../components/imgs/RAM-light.jpg'
import bgDack from '../components/imgs/RAM-dark.png'

export const themes = {
    light: {
        name: "light",
        color: "#000000",
        backgroundColor: "#eeeeee",
        border: "1px solid #000000",
        backgroundImage: `url(${bgLight})`
    },
    dark: {
        name: "dark",
        color: "#ffffff",
        backgroundColor: "#000000",
        border: "1px solid #ffffff",
        backgroundImage: `url(${bgDack})`
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [ theme, setTheme ] = useState(themes.light)

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}