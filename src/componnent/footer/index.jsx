import colors from "../../utils/styles/color"
import styled from "styled-components"
import { useContext } from "react"
import { ThemeContext } from "../../utils/context/index"

const FooterContainer=styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 60px;
    margin-bottom: 30px;
`
const NightModeButton=styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${colors.secondary};
`
function Footer(){
    const {toggleTheme,theme}=useContext(ThemeContext)
    console.log('current theme:', theme)
    return(
    <FooterContainer>
        <NightModeButton onClick={toggleTheme}>
            Changer de mode : {theme=== 'light' ? '☀️': '🌙'}
        </NightModeButton>
    </FooterContainer>
    )
}
export default Footer