import styled from "styled-components"
import { Button } from "../button"
import ImgLogo from "../imgs/rick-and-morty.png"
import { useContext } from "react"
import { ThemeContext } from "../../contexts"
import { MdDarkMode } from 'react-icons/md'
import { BsFillSunFill } from 'react-icons/bs'

export const Header = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <HeaderRAM style={{ color: theme.color, backgroundColor: theme.backgroundColor }}>
            <Logo src={ImgLogo} />
            <Button>
                Mudar Tema {theme.name === 'dark' ? <MdDarkMode /> : <BsFillSunFill />}
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

    button{
        padding: 10px 20px;
        font-size: 1.2rem;
        border-radius: 5px;
        display: flex;
        align-items: center;
        gap: 10px;

    }
`

const Logo = styled.img`
    width: 200px;
    height: auto;
`