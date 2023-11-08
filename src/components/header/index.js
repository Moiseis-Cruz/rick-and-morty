import styled from "styled-components"
import { Button } from "../button"
import ImgLogo from "../imgs/rick-and-morty.png"
import { useContext } from "react"
import { ThemeContext } from "../../contexts"

export const Header = () => {

    const { theme } = useContext(ThemeContext)

    return(
        <HeaderRAM style={{color: theme.color, backgroundColor: theme.backgroundColor}}>
            <Logo src={ImgLogo} />

            <Button>
                Mudar Tema
            </Button>
        </HeaderRAM>
    )
}

const HeaderRAM = styled.header`
    width: 100%;
    max-width: 1440px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    margin: auto;
`

const Logo = styled.img`
    width: 200px;
    height: auto;
`