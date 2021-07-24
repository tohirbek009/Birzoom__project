import styled from 'styled-components'
import {ReactComponent as Apple} from '../../assets/icons/apple.svg'
import {ReactComponent as GoogleApp} from '../../assets/icons/google_app.svg'

export const Container = styled.div`
padding: 55px 280px 0 230px;
background-color: var(--team-card-bg-color);
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
`

export const LeftSide = styled.div`
position: relative;
width: 300px;
overflow: hidden;
`

export const Image1 = styled.img`
margin-right: auto;
margin-top: auto;
`

export const Image2 = styled.img`
position: absolute;
bottom: -50px;
right: 0;
`

export const RightSide = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`
export const Text = styled.div`
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 28px;
letter-spacing: -0.01em;
font-feature-settings: 'tnum' on, 'lnum' on;
color: #828282;
max-width: 476px;
`

export const WrapperBtn = styled.div`
display: flex;
margin-top: ${({footer}) => footer ?'10px' : '40px'};
flex-direction: ${({footer}) => footer && 'column'};
/* justify-content: space-between; */

`

export const AppStoreBtn = styled.div`
padding-left: 25px;
padding-top: ${({footer}) => footer ? '10px' : '16px'};
padding-bottom: ${({footer}) => footer ? '10px' : '16px'};
padding-right: ${({footer}) => footer ? '30px' : '50px'};
background-color: ${({footer}) => footer ? 'white' : 'var(--main-color)'};
display: flex;
justify-content: space-between;
align-items: center;
border-radius: 8px;
cursor: pointer;
margin-right: 24px;
:last-child{
    margin-top: ${({footer}) => footer && '16px'};
}
`

export const BtnRightSide = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`

BtnRightSide.LittleText = styled.div`
font-size: 12px;
color: ${({footer}) => footer ? 'black' : 'white'};
`

BtnRightSide.MiddleText = styled.div`
font-size: 18px;
color: ${({footer}) => footer ? 'black' : 'white'};
`

export const AppleIcon = styled(Apple)`
path{
    fill: ${({footer}) => footer ? 'black' : 'white'};
}
margin-right: ${({footer}) => footer ? '1px' : '20px'};
`

export const GoogleAppIcon = styled(GoogleApp)`
path{
    fill: ${({footer}) => footer ? 'black' : 'white'};
}
margin-right: ${({footer}) => footer ? '10px' : '20px'};
`