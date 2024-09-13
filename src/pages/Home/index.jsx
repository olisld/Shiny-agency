// import '../../styles/home.css'
import styled from "styled-components";
import image from '../../assets/home-illustration.svg'
import { Link } from "react-router-dom";
import colors from "../../utils/styles/color";
//Régler le style pour qu'il soit adaptatif a d'autre taille d'écran cad utilisé display flex pr centrer le composant au millieu
const ContainerFather=styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
`
const StyledLink=styled(Link)`
  color: white;
  border-radius: 30px;
  background-color: ${colors.primary};
  display:flex;
  align-items:center;
  width:220px;
  justify-content:center;
  height:40px;
  text-decoration:none;
`
const StyleContainer=styled.div`
  width:1150px;
  min-width:100vh;
  min-height:100vh;
  background-color:#F9F9FC;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top:80px;
  margin-left:50px;
`
const StyleParagraphe=styled.p`
  font-size:40px;
  font-weight:700;
  color:#2F2E41;
  line-height:70px;
  margin-right:40px
`
const StyleImg=styled.img`
  max-width: 40%; 
  height: auto;

`
function Home() {
  return(
    <ContainerFather>
      <StyleContainer>
        <div>
          <StyleParagraphe>Repérez vos besoins,<br/>
          on s’occupe du reste,<br/> avec les meilleurs<br/> talents</StyleParagraphe>
          <StyledLink to='/survey/1' $isFullLink> Faire le test</StyledLink>
        </div>
        <StyleImg src={image} alt="logo"/>
      </StyleContainer>
    </ContainerFather>
  )
}

export default Home;
