import React from 'react';
import styled from 'styled-components';
import fundoHeader from '../img/backgroundHeader.svg';
import viajeParaOEspaco from '../img/viajeParaOEspacoFinal.svg';
import logo from '../img/logo.svg';

const Cabecalho = styled.div`
    background-image: url(${fundoHeader});
    background-repeat: no-repeat;
    background-size: cover;
    display:grid;
    grid-template-rows: 2fr 8fr;
    align-items: center;
    justify-content:center;
    height: 100vh;

`

const Logo = styled.img`
    justify-self: start;
    align-self: center;
`


function Header() {
    return (
        <Cabecalho>


            <Logo src={logo}></Logo>


            <img src={viajeParaOEspaco} />

        </Cabecalho>
        
    )

}


export default Header;