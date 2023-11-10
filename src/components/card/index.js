import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../contexts";
import { useParams, Link } from "react-router-dom";

async function getDatos(id) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const datos = await response.json()
    return datos
}

export const Card = () => {

    const { id } = useParams()

    const { theme } = useContext(ThemeContext)

    const [ character, setCharacter ] = useState([])
    console.log(character);

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
                    <Link style={{color: theme.color, backgroundColor: theme.backgroundColor}} to='/'>Votal a tela inicial</Link>
                    <div>
                        <img src={character.image} />
                        <h2>{character.name}</h2>
                        <p>{character.species}</p>
                        <p>{character.status}</p>
                    </div>
                </li>
            </ul>
        </section >
    )
}