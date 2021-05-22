import React from 'react';
import { arrayViagens } from './arrayViagens.js'
import { CardViagem } from './styled.js';

export default class Viagens extends React.Component {
    
    mostrarViagens = arrayViagens.map((viagem) => {
        
        return (
            <CardViagem key={viagem.id}>
                <img src={viagem.imagem} alt={'Imagem do produto'}/> 
                <h3>{viagem.nomeProduto}</h3>

                <button> + </button>
            </CardViagem>
        )

    })

    render() {
        return (
            <>
                {this.mostrarViagens}
            </>
        )
    }
}