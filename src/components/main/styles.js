import styled from "styled-components";

export const SectionMain = styled.section`
    width: 100%;
    max-width: 1440px;
    padding: 30px 0;
    margin: auto;
    background-color: purple;
`

export const ListCharacters = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    justify-content: center;
`

export const ContainerBtns = styled.div`
    display: flex;
    justify-content:center;
    gap: 5px;
    // background-color: red;
    margin: 30px auto 0;
    padding: 30px 0;
    max-width: 400px;

`

export const BtnPage = styled.button`
    width: 180px;
    height: 40px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`