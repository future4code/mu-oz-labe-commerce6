import React from 'react';
import { arrayViagens } from './arrayViagens.js'
import { CardViagem } from './styled.js';

export default class CampoBuscar extends React.Component {
    render() {
        const arrayViagensFiltrado = arrayViagens.filter(viagem => {
            if (viagem.nomeProduto.toLowerCase().includes(this.props.valorInputBusca.toLowerCase())) {
                return viagem
            }
        })
        const exibeBuscaViagens = arrayViagensFiltrado.map(viagem => {
            return (
                <CardViagem key={viagem.id}>
                    <img src={viagem.imagem} alt={'Imagem do produto'} />
                    <h3>{viagem.nomeProduto}
                    - R${viagem.valor},00</h3>
                    <button id={viagem.id} onClick={() => this.adicionarAoCarrinho(viagem)}> + </button>
                </CardViagem>
            )
        })
        return (
            <>                {exibeBuscaViagens}            </>
        )
    }
}
