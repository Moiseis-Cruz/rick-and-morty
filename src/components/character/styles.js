import { Link } from "react-router-dom";
import styled from "styled-components";

export const SectionCard = styled.section`
    /* width: 100%; */
    max-width: 1440px;
    margin: auto;
    min-height: calc(100vh - 120px);
    /* background-color: gray; */
    /* min-height: 100vh; */
    /* display: flex; */
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
    height: 100%;
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
    /* width: 100%; */
    /* height: 100%; */
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-weight: 600;
`

export const CardCharater = styled.div`
    border: ${props => props.theme.border};
    min-width: 300px;
    min-height: 300px;
    display: flex;
    /* gap: 10px; */
    flex-direction: column;
    /* background-color: rgb(14,42,76); */
    background-color: rgb(157,185,209);
    /* border: 3px solid black; */
`

export const ContainerImg = styled.div`
    width: 300px;
`

export const TitleCard = styled.h1`
    font-weight: 600;
    margin-top: 15px;
    min-height: 64px;
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