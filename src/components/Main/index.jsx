import React from 'react'
import {Container, LargeText, MainLeftBlock, MainRightBlock,Statistics,
    SmallText, SmHalfCircle, MdHalfCircle, LgHalfCircle, FullCircle,
    PupilsIcon, SpeakerIcon, BooksIcon, ComeInIcon, CardInfo, StatisticsCard} from './style'
import {RegistBtn} from '../Navbar/style'
import GirlImg from '../../assets/img/girl.png'
import {StatusData} from '../../mock/data'

const Index = () => {
    return (
        <Container>
            <MainLeftBlock>
                <SmHalfCircle className='animate__animated animate__rotateOut animate__infinite animate__duration-4s'/>
                <MdHalfCircle className='animate__animated animate__rotateIn animate__infinite'/>
                <LargeText>
                    Endi til <LargeText.Span>o'rganish</LargeText.Span>
                    <br/>
                    biz bilan yanada <LargeText.Span>oson!</LargeText.Span>
                </LargeText>
                <SmallText>
                Til o'rganishning tezkor, qiziqarli va samarali usuli
                </SmallText>
                <RegistBtn lesson={true}>Darsga yozilish</RegistBtn>
            </MainLeftBlock>
            <MainRightBlock>
                <LgHalfCircle className="animate__animated animate__jackInTheBox animate__infinite" />
                <FullCircle className='animate__animated animate__bounce animate__infinite'/>
                <MainRightBlock.Img src={GirlImg}/>
            </MainRightBlock>
            <Statistics>
                {
                    StatusData.map((value) => (
                        <StatisticsCard>
                            {value.icon}
                            <CardInfo>
                                <LargeText inCard={true}>{value.count}</LargeText>
                                <SmallText inCard={true}>{value.statusType}</SmallText>
                            </CardInfo>
                        </StatisticsCard>
                    ))
                }
            </Statistics>
        </Container>
    )
}

export default Index
