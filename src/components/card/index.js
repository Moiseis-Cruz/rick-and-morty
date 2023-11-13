import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ character }) => {

    return (
        <section >
            <Link to='/'>Votal a tela inicial</Link>
            {character ?
                <div>
                    <img src={character.image} alt={character.name} />
                    <h1>Name: {character.name}</h1>
                    <p>Species: {character.species}</p>
                    <p>Status: {character.status}</p>
                    <p>{character.created}</p>
                    <p>{character.location.name}</p>
                </div>
                :
                <p>Personagem não encontrado</p>}
 


        </section >
    )
}
