import styled from "styled-components"

export const HeaderRAM = styled.header`
    background-color: ${props => props.theme.backgroundColor};
    background-image: ${props => props.theme.backgroundImage};
    width: 100%;
    max-width: 1440px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    margin: auto;
`

export const Logo = styled.img`
    width: 200px;
    height: auto;
`