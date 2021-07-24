import React from 'react'
import styled from 'styled-components'
import Main from '../components/Main'
import AboutPlatform from '../components/AboutPlatform'
import AboutLesson from '../components/AboutLessons'
import TeamMembers from '../components/TeamMembers'
import BirzoomApps from '../components/BirzoomApps'
import OpinionsAboutUs from '../components/OpinionsAboutUs'

const Home = () => {
    return (
        <Container>
            <Main />
            <AboutPlatform />
            <AboutLesson />
            <TeamMembers />
            <AboutLesson isBilimUlashingSection={true}/>
            <BirzoomApps />
            <OpinionsAboutUs />
        </Container>
    )
}

const Container = styled.div`
width: 100%;
`

export default Home
