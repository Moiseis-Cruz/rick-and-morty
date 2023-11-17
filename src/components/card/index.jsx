import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../contexts";
import { useParams, Link } from "react-router-dom";
import { SectionCard, ContainerCard, CardCharater, SectionContainer } from "./styles";
import { IoHome } from "react-icons/io5";

async function getDatos(id) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const datos = await response.json()
    return datos
}

export const Character = () => {

    const { id } = useParams()

    const { theme } = useContext(ThemeContext)

    const [ character, setCharacter ] = useState()
    console.log(character);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getDatos(id)

            setCharacter(data)
        }
        fetchData()
    },[])

    return(
        <SectionCard>
            <SectionContainer style={{color: theme.color, backgroundColor: theme.backgroundColor}}>
                <Link style={{color: theme.color, backgroundColor: theme.backgroundColor}} to='/'><IoHome /> Votal a tela inicial</Link>
                <ContainerCard>
                    {character ? <CardCharater>
                        <div style={{width: '300px'}}>
                            <img src={character.image} />
                        </div>
                        <div>
                            <h1>Name: {character.name}</h1>
                            <p>Species: {character.species}</p>
                            <p>Status: {character.status}</p>
                            <p>Origin: {character.origin.name}</p>
                            <p>Location: {character.location.name}</p>
                        </div>
                    </CardCharater> : <p>Personagem não encontrado</p>}
                </ContainerCard>
            </SectionContainer>
        </SectionCard>
        
    )
}