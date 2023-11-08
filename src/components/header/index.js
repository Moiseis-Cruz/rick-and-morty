import { Button } from "../button"
import ImgLogo from "../imgs/rick-and-morty.png"

export const Header = () => {
    return(
        <header>
            <img src={ImgLogo} />

            <Button>
                Mudar Tema
            </Button>
        </header>
    )
}