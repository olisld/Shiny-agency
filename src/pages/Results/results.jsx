import styled from "styled-components"
import { Link } from "react-router-dom"
import colors from "../../utils/styles/color"
import { useContext } from "react"
import { SurveyContext } from "../../utils/context"
const StyledContainer=styled.div`

    width:1200px;
    height:500px;
    background-color:#F9F9FC;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-top:60px;
    margin:0 auto;
`
const ContainerFather=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh; 
    width:100%;
    background-color: #fff;
    font-family:Comfortaa;

`
const StyledSpan=styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const StyledTitleColorBlue=styled.span`
    color: #5843E4;
`
const StyledLink=styled(Link)`
    color: white;
    border-radius: 30px;
    background-color: ${colors.primary};
    display:flex;
    align-items:center;
    width:300px;
    height:30px;
    justify-content:center;
    text-decoration:none;
    &:hover{
        box-shadow: 5px 5px 10px #e2e3e9;
    }
        

`
const StyledTitlePolice=styled.h1`
    line-height:35px;
    font-weight:550;
    font-size:31px;
    margin-bottom:50px;
`
const StyledParagraphe=styled.p`
    color:#8186A0;
    margin-bottom:30px
`
const StyledContainerLink=styled.div`
    margin-bottom:40px


`
function Results(){
    const {answers}=useContext(SurveyContext)
    console.log(answers)
    return(
        <ContainerFather>
            <StyledContainer>
                <StyledTitlePolice>
                    Les compétences dont vous
                    <StyledSpan> avez besoin :&nbsp; <StyledTitleColorBlue>UX Design,</StyledTitleColorBlue></StyledSpan>
                    <StyledSpan><StyledTitleColorBlue>frontend, backend</StyledTitleColorBlue></StyledSpan>
                </StyledTitlePolice>
                
                <StyledContainerLink>
                    <StyledLink to={'/freelance'}>Découvrer nos profils</StyledLink>
                </StyledContainerLink>
                <div>
                    <StyledParagraphe>
                        <StyledTitleColorBlue>UX Design</StyledTitleColorBlue><br />
                        Le rôle de l’UX est de Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    </StyledParagraphe>
                    <StyledParagraphe>
                        <StyledTitleColorBlue>Frontend</StyledTitleColorBlue><br />
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud<br /> exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    </StyledParagraphe>
                    <StyledParagraphe><StyledTitleColorBlue>Backend</StyledTitleColorBlue><br />
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit<br /> esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat<br /> cupidatat non proident, sunt in culpa qui officia deserunt mollit<br /> anim id est laborum.
                    </StyledParagraphe>
                </div>
            </StyledContainer>
        </ContainerFather>
    )
}
export default Results