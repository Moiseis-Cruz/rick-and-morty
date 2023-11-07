import React, { useState, useEffect } from "react";

async function getDatos() {
    const response = await fetch("https://rickandmortyapi.com/api/character")
    const datos = await response.json()
    return datos.results
}

console.log(await getDatos());

export const Main = () => {

    const [ character, setCharacter ] = useState({avatar: []})

    useEffect(() => {
        const fetchData = async () => {
            const data = await getDatos()

            setCharacter({avatar: data})
        }
        fetchData()
    },[])

    return(
        <section>
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
        </section>
    )
}