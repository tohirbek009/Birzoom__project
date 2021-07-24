import React from 'react'
import { LargeText } from '../Main/style'
import { Container, Card, UndovIcon } from './style'
import { AboutTeam } from '../../mock/data';
import './CarouselDotsStyle.css'

import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Index = () => {
    return (
        <Container>
            <UndovIcon />
            <LargeText inCard={true} inCard_={true}>
                Jamoa a'zolari
            </LargeText>

            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={100}
                totalSlides={AboutTeam.length}
                step={4}
                dragStep={4}
                visibleSlides={4}

            >
                <Slider>
                    {
                        AboutTeam.map((value, index) => (
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
                <DotGroup 
                    showAsSelectedForCurrentSlideOnly={true}
                    className="dots"
                ></DotGroup>
            </CarouselProvider>

        </Container>
    )
}

export default Index
