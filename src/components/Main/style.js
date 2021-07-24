import styled, { keyframes } from 'styled-components'
import {ReactComponent as HalfCircle} from '../../assets/icons/half_circle.svg'
import {ReactComponent as Ellipse} from '../../assets/icons/ellipse.svg'
import {ReactComponent as Speaker} from '../../assets/icons/speaker.svg'
import {ReactComponent as Pupils} from '../../assets/icons/pupils.svg'
import {ReactComponent as Books} from '../../assets/icons/book.svg'
import {ReactComponent as ComeIn} from '../../assets/icons/come-in.svg'


export const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
padding: 145px 165px 100px 165px;
background-color: var(--main-bg-color);
`

export const MainLeftBlock = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
position: relative;
`




/*  SVG icons Style   */


export const SmHalfCircle = styled(HalfCircle)`
position: absolute;
path{
    fill: #FFD1BF;
}
left: -75px;
top: 10px;
`

export const MdHalfCircle = styled(HalfCircle)`
path{
    fill: #CCCDCC;
}
position: absolute;
top: -80px;
right: 20px;
transform: scale(1.6);
`

export const LgHalfCircle = styled(HalfCircle)`
path{
    fill: #FCD0CB;
}
position: absolute;
top: 70px;
right: -40px;
transform: rotateZ(150deg) scale(2.2);
`


export const FullCircle = styled(Ellipse)`
path{
    fill: #CCCDCC;
}
position: absolute;
transform: scale(0.6);
bottom: 100px;
right: -90px;
`

export const PupilsIcon = styled(Pupils)`
background-color: var(--btn-color);
margin-right: 15px;
padding: 5px;
border-radius: 50%;
`
export const SpeakerIcon = styled(Speaker)`
background-color: var(--btn-color);
margin-right: 15px;
padding: 5px;
border-radius: 50%;
`
export const BooksIcon = styled(Books)`
background-color: var(--btn-color);
margin-right: 15px;
padding: 5px;
border-radius: 50%;
`
export const ComeInIcon = styled(ComeIn)`
background-color: var(--btn-color);
margin-right: 15px;
padding: 5px;
border-radius: 50%;
`

/* SVG style ended */




export const LargeText = styled.div`
font-style: normal;
font-weight: bold;
font-size: ${({inCard}) => inCard ? '30px' : '42px'};
line-height: 60px;
letter-spacing: -0.01em;
font-feature-settings: 'tnum' on, 'lnum' on;
color: var(--main-color);
margin-bottom: ${({inCard}) => !inCard && '16px'};
text-align: ${({inCard_}) => inCard_ && 'center'};
margin-bottom: ${({inCard_}) => inCard_ && "30px"};
`
LargeText.Span = styled.span`
color: red;
`

export const SmallText = styled.div`
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 28px;
color: var(--main-color);
width: ${({inCard}) => !inCard && '540px'};
@keyframes halfCircle{
    0%{
        transform: rotateZ('angle');
    }
}
`


export const MainRightBlock = styled.div`
width: 448px;
height: 557px;
position: relative;
`

MainRightBlock.Img = styled.img`
width: 100%;
`

export const Statistics = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: -180px;
flex-wrap: wrap;
`

export const StatisticsCard = styled.div`
padding: 12px 0 12px 16px;
width: 240px;
background: #FFFFFF;
box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
border-radius: 8px;
display: flex;
justify-content: flex-start;
align-items: center;
`

export const CardInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`