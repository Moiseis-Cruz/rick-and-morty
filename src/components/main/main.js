async function getDatos() {
    const response = await fetch("https://rickandmortyapi.com/api/character")
    const datos = await response.json()
    return datos.results
}

export const Main = () => {
    return(
        <h1>Teste</h1>
    )
}