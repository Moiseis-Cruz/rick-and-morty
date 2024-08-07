import { Link } from "react-router-dom";
import styled from "styled-components";

export const SectionCard = styled.section`
    max-width: 1440px;
    margin: auto;
`

export const BtnBack = styled(Link)`
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
    border: ${props => props.theme.border};
    display: inline-block;
    width: 240px;
    height: 40px;
    line-height: 40px;
    font-weight: 600;
    border-radius: 25px;
    &:hover{
        transform: scale(1.05);
    }
    &:active{
        transform: scale(1);
    }
`

export const SectionContainer = styled.div`
    min-height: calc(100vh - 120px);
    display: flex;
    padding: 30px 0;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    gap: 30px;
    background-color: ${props => props.theme.backgroundColor};
    background-image: ${props => props.theme.backgroundImage};
    color: ${props => props.theme.color};
`

export const ContainerLink = styled.div`
    text-align: center;
    padding-top: 20px;
`

export const ContainerCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-weight: 600;
`

export const CardCharater = styled.div`
    border: ${props => props.theme.border};
    width: 300px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    background-color: rgb(157,185,209);
    @media (min-width: 580px) {
        width: 600px;
        flex-direction: row;
    }
`

export const ContainerImg = styled.div`
    max-width: 300px;
`

export const TitleCard = styled.h1`
    font-weight: 600;
    margin-top: 15px;
    min-height: 64px;
`

export const ContentInformation = styled.div`
    padding-left: 15px;
    width: 100%;
    @media (min-width: 580px) {
        max-width: 300px;
    }
`

export const FontBolder = styled.span`
    font-weight: 900;
`

export const DescriptionList = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    gap: 15px;
`