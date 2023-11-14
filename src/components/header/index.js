import { Button } from "../button"
import ImgLogo from "../imgs/rick-and-morty.png"
import { useContext } from "react"
import { ThemeContext } from "../../contexts"
import { HeaderRAM, Logo } from "./styles"

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