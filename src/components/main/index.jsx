import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../contexts";
import { Link } from "react-router-dom";
import { SectionMain, ListCharacters, Cards, TitleCards, ContainerBtns, BtnPage } from "./styles";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import { getDatos } from "../../services";

export const Main = () => {

    const { theme } = useContext(ThemeContext)

    const [ characters, setCharacters ] = useState([])
    const [ switchPages, setSwitchPages ] = useState(1)

    useEffect(() => {
        const fetchData = async () => {
            try{
                const data = await getDatos(switchPages)
                
                setCharacters(data)
            }catch(error){
                console.error("Error feching data", error)
            }
        }

        fetchData()
    },[switchPages])

    const switchBetweenPages = () => {
        setSwitchPages((prevPage => prevPage + 1))
    }

    const previousPage = () => {
        if(switchPages > 1){
            setSwitchPages((prevPage => prevPage - 1))
        }
    }

    return(
        <SectionMain style={{color: theme.color, backgroundColor: theme.backgroundColor, backgroundImage: theme.backgroundImage}}>
            <ListCharacters>
                {
                    characters.map((item, index) => {
                        return(
                            <li key={index}>
                                <Link style={{color: theme.color, backgroundColor: theme.backgroundColor}} to={`/card/${item.id}`}>
                                    <Cards style={{border: theme.border}}>
                                        <img src={item.image} />
                                        <TitleCards>{item.name}</TitleCards>
                                    </Cards>
                                </Link>
                            </li>
                        )
                    })
                }
            </ListCharacters>
            <ContainerBtns>
                <BtnPage onClick={previousPage} disabled={switchPages === 1} style={{color: theme.color, backgroundColor: theme.backgroundColor, border: theme.border}} ><GrCaretPrevious /> Previous Page</BtnPage>
                <BtnPage style={{color: theme.color, backgroundColor: theme.backgroundColor, border: theme.border}} onClick={switchBetweenPages}>Next Page <GrCaretNext /> </BtnPage>
            </ContainerBtns>
        </SectionMain>
    )
}