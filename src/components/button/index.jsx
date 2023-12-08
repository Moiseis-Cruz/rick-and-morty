import { useContext } from "react"
import { ThemeContext, themes } from "../../contexts"
import styled from "styled-components"

export const Button = (props) => {

    const { theme, setTheme } = useContext(ThemeContext)

    return(
        <BtnTogglerThemes onClick={()=> {setTheme(theme === themes.light ? themes.dark : themes.light)}} {...props} theme={theme} />
    )
}

const BtnTogglerThemes = styled.a`
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