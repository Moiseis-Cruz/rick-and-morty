import { useEffect, useState } from "react";
import { Card } from "../components/card";
import { useParams } from "react-router-dom";

export const CaracterPage = () => {
    const { id } = useParams()
    const [character, setCharacter] = useState()

    async function getData(id) {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const data = await response.json()
        return data
    }

    const fetchData = async () => {
        const data = await getData(id)
        if (data) {
            setCharacter(data)
        }
    }

    useEffect(() => {
        fetchData()
    }, [id])

    return (
        <Card character={character} />
    )
}