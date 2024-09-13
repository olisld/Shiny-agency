import { Link } from "react-router-dom";
// import '../../styles/header.css'
import styled from "styled-components";
import colors from "../../utils/styles/color";
import logo from '../../assets/dark-logo.png'


const StyledLink=styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    border-radius:20px;
    &:hover{
        box-shadow: 5px 5px 10px #e2e3e9;
            }
    ${(props)=>
        props.$isFullLink &&`
            color: white;
            border-radius: 30px;
            background-color: ${colors.primary};
            height: 5px;
            display:flex;
            align-items:center;
            width:120px;
            justify-content:center;
            margin-left:10px;
            &:hover{
                box-shadow: 5px 5px 10px #e2e3e9;
            }
        `
    }
`
const StyledHeader=styled.div`
    display: flex;
    align-item: center;
    justify-content:space-between;
`

const StyledNav=styled.nav`
    display:flex;
    align-items:center;
    margin-top:10px;
    margin-right:20px;
`

const StyleImg=styled.img`
    width:187px;
    height:70px;
    margin-top:15px;
    margin-left:20px;
`
function Header(){  
    return(

        <StyledHeader>
            <Link to='/'><StyleImg src={logo} alt="logo" /></Link>
            <StyledNav>
                <StyledLink to='/'>Accueil</StyledLink>
                <StyledLink to='/freelance'>Profils</StyledLink>
                <StyledLink to='/survey/1' $isFullLink> Faire le test</StyledLink>
            </StyledNav>
        </StyledHeader>
    )

}
export default Header