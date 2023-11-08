import { useContext } from "react"
import { ThemeContext, themes } from "../../contexts"

export const Button = (props) => {

    const { theme, setTheme } = useContext(ThemeContext)

    return(
        <button onClick={()=> {setTheme(theme === themes.light ? themes.dark : themes.light)}} {...props} style={{color: theme.color, backgroundColor: theme.backgroundColor}} />
    )
}