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

    })

    return(
        <h1>Teste</h1>
    )
}