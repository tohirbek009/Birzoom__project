import React from 'react'
import styled from 'styled-components'
import {ReactComponent as Instagram} from '../assets/icons/instagram.svg'
import {ReactComponent as Telegram} from '../assets/icons/telegram.svg'
import {ReactComponent as Twitter} from '../assets/icons/twitter.svg'
import {ReactComponent as Facebook} from '../assets/icons/facebook.svg'
import { AppStoreBtn, WrapperBtn, AppleIcon, BtnRightSide, GoogleAppIcon } from '../components/BirzoomApps/style'

const Footer = () => {
    return (
        <Container>
            <FooterTop>
                <Info>
                    <Info.Title>Platforma</Info.Title>
                    <Info.Text href="#">Biz haqimizda</Info.Text>
                    <Info.Text href="#">Ta'riflar</Info.Text>
                    <Info.Text href="#">Kurslar haqida</Info.Text>
                    <Info.Text href="#">Blog</Info.Text>
                </Info>
                <Info>
                    <Info.Title>Ma'lumotlar</Info.Title>
                    <Info.Text href="#">Fikrlar</Info.Text>
                    <Info.Text href="#">FAQ</Info.Text>
                    <Info.Text href="#">Конфиденциальность</Info.Text>
                </Info>
                <Info>
                    <Info.Title>Ijtimoiy sahifamiz</Info.Title>
                    <Info.Text href="#">
                        <Instagram style={{marginRight:'6px'}} />
                        Instagram
                    </Info.Text>
                    <Info.Text href="#">
                        <Telegram style={{marginRight:'10px'}}/>
                        Telegram
                    </Info.Text>
                    <Info.Text href="#">
                        <Facebook style={{marginRight:'16px'}}/>
                        Facebook
                    </Info.Text>
                    <Info.Text href="#">
                        <Twitter style={{marginRight: '6px'}}/>
                        Twitter
                    </Info.Text>
                </Info>
                <Info>
                    <Info.Title>Dasturni yuklab olish</Info.Title>
                    <WrapperBtn footer={true}>
                    <AppStoreBtn footer={true}>
                        <AppleIcon footer={true}/>
                        <BtnRightSide>
                            <BtnRightSide.LittleText footer={true}>Download now</BtnRightSide.LittleText>
                            <BtnRightSide.MiddleText footer={true}>App Store</BtnRightSide.MiddleText>
                        </BtnRightSide>
                    </AppStoreBtn>
                    <AppStoreBtn footer={true}>
                        <GoogleAppIcon footer={true}/>
                        <BtnRightSide>
                            <BtnRightSide.LittleText footer={true}>Download now</BtnRightSide.LittleText>
                            <BtnRightSide.MiddleText footer={true}>Google Play</BtnRightSide.MiddleText>
                        </BtnRightSide>
                    </AppStoreBtn>
                </WrapperBtn>
                </Info>
            </FooterTop>
            <FooterBottom>
                <Info.Text>© 2021 Birzoom – Endi ta’lim birzumda!</Info.Text>
            </FooterBottom>
        </Container>
    )
}

const Container = styled.div`
padding-left: 165px;
padding-right: 165px;
background-color: var(--footer-bg-color);

`

const FooterTop = styled.div`
padding-top: 42px;
padding-bottom: 42px;
border-bottom: 1px solid #67708E;
display: flex;
justify-content: space-between;
align-items: flex-start;
`

const Info = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
`
Info.Title = styled.div`
font-family:sans-serif, 'Raleway';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 24px;
color: #FFFFFF;
`
Info.Text = styled.a`
font-family:sans-serif, 'Raleway';
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
text-decoration: none;
margin-top: 10px;
display: flex;
justify-content: space-between;
`

export const FooterBottom = styled.div`
padding-top: 32px;
padding-bottom: 32px;
display: flex;
justify-content: flex-start;
`

export default Footer
