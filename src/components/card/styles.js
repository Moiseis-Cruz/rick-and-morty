import styled from "styled-components";

export const SectionCard = styled.section`
    width: 100%;
    max-width: 1440px;
    margin: auto;
    height: calc(100vh - 120px);
`

export const SectionContainer = styled.div`
    height: 100%;
`

export const ContainerLink = styled.div`
    text-align: center;
    padding-top: 20px;
`

export const ContainerCard = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-weight: 600;
`

export const CardCharater = styled.div`
    width: 600px;
    display: flex;
    gap: 10px;
    background-color: darkgrey;
`

export const TitleCard = styled.h1`
    font-weight: 600;
    margin-top: 15px;
`

export const FontBolder = styled.span`
    font-weight: 900;
`