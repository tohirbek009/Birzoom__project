import styled, { keyframes } from 'styled-components'
import {ReactComponent as HalfCircle} from '../../assets/icons/half_circle.svg'
import {ReactComponent as Undov} from '../../assets/icons/undov.svg'

export const Container = styled.div`
padding: 120px 165px;
`



/*  -----   SVG Icon style start  ------ */

export const LgHalfCircle = styled(HalfCircle)`
path{
    fill: #FCD0CB;
}
position: absolute;
bottom: -60px;
right: -40px;
transform: scale(2.2);
`
export const UndovIcon = styled(Undov)`
position: absolute;
left: -250px;
bottom: -180px;
transform: rotateY(180deg) scale(1);
`

/* --------  SVG Icon Style end   -------*/




export const CardWrapper = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
margin-top: 30px;
flex-wrap: wrap;
position: relative;
`

export const Card = styled.div`
width: 354px;
padding: 40px 38px;
background-color: var(--main-bg-color);
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
box-sizing: border-box;
`
Card.Header = styled.div`
width: 88px;
height: 88px;
background-color: var(--btn-color);
border-radius: 50%;
margin-bottom: 24px;
`
Card.Text = styled.div`
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
text-align: center;
letter-spacing: -0.01em;
font-feature-settings: 'tnum' on, 'lnum' on;
color: #828282;
`