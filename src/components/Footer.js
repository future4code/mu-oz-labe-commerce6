import React from 'react';
import styled from 'styled-components';
import email from '../img/emailFooter.svg'
import whats from '../img/whatsFooter.svg'
import instagram from '../img/instagramFooter.svg'
import facebook from '../img/facebookFooter.svg'
import youtube from '../img/youtubeFooter.svg'
import  linkedin from '../img/linkedinFooter.svg'

const FooterDiv = styled.div`
    background-color: black;
    height: 50vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    color:white;
    justify-items: center;
    align-items: start;
    font-weight: lighter;
    padding-top: 10vh;
`

const Contatos = styled.div`
    img{
       margin: 5px 10px;  
   }
`

const RedesSociais = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    img{
        margin: 5px 10px;  
    }
`

const Termos = styled.div``

function Footer() {
    return (
        <FooterDiv>
            <Contatos>
                <h4>Contatos</h4>
                <a href={'http://outlook.com'}><img src={email} alt={'e-mail'} /></a>
                <a href={'http://whatsapp.com'}><img src={whats} alt={'whats'} /></a>
                <p>Segunda à sexta: 05h às 21h</p>
                <p>Sábados: 10h às 13h</p>
            </Contatos>
            <RedesSociais>
                <h4>Siga-nos nas Redes Sociais</h4>
                <div>
                    <a href={'http://instagram.com'} ><img src={instagram}  alt={'instagram'} /></a>
                    <a href={'http://facebook.com'} ><img src={facebook}  alt={'facebook'}/></a>
                    <a href={'http://youtube.com'} ><img src={youtube}  alt={'youtube'}/></a>
                    <a href={'http://linkedin.com'} ><img src={linkedin}  alt={'linkedin'} /></a>
                </div>

            </RedesSociais>
            <Termos>
                <h4>Termos</h4>
                <p>Condições de Uso</p>
                <p>Condições Gerais</p>
                <p>Política e Privacidade</p>
                <p>Código de Conduta e Ética</p>
            </Termos>
        </FooterDiv>
    )
}

export default Footer;