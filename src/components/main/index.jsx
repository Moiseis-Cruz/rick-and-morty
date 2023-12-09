import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../contexts";
import { SectionMain, ListCharacters, LinkCards, Cards, TitleCards, ContainerBtns, BtnPage } from "./styles";
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
        <SectionMain theme={theme}>
            <ListCharacters>
                {
                    characters.map((item, index) => {
                        return(
                            <li key={index}>
                                <LinkCards theme={theme} to={`/card/${item.id}`}>
                                    <Cards theme={theme}>
                                        <img src={item.image} />
                                        <TitleCards>{item.name}</TitleCards>
                                    </Cards>
                                </LinkCards>
                            </li>
                        )
                    })
                }
            </ListCharacters>
            <ContainerBtns>
                <BtnPage onClick={previousPage} theme={theme} disabled={switchPages === 1} ><GrCaretPrevious /> Previous Page</BtnPage>
                <BtnPage onClick={switchBetweenPages} theme={theme}>Next Page <GrCaretNext /> </BtnPage>
            </ContainerBtns>
        </SectionMain>
    )
}