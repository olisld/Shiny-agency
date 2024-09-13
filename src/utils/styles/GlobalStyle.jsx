import { useContext } from "react";
import { ThemeContext } from "../context/index"
import { createGlobalStyle } from "styled-components";

const StyledGlobalStyle=createGlobalStyle((props)=>`
    * {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
 
    body {
        /* Ici cette syntaxe revient au même que
        background-color: ${props.isDarkMode ? '#2F2E41' : 'white'};
        */
        background-color: ${props.isDarkMode ? '#2F2E41' : 'white'};
        // color:${props.isDarkMode ? '#2F2E41':'white'}
        margin: 0;  
    }
`)
function GlobalStyle(){
    const {theme}=useContext(ThemeContext)

    // const isDarkMode = theme === 'dark';

    return <StyledGlobalStyle isDarkMode={theme === 'dark'}/>
}
export default GlobalStyle