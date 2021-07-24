import React from 'react'
import { LargeText, SmallText } from '../Main/style'
import { Container, LeftSide, Image1, Image2, RightSide, Text, WrapperBtn, AppStoreBtn, AppleIcon, BtnRightSide, GoogleAppIcon } from './style'
import PhoneImg from '../../assets/img/iPhon11.png'

const Index = () => {
    return (
        <Container>
            <LeftSide>
                <Image1 src={PhoneImg} />
                <Image2 src={PhoneImg} />
            </LeftSide>
            <RightSide>
                <LargeText>
                    Endilikda <LargeText.Span>birzoom</LargeText.Span> bilan darslar<br />
                    oson va qulay
                </LargeText>
                <Text>
                    Birzoom ilovasidan foydalanib o’z bonuslaringizga ega bo’ling. 
                    Bonuslar kunlik qo’shilib boriladi.
                </Text>
                <WrapperBtn>
                    <AppStoreBtn>
                        <AppleIcon />
                        <BtnRightSide>
                            <BtnRightSide.LittleText>Download now</BtnRightSide.LittleText>
                            <BtnRightSide.MiddleText>App Store</BtnRightSide.MiddleText>
                        </BtnRightSide>
                    </AppStoreBtn>
                    <AppStoreBtn>
                        <GoogleAppIcon />
                        <BtnRightSide>
                            <BtnRightSide.LittleText>Download now</BtnRightSide.LittleText>
                            <BtnRightSide.MiddleText>Google Play</BtnRightSide.MiddleText>
                        </BtnRightSide>
                    </AppStoreBtn>
                </WrapperBtn>

            </RightSide>
        </Container>
    )
}

export default Index
