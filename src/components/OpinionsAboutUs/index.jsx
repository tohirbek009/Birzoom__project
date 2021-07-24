import React from 'react'
import {Container, Card, HalfCircleIcon} from './style'
import { LargeText } from '../Main/style';
import { OpinionsAboutTeam } from '../../mock/data';
import './PrewNextBtnStyle.css'
import {ReactComponent as LeftArrow} from '../../assets/icons/left_arrow.svg'
import {ReactComponent as RightArrow} from '../../assets/icons/right_arrow.svg'

import { CarouselProvider, Slider, ButtonBack,ButtonNext, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Index = () => {
    return (
        <Container>
            <LargeText inCard={true} inCard_={true}>
                Biz haqimizda ijobiy fikrlar
            </LargeText>    

            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={42}
                totalSlides={OpinionsAboutTeam.length}
                visibleSlides={1}
                style={{position:'relative'}}
            >
                <HalfCircleIcon small={true} />
                <HalfCircleIcon small={false} />
                <Slider>
                    {
                        OpinionsAboutTeam.map((value, index) => (
                            <Slide index={index}>
                                <Card>
                                    <Card.ImgWrapper>
                                        <Card.ImgWrapper.Img src={value.image}/>
                                    </Card.ImgWrapper>
                                    <Card.Name>{value.name}</Card.Name>
                                    <Card.Info>{value.info}</Card.Info>
                                </Card>
                            </Slide>
                        ))
                    }
                </Slider>
                <ButtonBack><LeftArrow /></ButtonBack>
                <ButtonNext><RightArrow /></ButtonNext>
            </CarouselProvider>

        </Container>
    )
}


export default Index
