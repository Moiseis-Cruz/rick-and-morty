import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../contexts";
import { useParams } from "react-router-dom";

async function getDatos(id) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const datos = await response.json()
    return datos
}

export const Card = () => {

    const { id } = useParams()

    const { theme } = useContext(ThemeContext)

    const [ character, setCharacter ] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await getDatos(id)

            setCharacter(data)
        }
        fetchData()
    },[])

    return(
        <section style={{color: theme.color, backgroundColor: theme.backgroundColor}}>
            <ul>
                <li>
                    <div>
                        <img src={character.image} />
                        <h2>{character.name}</h2>
                    </div>
                </li>
            </ul>
        </section >
    )
}