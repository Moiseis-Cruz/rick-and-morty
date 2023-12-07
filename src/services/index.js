async function getDatos(page) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    const datos = await response.json()
    return datos.results
}

async function getData(id) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const datos = await response.json()
    return datos
}

export { getDatos, getData }