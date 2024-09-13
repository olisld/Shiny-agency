// import '../../styles/survey.css'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useState, useEffect,useContext } from 'react'
import { SurveyContext } from '../../utils/context'
import { Loader } from '../../utils/styles/atom'
import colors from '../../utils/styles/color'
const StyledContainer=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:100px
`
// const StyledSpan=styled.span`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     text-align: center;
// `

const StyledTitle=styled.h2`
    line-height:30px;
    border-bottom: 2px solid #5843E4;
    margin-bottom:40px;
`
const StyledChoice=styled.button`
    display:flex;
    justify-content:center;
    align-items:center;
    width:200px;
    height:60px;
    border-radius:25px;
    background-color:#F9F9FC;
    box-sizing:border-box;
    box-shadow: ${(props) =>
    props.$selected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
    &:hover {
        cursor:pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
        border: 2px solid #5843E4
    }
`
const StyledContainerChoice=styled.div`
    width:500px;
    justify-content:space-around;
    display:flex;
    flex-direction:row;
    margin-bottom:30px;
`
const StyledContainerSkip=styled.div`
    width:300px;
    justify-content:space-around;
    display:flex;
    margin-right:10px;
    a {
        color: #2F2E41; 
        text-decoration: none; 
    }

    a:hover {
        text-decoration: underline; 
    }
`
// const GreenSpan=styled.span`
//     color:green;

// `
function Survey() {
    const {questionNumber}= useParams()
    let CurrentQuestionNumber=parseInt(questionNumber)
    const prevQuestionNumber = CurrentQuestionNumber === 1 ? 1 : CurrentQuestionNumber-1
    const nextQuestionnumber = CurrentQuestionNumber+1
    const [surveyData, setSurveyData] = useState({})
    const[isDatataLoading,SetDataLoading]=useState(false)
    const {answers, saveAnswers}=useContext(SurveyContext)
    function saveReply(answer){
        saveAnswers({ [questionNumber]: answer })
    }
    //Première syntaxe pr envoyer des requêtes à l'API

    // useEffect(() => {
    //     SetDataLoading(true)
    //     fetch(`http://localhost:8000/survey`)
    //          .then((response) => response.json())
    //          .then(({ surveyData }) => {
    //             setSurveyData(surveyData); // Met à jour l'état avec les données de l'API
    //             SetDataLoading(false)
    //             })
    //          .catch((error) => console.log(error))
         
    //  }, [])

    //Deuxième syntaxe pour envoyer des requêtes à l'API normalement plus conventionelle et adapté 
      useEffect(()=>{
        async function fetchData(){
            SetDataLoading(true)
            try{
                const response=await fetch(`http://localhost:8000/survey`)
                const {surveyData} = await response.json()
                setSurveyData(surveyData)
            }
            catch(error){
                console.log(error)

            }
            finally{
                SetDataLoading(false)
            }

        }
        fetchData()
      },[])
      

    return (
        <StyledContainer>
            <StyledTitle>Question {questionNumber}</StyledTitle>
            
            <p>{isDatataLoading?<Loader/>: surveyData[questionNumber]} </p>
            <StyledContainerChoice>
                <StyledChoice onClick={()=>saveReply(true)}
                $selected={answers[questionNumber]===true}>
                    Oui
                </StyledChoice>
                <StyledChoice onClick={()=>saveReply(false)} 
                $selected={answers[questionNumber]===false}>
                    Non
                </StyledChoice>
            </StyledContainerChoice>
            <StyledContainerSkip>
                
                <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
                {surveyData[nextQuestionnumber] ?(
                    <Link to={`/survey/${nextQuestionnumber}`}>Suivant</Link>
                ):(
                    <Link to={'/results'}>Résultat</Link>
                )}
                
                
            </StyledContainerSkip>
        </StyledContainer>
    )
}

export default Survey