import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../contexts";
import { useParams, Link } from "react-router-dom";
import { SectionCard, ContainerCard, ContainerLink, CardCharater, SectionContainer } from "./styles";
import { IoHome } from "react-icons/io5";
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
                <ContainerLink>
                    <Link style={{color: theme.color, backgroundColor: theme.backgroundColor}} to='/'><IoHome /> Voltar a tela inicial</Link>
                </ContainerLink>
                <ContainerCard>
                    {character ? <CardCharater>
                        <div style={{width: '300px'}}>
                            <img src={character.image} />
                        </div>
                        <div>
                            <TitleCard><FontBolder>Name:</FontBolder> {character.name}</TitleCard>
                            <p><FontBolder>Species:</FontBolder> {character.species}</p>
                            <p><FontBolder>Status:</FontBolder> {character.status}</p>
                            <p><FontBolder>Origin: </FontBolder>{character.origin.name}</p>
                            <p><FontBolder>Location:</FontBolder> {character.location.name}</p>
                        </div>
                    </CardCharater> : <p>Personagem não encontrado</p>}
                </ContainerCard>
            </SectionContainer>
        </SectionCard>
        
    )
}

const TitleCard = styled.h1`
    font-weight: 600;
`

const FontBolder = styled.span`
    font-weight: 900;
`