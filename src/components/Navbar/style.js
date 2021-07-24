import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const Container = styled.div`
width: 100%;
position: fixed;
padding: 20px 165px;
display: flex;
/* border: 1px solid black; */
justify-content: space-between;
box-sizing: border-box;
background-color: var(--main-bg-color);
z-index: 1000;
`

export const LogoImg = styled.img`
width: 165px;
height: 42px;
`

export const Nav = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

export const NavLink = styled(Link)`
color: var(--main-color);
text-decoration: none;
margin-right: 56px;
&:last-child{
    margin-right: 0 !important;
}
`

export const Registiration = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`


export const Languages = styled.div`
position: absolute;
top: 25px;
text-align: center;
border: 1px solid var(--main-color);
display: none;
transition: display 1s ease-in-out;
`

export const DownArrow = styled.img`
transition: all 0.3s ease-in-out;
`

export const SelectLang = styled.div`
position: relative;
border: 1px solid transparent;
&:hover ${Languages}{
    display: block;
} 
&:hover ${DownArrow}{
    transform: rotateZ(180deg);
}
`

export const SelectedLanguage = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
export const Language = styled.div`
color: var(--main-color);
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
letter-spacing: -0.01em;
font-feature-settings: 'tnum' on, 'lnum' on;
padding: 0 10px;
:hover{
    background-color: lightblue;
    cursor: pointer;
}
`


export const RegistBtn = styled.a`
padding: 14px 32px;
background: #FFCE00;
border-radius: 8px;
font-weight: 500;
font-size: 16px;
color: var(--main-color);
margin-left: ${({lesson}) => lesson ? '0px' : '30px'};
margin-top: ${({lesson}) => lesson ? '30px' : '0px'}
`

