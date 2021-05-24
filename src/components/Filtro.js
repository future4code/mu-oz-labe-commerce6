import React from 'react';
import { arrayViagens } from './arrayViagens.js';
import { CardViagem } from './styled.js';

export default class Filters extends React.Component {
    render() {
        const arrayViagensFiltrado = arrayViagens.filter(viagem => {
            if (this.props.valorMinimo <= viagem.valor && this.props.valorMaximo >= viagem.valor) {
                return viagem
            } else if (this.props.valorMaximo >= viagem.valor) {
                return viagem
            } else if (this.props.valorMinimo <= viagem.valor) {
                return viagem
            }
        })
        const exibeBuscaViagens = arrayViagensFiltrado.map(viagem => {
            return (
                <CardViagem key={viagem.id}>
                    <img src={viagem.imagem} alt={'Imagem do produto'} />
                    <h3>{viagem.nomeProduto}</h3>
                    <button id={viagem.id} onClick={() => this.adicionarAoCarrinho(viagem)}> + </button>
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