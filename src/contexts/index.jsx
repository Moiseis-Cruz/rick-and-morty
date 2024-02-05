import { createContext, useRef, useState } from "react";

import bgLight from '../imgs/RAM-light.jpg'
import bgDack from '../imgs/RAM-dark.png'
import { getDatos } from "../services";

export const themes = {
    light: {
        name: "light",
        color: "#000000",
        backgroundColor: "#eeeeee",
        border: "3px solid #000000",
        backgroundImage: `url(${bgLight})`
    },
    dark: {
        name: "dark",
        color: "#ffffff",
        backgroundColor: "#000000",
        border: "3px solid #ffffff",
        backgroundImage: `url(${bgDack})`
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [ theme, setTheme ] = useState(themes.light)
    const [ characters, serCharacters ] = useState([])
    const [ hasNextPage, setHasNextPage ] = useState(true)
    const switchPage = useRef()

    const params = new URLSearchParams(window.location.search);
    const pageNum = params.get("page")
    switchPage.current = pageNum ? Number(pageNum) : 1

    const fetchData = async (page = null) => {
        try{
            const data = await getDatos(page ? page : switchPage.current)
            if(data){
                serCharacters(data.results)
                if(!data.info?.next){
                    setHasNextPage(false)
                }
            }
        }catch(error){
            console.error("Error fetching data", error);
        }
    }

    const constextProps = {
        theme, setTheme, characters, fetchData, page: switchPage.current, hasNextPage
    }

    return(
        <ThemeContext.Provider value={{...constextProps}}>
            {props.children}
        </ThemeContext.Provider>
    )
}