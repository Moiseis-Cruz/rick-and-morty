import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../contexts";
import { useParams } from "react-router-dom";
import { SectionCard, BtnBack, ContainerCard, ContainerLink, CardCharater, ContainerImg, SectionContainer, TitleCard, FontBolder, DescriptionList } from "./styles";
import { IoHome } from "react-icons/io5";
import { getData } from "../../services";
import styled from "styled-components";

export const Character = () => {

    const { id } = useParams()

    const { theme } = useContext(ThemeContext)

    const [ character, setCharacter ] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData(id)

            setCharacter(data)
        }
        fetchData()
    },[])

    return(
        <SectionCard>
            <SectionContainer theme={theme}>
                <ContainerLink>
                    <BtnBack theme={theme} to='/'> <IoHome /> Voltar a tela inicial</BtnBack>
                </ContainerLink>
                <ContainerCard>
                    {character ? <CardCharater theme={theme}>
                        <ContainerImg>
                            <img src={character.image} />
                        </ContainerImg>
                        <ContentInformation>
                            <TitleCard><FontBolder>Name:</FontBolder> {character.name}</TitleCard>
                            <DescriptionList>
                                <li>
                                    <p><FontBolder>Species:</FontBolder> {character.species}</p>
                                </li>
                                <li>
                                    <p><FontBolder>Gender:</FontBolder> {character.gender}</p>
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
                        </ContentInformation>
                    </CardCharater> : <p>Personagem não encontrado</p>}
                </ContainerCard>
            </SectionContainer>
        </SectionCard>
        
    )
}

const ContentInformation = styled.div`
    background-color: brown;
    padding-left: 15px;
    @media (min-width: 580px) {
        padding: 0;
    }
`