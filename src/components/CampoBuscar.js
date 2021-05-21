import React from 'react';
import styled from 'styled-components';

const CardViagem = styled.div`
    display: grid;
    grid-template-columns: 7fr 2fr;
    grid-template-rows:1fr;
   
 
    width: fit-content;
    align-items:center;
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-left: 1px solid;
    border-right: 1px solid;
    padding:0;
    img{
        border: 1px solid white;
        grid-column: 1/3;
        width:20vw;
    }

    h1{
        height:100%;
        border-left: 1px solid white;     

       
    }

    h3 {
        text-align:center;
    }
`

export default class CampoBuscar extends React.Component {

    arrayViagensProps = [...this.props.arrayViagens]
    // arrayViagensFiltrado = this.arrayViagensProps.filter(viagem => {
    //     // toLowerCase() coloca tudo em letra minuscula
    //     if (viagem.nomeProduto.toLowerCase().includes(this.props.valorInputBusca.toLowerCase())) {
    //         return viagem
    //     }
    // })

    render() {
       const arrayViagensFiltrado = this.arrayViagensProps.filter(viagem => {
            // toLowerCase() coloca tudo em letra minuscula
            if (viagem.nomeProduto.toLowerCase().includes(this.props.valorInputBusca.toLowerCase())) {
                return viagem
            }
        })
        const exibeBuscaViagens = arrayViagensFiltrado.map(viagem => {
            return (
                <CardViagem key={viagem.id}>
                    <img src={viagem.imagem} alt={'Imagem do produto'} />
                    <h3>{viagem.nomeProduto}</h3>
                    <h1> + </h1>
                </CardViagem>
            )
        })

        return (
            <>
                {exibeBuscaViagens}
            </>

        )
    }
}









