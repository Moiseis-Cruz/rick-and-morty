import { Link } from "react-router-dom";
import styled from "styled-components";

export const SectionCard = styled.section`
    width: 100%;
    max-width: 1440px;
    margin: auto;
    height: calc(100vh - 120px);
`

export const BtnBack = styled(Link)`
    display: inline-block;
    background-color: pink;
    width: 240px;
    height: 40px;
    line-height: 40px;
    font-weight: 600;
    border-radius: 25px;
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
    height: 300px;
    display: flex;
    gap: 10px;
    background-color: rgb(14,42,76);
    background-color: rgb(157,185,209);
    border: 3px solid black;
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