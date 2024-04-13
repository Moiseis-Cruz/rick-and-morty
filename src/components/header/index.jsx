import { Button } from "../button";
import ImgLogo from "../../imgs/rick-and-morty.png";
import { useContext } from "react";
import { ThemeContext } from "../../contexts";
import { HeaderRAM, Logo } from "./styles";
import { FaSun, FaMoon } from "react-icons/fa";

export const Header = () => {

    const { theme } = useContext(ThemeContext);

    return(
        <HeaderRAM theme={theme}>
            <Logo src={ImgLogo} />

            <Button>
                {theme.name === "light" ? < FaSun /> : <FaMoon />}
            </Button>
        </HeaderRAM>
    )
};