import Card from '../../componnent/Card'
import styled from 'styled-components'
// import freelanceProfiles from '.'
import { useState , useEffect } from 'react'
import { Loader } from '../../utils/styles/atom'

const CardContainer =styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
`
const ContainerFather=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:30px;
    font-family:Trebuchet MS;


`
const StyledTitle=styled.h3`
    color:#2F2E41;
    font-size:30px;
    font-weight:500;
    margin-bottom:30px;
`
const StyledParagraphe=styled.p`
    margin-bottom:50px;
`


// Ici je boucle sur la base de donnée factice dans freelance en affichant Card le nombre de fois qu'il y a d'itération dans la boucle et en changeant ses valeurs en fonction du contenu de cette base de donnée
function Freelance(){
    const [profile,setProfile]=useState([])
    const [isLoading,setLoading]=useState(false)

    useEffect(()=>{
        async function fetchData(){
            setLoading(true)
            try{
                const response= await fetch('http://localhost:8000/freelances')
                const {freelancersList} = await response.json()
                setProfile(freelancersList)
                
            }
            catch(error){
                console.log(error)
            }
            finally{
                setLoading(false)
            }

        }
        fetchData()

    },[])

    return(
        <ContainerFather>
            <StyledTitle>Trouvez votre prestataire</StyledTitle>
            <StyledParagraphe>Chez Shiny nous réunissons tout les meilleurs profils pour vous</StyledParagraphe>
            <CardContainer>
                {isLoading?<Loader/>:
                profile.map((profile,index)=>(
                    
                    <Card
                        key={`${profile.name}-${index}`}
                        label={profile.job}
                        title={profile.name}
                        id={profile.id}
                        picture={profile.picture}
                    
                    />
                ))}
            </CardContainer>
        </ContainerFather>
    )
}
export default Freelance