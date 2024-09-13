import styled from "styled-components"
import DefaultPicture from '../../assets/undraw_page_not_found_su7k 1.svg'
const ContainerFather=styled.div`
    display:flex;
    justify-content:center;
`
const ErrorContainer=styled.div`
    width:1200px;
    height:800px;
    background-color:#F9F9FC;
    display:flex;
    align-items:center;
    flex-direction:column;
    padding-top:50px;
`
const StyledImg=styled.img`
    width:800px;
    height:400px;
    margin-top:40px;
    margin-bottom:40px;
`
const StyledTItle=styled.h3`
    color:#2F2E41;

`
function Error(){
    return(
        <ContainerFather>
            <ErrorContainer>
                <StyledTItle>Oups...</StyledTItle>
                <StyledImg src={DefaultPicture} alt="logo"/>
                <StyledTItle>Il semblerait qu'il y ait un problème</StyledTItle>
            </ErrorContainer>
        </ContainerFather>
    )

}
export default Error