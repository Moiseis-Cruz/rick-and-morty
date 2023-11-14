import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../contexts";
import { Link } from "react-router-dom";
import { SectionMain } from "./styles";

async function getDatos() {
    const response = await fetch("https://rickandmortyapi.com/api/character")
    const datos = await response.json()
    return datos.results
}

export const Main = () => {

    const { theme } = useContext(ThemeContext)

    const [ characters, setCharacters ] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await getDatos()

            setCharacters(data)
        }
        fetchData()
    },[])

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
        </SectionMain>
    )
}