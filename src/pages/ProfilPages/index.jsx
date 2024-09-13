import { useParams } from "react-router-dom"
import freelanceProfiles from "../Freelance"
import DefaultPicture from "../../assets/profile.png"
import styled from "styled-components"

const ContainerFather=styled.div`
    display:flex;
    justify-content:center;

`
const StyledProfiles=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#F9F9FC;
    width:1200px;
    height:400px;

`
const StyledImg=styled.img`
    width:200px;
    height:200px;
    margin-right:100px;
    margin-top:30px;

`
const StyledOnProfiles=styled.div`
    display:flex;
    justify-content:center;
    width:100%;
`
const StyledProfileInfo=styled.div`
    margin-right:30px;
    h2,h3,div{
        white-space:nowrap;
    }
`
const StyledReactDiv=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:50px;
    height:20px;
    border-radius:6px;
    border:1px solid black;
    font-size:13px;
    font-weight:600;
    margin-right:5px;
`
const StyledContainerReactDiv=styled.div`
    display:flex;
    align-items:center;
    margin-bottom:10px;
`
const GreenPoint=styled.div`
    background-color:#57B894;
    width:10px;
    height:10px;
    margin-right:5px;
    border-radius:10px;
    margin-top:3px;
`
const GreenPointContainer=styled.div`
    display:flex;
    align-items:center;
`
const GreenPointInfo=styled.div`
    font-weight:600;
    font-size:16px
`
const StyledLocalisation=styled.h3`
    color:#8186A0;
    white-space:nowrap;
    font-size:16px;
    margin-top:25px;
    font-weight:600;
`
function Profils(){
    const {id}=useParams()
    const profile=freelanceProfiles.find(profile=>profile.id===id)

    if(!profile){
        return(
            <div>Profil non trouvé</div>
        )
    }
    return(
        <ContainerFather>
            <StyledProfiles>
                <StyledOnProfiles>
                    <StyledImg src={DefaultPicture} alt="profil"/>
                    <StyledProfileInfo>
                        <h2>{profile.name}</h2>
                        <h3>{profile.jobTitle}</h3>
                        <StyledContainerReactDiv>
                            <StyledReactDiv>React</StyledReactDiv>
                            <StyledReactDiv>React</StyledReactDiv>
                            <StyledReactDiv>React</StyledReactDiv>
                        </StyledContainerReactDiv>
                        <GreenPointContainer>
                            <GreenPoint></GreenPoint>
                            <GreenPointInfo>Disponible maintenant</GreenPointInfo>
                        </GreenPointContainer>
                        <h2>550€ / Jour</h2>
                    </StyledProfileInfo>
                    <StyledLocalisation>Paris, France</StyledLocalisation>
                </StyledOnProfiles>
            </StyledProfiles>
        </ContainerFather>
    )
}
export default Profils