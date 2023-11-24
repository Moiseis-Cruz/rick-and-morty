import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../contexts";
import { useParams } from "react-router-dom";
import { SectionCard, BtnBack, ContainerCard, ContainerLink, CardCharater, SectionContainer, TitleCard, FontBolder, DescriptionList } from "./styles";
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
            <SectionContainer style={{color: theme.color, backgroundColor: theme.backgroundColor, backgroundImage: theme.backgroundImage}}>
                <ContainerLink>
                    <BtnBack style={{color: theme.color, backgroundColor: theme.backgroundColor, border: theme.border}} to='/'> <IoHome /> Voltar a tela inicial</BtnBack>
                </ContainerLink>
                <ContainerCard>
                    {character ? <CardCharater>
                        <div style={{width: '300px'}}>
                            <img src={character.image} />
                        </div>
                        <div>
                            <TitleCard><FontBolder>Name:</FontBolder> {character.name}</TitleCard>
                            <DescriptionList>
                                <li>
                                    <p><FontBolder>Species:</FontBolder> {character.species}</p>
                                </li>
                                <li>
                                    <p><FontBolder>Status:</FontBolder> {character.status}</p>
                                </li>
                                <li>
                                    <p><FontBolder>Origin: </FontBolder>{character.origin.name}</p>
                                </li>
                                <li>
                                    <p><FontBolder>Location:</FontBolder> {character.location.name}</p>
                                </li>
                            </DescriptionList>
                        </div>
                    </CardCharater> : <p>Personagem não encontrado</p>}
                </ContainerCard>
            </SectionContainer>
        </SectionCard>
        
    )
}