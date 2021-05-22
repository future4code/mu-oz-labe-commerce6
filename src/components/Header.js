

import React from 'react';
import viajeParaOEspaco from '../img/viajeParaOEspacoFinal.svg';
import logo from '../img/logo.svg';
import { Logo, Cabecalho,Slogan} from './styled.js';




function Header() {
    return (
        <Cabecalho>


            <Logo src={logo}></Logo>


            <Slogan src={viajeParaOEspaco}  alt={''}/>

        </Cabecalho>
        
    )

}


export default Header;