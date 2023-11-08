import { createContext, useState } from "react";

export const themes = {
    light: {
        color: "#000000",
        backgroundColor: "#eeeeee",
        border: "1px solid #000000"
    },
    dark: {
        color: "#ffffff",
        backgroundColor: "#000000",
        border: "1px solid #ffffff"
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