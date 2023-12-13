const controller = new AbortController()

async function getDatos(page) {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        const dados = await response.json()
        return dados
    } catch (error) {
        if(error.response?.status === 404 || error.message === "Network Error") {
            controller.abort();
        } else {
            console.error("Erro não tratado:", error);
            throw error;
        }
        
    }
}

async function getData(id) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const datos = await response.json()
    return datos
}

export { getDatos, getData }