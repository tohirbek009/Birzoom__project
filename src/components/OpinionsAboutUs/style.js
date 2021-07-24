import styled from 'styled-components'
import {ReactComponent as HalfCircle} from '../../assets/icons/half_circle.svg'

export const Container = styled.div`
padding: 120px 260px;
background: #ffffff;
`

export const Card = styled.div`
padding-left: 80px;
padding-right: 80px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`
Card.ImgWrapper = styled.div`
width: 128px;
height: 128px;
border-radius: 50%;
border: 4px solid #FFCE00;
box-sizing: border-box;
`

Card.ImgWrapper.Img = styled.img`
width: 100%;
`

Card.Name = styled.div`
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;
text-align: center;
color: #011640;
margin-top: 20px;
`

Card.Info = styled.div`
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
text-align: center;
color: #011640;
margin-top: 16px;
`


export const HalfCircleIcon = styled(HalfCircle)`
path{
    fill: #FFD4CC;
}
position: absolute;
left: ${({small}) => small && '-50px'};
right: ${({small}) => !small && "-60px"};
top: ${({small})=> small ? '2%' : '17%'};
transform: ${({small}) => !small && 'scale(2)'};
`