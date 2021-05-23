import React from 'react';
import { arrayViagens } from './arrayViagens.js'
import { CardViagem } from './styled.js';

export default class Viagens extends React.Component {

    state = {
        arrayCarrinho:[]
    }
    adicionarAoCarrinho = (viagem) => {
        console.log("adicionou ao carrinho")
        const viagemAdicionada = this.state.arrayCarrinho.find((viagemAdicionada) => {
            if (viagemAdicionada.id === viagem.id){
                return true
            }
            return false
        })
        if (!viagemAdicionada) {
            const novaViagemAdicionada = {
                ...viagem,
                quantidade:1
            }
            
            const atualizaCarrinho = [...this.state.arrayCarrinho, novaViagemAdicionada]
            
            this.setState({arrayCarrinho: atualizaCarrinho})
        } else {
            const atualizaCarrinho = this.state.arrayCarrinho.map((viagemAdicionada) => {
              if (viagemAdicionada.id === viagem.id) {
                  return {
                      ...viagemAdicionada,
                      quantidade: viagemAdicionada.quantidade +1
                  }
              } else {
                  return viagemAdicionada
              }
            })
            this.setState({arrayCarrinho:atualizaCarrinho})
        }
        // this.arrayCarrinho.map(viagem => {
        //     return <>
        //         <img src={viagem.imagem} alt={'Imagem do produto'} />
        //         <h3>{viagem.nomeProduto}</h3>
        //         <button> Remover Produto </button>
        //     </>
        // })
        console.log("produto adicionado",viagem.nomeProduto)
    }


    mostrarViagens = arrayViagens.map((viagem) => {
        
        return (
            <CardViagem key={viagem.id}>
                <img src={viagem.imagem} alt={'Imagem do produto'}/> 
                <h3>{viagem.nomeProduto}</h3>
                <button id={viagem.id} onClick={() => this.adicionarAoCarrinho(viagem)}> + </button>

            </CardViagem>
        )

    })

    render() {
        console.log( "todos os produtos do carrinho:", this.state.arrayCarrinho)
        return (
            <>
                {this.mostrarViagens}
            </>
        )
    }
}