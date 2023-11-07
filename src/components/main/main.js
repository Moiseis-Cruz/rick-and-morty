async function getDatos() {
    const response = await fetch("https://rickandmortyapi.com/api/character")
    const datos = await response.json()
    return datos.results
}

console.log(await getDatos());

export const Main = () => {
    return(
        <h1>Teste</h1>
    )
}