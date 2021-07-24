import React from 'react'
import {LargeText } from '../Main/style'
import {Container, CardWrapper, Card, LgHalfCircle, UndovIcon} from './style'
import { PlatformData } from '../../mock/data'

const Index = () => {
    return (
        <Container>
            
            <LargeText inCard={true} inCard_={true}>
                Platforma haqida
            </LargeText>
            <CardWrapper>
                <LgHalfCircle className="animate__animated animate__heartBeat animate__infinite"/>
                <UndovIcon />
                {
                    PlatformData.map(({info}) => (
                        <Card>
                            <Card.Header />
                            <Card.Text>
                                {info}
                            </Card.Text>
                        </Card>
                    ))
                }
            </CardWrapper>
        </Container>
    )
}

export default Index
