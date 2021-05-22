import React from 'react';

import {arrayViagens} from './arrayViagens.js'
import { CardViagem} from './styled.js';

export default class CampoBuscar extends React.Component {

    

    render() {
       const arrayViagensFiltrado = arrayViagens.filter(viagem => {
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
                    <button> + </button>
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