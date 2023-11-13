import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../contexts";
import { Link } from "react-router-dom";


const Main = () => {
    const { theme } = useContext(ThemeContext)

    const [characters, setCharacters] = useState([])

    async function getData() {
        const response = await fetch("https://rickandmortyapi.com/api/character")
        const data = await response.json()
        return data.results
    }

    const fetchData = async () => {
        const data = await getData()
        if (data) {
            setCharacters(data)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <SectionMain style={{ color: theme.color, backgroundColor: theme.backgroundColor }}>
            <ul>
                {
                    characters.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link style={{ color: theme.color, backgroundColor: theme.backgroundColor }} to={`/card/${item.id}`}>
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

const SectionMain = styled.section`
    width: 100%;
    max-width: 1440px;
    padding-top: 30px;
    margin: auto;
`

export default Main;