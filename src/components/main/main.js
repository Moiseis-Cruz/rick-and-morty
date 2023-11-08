import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../contexts";

async function getDatos() {
    const response = await fetch("https://rickandmortyapi.com/api/character")
    const datos = await response.json()
    return datos.results
}

console.log(await getDatos());

export const Main = () => {

    const { theme } = useContext(ThemeContext)

    const [ character, setCharacter ] = useState({avatar: []})

    useEffect(() => {
        const fetchData = async () => {
            const data = await getDatos()

            setCharacter({avatar: data})
        }
        fetchData()
    },[])

    return(
        <SectionMain style={{color: theme.color, backgroundColor: theme.backgroundColor}}>
            <ul>
                {
                    character.avatar.map((item, index) => {
                        return(
                            <li key={index}>
                                <div>
                                    <img src={item.image} />
                                    <h2>{item.name}</h2>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </SectionMain>
    )
}

const SectionMain = styled.section`
    width: 100%;
    max-width: 1440px;
    padding-top: 30px;
    margin: auto;
    background-color: red;
`