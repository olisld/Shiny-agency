import PropTypes from 'prop-types'
// import DefaultPicture from '../../assets/profile.png'
import styled from 'styled-components'
import colors from '../../utils/styles/color'
import { Link } from 'react-router-dom'

const CardLabel= styled.span`
    color: #5843e4;
    font-size: 20px;
    font-weight: 400;
`
const CardImage=styled.img`
    height: 120px;
    width: 120px;
    border-radius: 50%;
`
const Cardwrapper=styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: ${colors.backgroundLights};
    border-radius: 30px;
    width: 300px;
    height:300px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`
const StyledCenter=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height:100%;
    margin-top:40px

`
const LabelWrapper = styled.div`
    margin-top: 15px;
    margin-left:10px
`
const StyledSpan=styled.span`
    padding-top:55px;
    font-size:28px;
    font-weight:400;
`
function Card({ label, title, id, picture }) {
    return (
        <Link to={`/profil/${id}`}>
            <Cardwrapper >
                <LabelWrapper>
                    <CardLabel>{label}</CardLabel>
                </LabelWrapper>
                <StyledCenter>
                    <CardImage src={picture} alt="freelance" />
                    <StyledSpan>{title}</StyledSpan>
                </StyledCenter>
            </Cardwrapper>
        </Link>
    )
}
//Permet d'augmenter la comprehension et la sécurité du code en forçant un type pour les props et affichant un message dans la console si ce type n'est pas srespécter nottamment si plusieurs personnes travaillent sur le même code cela permet de ne pas se mettre des batons dans les roues et respecterle code qu'une autre personne a élaboré.
Card.propTypes={
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
} 
// D'après la console la methode defaultProps sera supprimé dans une mise à jour prochaine et il est donc intéressant de se pencher sur quelle sera la méthode recommandé pour indiquer une prop par défaut

export default Card