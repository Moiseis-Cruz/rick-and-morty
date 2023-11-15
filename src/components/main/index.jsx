import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../contexts";
import { Link } from "react-router-dom";
import { SectionMain } from "./styles";

async function getDatos(page) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    const datos = await response.json()
    return datos.results
}

export const Main = () => {

    const { theme } = useContext(ThemeContext)

    const [ characters, setCharacters ] = useState([])
    const [ switchPages, setSwitchPages ] = useState(1)

    useEffect(() => {
        const fetchData = async () => {
            try{
                const data = await getDatos(switchPages)
                
                setCharacters(data)
            }catch(error){
                console.error("Error feching data", error)
            }
        }

        fetchData()
    },[switchPages])

    const switchBetweenPages = () => {
        setSwitchPages((prevPages => prevPages + 1))
    }

    const previousPage = () => {
        if(switchPages > 1){
            setSwitchPages((prevPages => prevPages - 1))
        }
    }

    return(
        <SectionMain style={{color: theme.color, backgroundColor: theme.backgroundColor}}>
            <ul>
                {
                    characters.map((item, index) => {
                        return(
                            <li key={index}>
                                <Link style={{color: theme.color, backgroundColor: theme.backgroundColor}} to={`/card/${item.id}`}>
                                    <div>
                                        <img src={item.image} />
                                        <h2>{item.name}</h2>
                                    </div>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            <button onClick={previousPage} disabled={switchPages === 1}>Previous Page</button>
            <button onClick={switchBetweenPages}>Next Page</button>
        </SectionMain>
    )
}