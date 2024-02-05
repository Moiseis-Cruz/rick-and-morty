import React, { useEffect, useContext } from "react";
import { ThemeContext } from "../../contexts";
import { SectionMain, ListCharacters, LinkCards, Cards, TitleCards, ContainerBtns, BtnPage } from "./styles";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";

export const Main = () => {

    const { theme, characters, fetchData, page, hasNextPage } = useContext(ThemeContext)

    useEffect(() => {
        fetchData()
    },[])

    return(
        <SectionMain theme={theme}>
            <ListCharacters>
                {
                    characters?.map((item, index) => {
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
                <BtnPage onClick={() => {
                    window.location.replace(`/?page=${page - 1}`)
                }}
                theme={theme} disabled={page === 1}><GrCaretPrevious /> Previous Page</BtnPage>
                <BtnPage onClick={() => {
                    window.location.replace(`/?page=${page + 1}`)
                }} theme={theme} disabled={!hasNextPage}>Next Page <GrCaretNext /> </BtnPage>
            </ContainerBtns>
        </SectionMain>
    )
}