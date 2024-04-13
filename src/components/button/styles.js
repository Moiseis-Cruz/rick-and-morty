import styled from "styled-components";

export const BtnTogglerThemes = styled.a`
    color: ${props => props.theme.color};
    font-size: 30px;
    cursor: pointer;
    &:hover{
        transform: scale(1.2);
    };&:active{
        transform: scale(1);
        opacity: 0.8;
    }
`