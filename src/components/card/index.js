import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../contexts";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

async function getDatos(id) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const datos = await response.json()
    return datos
}

export const Character = () => {

    const { id } = useParams()

    const { theme } = useContext(ThemeContext)

    const [ character, setCharacter ] = useState()
    // console.log(character);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getDatos(id)

            setCharacter(data)
        }
        fetchData()
    },[])

    return(
        <SectionCard>
            <section style={{color: theme.color, backgroundColor: theme.backgroundColor}}>
                    <Link style={{color: theme.color, backgroundColor: theme.backgroundColor}} to='/'>Votal a tela inicial</Link>
                    {character ? <div>
                        <img src={character.image} />
                        <h1>Name: {character.name}</h1>
                        <p>Species: {character.species}</p>
                        <p>Status: {character.status}</p>
                        <p>Origin: {character.origin.name}</p>
                        <p>Location: {character.location.name}</p>
                    </div> : <p>Personagem não encontrado</p>}
                    
            </section >
        </SectionCard>
        
    )
}

const SectionCard = styled.section`
    width: 100%;
    max-width: 1440px;
    margin: auto;
`