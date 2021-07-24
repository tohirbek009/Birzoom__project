import React from 'react'
import {Container, LogoImg, Nav, NavLink, Registiration,
SelectLang, Languages, Language, SelectedLanguage, DownArrow,
RegistBtn} from './style'
import Logo from '../../assets/icons/Frame.svg'
import DownArrowIcon from '../../assets/icons/down_arrow.svg'
const Index = () => {
    return (
        <Container>
            <NavLink to='/'><LogoImg src={Logo}/></NavLink>
            <Nav>
                <NavLink to='/tariflar'>Tariflar</NavLink>
                <NavLink to='/kurs_haqida'>Kurs haqida</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
                <NavLink to='/bilim_ulashish'>Bilim ulashish</NavLink>
            </Nav>
            <Registiration>
                <SelectLang>
                    <SelectedLanguage>
                        <Language>UZ</Language>
                        <DownArrow src={DownArrowIcon} alt="" />
                    </SelectedLanguage>
                    <Languages>
                        <Language>UZ</Language>
                        <Language>RU</Language>
                        <Language>ENG</Language>
                    </Languages>
                </SelectLang>
                <RegistBtn>
                    Ro'yxatdan o'tish
                </RegistBtn>
            </Registiration>
        </Container>
    )
}

export default Index
