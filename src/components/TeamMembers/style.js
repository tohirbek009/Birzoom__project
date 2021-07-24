import styled from 'styled-components'
import {ReactComponent as Undov} from '../../assets/icons/undov.svg'


export const Container = styled.div`
padding: 10px 165px;
position: relative;
`

export const UndovIcon = styled(Undov)`
position: absolute;
bottom: -250px;
left: -40px;
transform: rotateY(180deg) scale(1.5);
`


export const Card = styled.div`
padding: 40px 38px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background: var(--team-card-bg-color);
height: 295px;
width: 259px;
border-radius: 8px;
box-sizing: border-box;
`

Card.ImgWrapper = styled.div`
width: 96px;
height: 96px;
border-radius: 50%;
`
Card.ImgWrapper.Img = styled.img`
width: 100%;
`

Card.Name = styled.div`
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 133%;
text-align: center;
letter-spacing: -0.01em;
font-feature-settings: 'tnum' on, 'lnum' on;
color: #011640;
`

Card.Info = styled.div`
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 20px;
text-align: center;
letter-spacing: -0.01em;
font-feature-settings: 'tnum' on, 'lnum' on;
color: #828282;
`