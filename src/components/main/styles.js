import styled from "styled-components";

export const SectionMain = styled.div`
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.backgroundColor};
    background-image: ${props => props.theme.backgroundImage};
    width: 100%;
    max-width: 1440px;
    padding: 30px 0;
    margin: auto;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

export const ListCharacters = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    justify-content: center;
`

export const Cards = styled.div`
    border: ${props => props.theme.border};
    width: 300px;
    text-align: center;
    border: 3px solid black;
    border-radius: 8px;
    overflow: hidden;
    padding: 8px;
    background-color: rgb(157,185,209);
    &:hover{
        transform: scale(1.1);
        box-shadow: 0 0 20px 20px black;
    }
`

export const TitleCards = styled.h2`
    font-weight: 900;
`

export const ContainerBtns = styled.div`
    display: flex;
    justify-content:center;
    gap: 5px;
    margin: 30px auto 0;
    padding: 30px 0;
    max-width: 400px;
`

export const BtnPage = styled.button`
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.backgroundColor};
    border: ${props => props.theme.border};
    width: 180px;
    height: 40px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 0 15px 15px 0;
    &:first-child{
        border-radius: 15px 0 0 15px ;
    }
    &:active{
        transform: scale(1.1);
    }
    &:disabled{
        opacity: 0.4;
        cursor: not-allowed;
        transform: scale(1);
        box-shadow: none;
    }
`