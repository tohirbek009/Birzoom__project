import React from 'react'
import {Container, Wrapper, UndovIcon, HalfCircleIcon} from './style'
import GirlImg from '../../assets/img/girl.png'
import { RegistBtn } from '../Navbar/style'
import { MainRightBlock, MainLeftBlock, LargeText, SmallText } from '../Main/style'
const Index = ({isBilimUlashingSection}) => {
    return (
        <Container>
            <LargeText inCard={true} inCard_={true}>
                {
                    isBilimUlashingSection ? "Birzoomda bilim ulashing" : 'Darslar o’tish tartibi'
                }
            </LargeText>
            <Wrapper isBilimUlashing = {isBilimUlashingSection}>
            <MainRightBlock>
                {
                    isBilimUlashingSection ?<UndovIcon isBilimUlashing = {isBilimUlashingSection} className='animate__animated animate__flash animate__infinite'/> :<HalfCircleIcon isBilimUlashing = {isBilimUlashingSection}/>
                }
                <MainRightBlock.Img src={GirlImg}/>
            </MainRightBlock>
            <MainLeftBlock>
                {
                    isBilimUlashingSection ?<HalfCircleIcon isBilimUlashing = {isBilimUlashingSection}/> :<UndovIcon isBilimUlashing = {isBilimUlashingSection} className='animate__animated animate__pulse animate__infinite'/>
                }
                <LargeText style={{fontSize:'24px', marginBottom:'0'}}>
                   Lorem ipsum
                </LargeText>
                <SmallText>
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Mauris, mus ut curabitur 
                    vel. Ac mauris vel ultrices facilisi iaculis. 
                    Lobortis quis odio vulputate hac id eu purus. 
                    Netus non quam scelerisque at ut tristique purus 
                    et tincidunt. Morbi molestie justo, facilisis libero 
                    elementum, risus. Maecenas aliquam bibendum enim pulvinar 
                    turpis cursus ac feugiat. Nisi, pharetra mauris est leo 
                    eget sit tellus
                </SmallText>
                <RegistBtn lesson={true}>Darsga yozilish</RegistBtn>
            </MainLeftBlock>
            </Wrapper>
        </Container>
    )
}

export default Index
