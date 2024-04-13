import { useContext } from "react";
import { ThemeContext, themes } from "../../contexts";
import { BtnTogglerThemes } from "./styles";

export const Button = (props) => {

    const { theme, setTheme } = useContext(ThemeContext)

    const handleTheme = ()=> {setTheme(theme === themes.light ? themes.dark : themes.light)}

    return(
        <BtnTogglerThemes onClick={handleTheme} {...props} theme={theme} />
    )
};