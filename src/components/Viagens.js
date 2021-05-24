import React from 'react';
import { arrayViagens } from './arrayViagens.js'
import { CardViagem, CardViagemCarrinho } from './styled.js';

export default class Viagens extends React.Component {

    state = {
        arrayCarrinho: [],
    }

    adicionarAoCarrinho = (viagem) => {
    
        const viagemAdicionada = this.state.arrayCarrinho.find((viagemAdicionada) => {
            if (viagemAdicionada.id === viagem.id) {
                return true
            }
            return false
        })
        if (!viagemAdicionada) {
            const novaViagemAdicionada = {
                ...viagem,
                quantidade: 1
            }

            const atualizaCarrinho = [...this.state.arrayCarrinho, novaViagemAdicionada]

            this.setState({ arrayCarrinho: atualizaCarrinho })
        } else {
            const atualizaCarrinho = this.state.arrayCarrinho.map((viagemAdicionada) => {
                if (viagemAdicionada.id === viagem.id) {
                    return {
                        ...viagemAdicionada,
                        quantidade: viagemAdicionada.quantidade + 1
                    }
                } else {
                    return viagemAdicionada
                }
            })
            this.setState({ arrayCarrinho: atualizaCarrinho })
            
        }

    }
    

    mostrarViagens = arrayViagens.map((viagem) => {

        return (

            <CardViagem key={viagem.id}>
                <img src={viagem.imagem} alt={'Imagem do produto'} />
                <h3>{viagem.nomeProduto}
                - R${viagem.valor},00</h3>
                <button id={viagem.id} onClick={() => this.adicionarAoCarrinho(viagem)}> + </button>
            </CardViagem>
        )
    })

    render() {
        let Total = 0;

        for (let viagem of this.state.arrayCarrinho) {

            Total += viagem.valor * viagem.quantidade
            
        }
        
        
      
        const renderizarProdutos = () => {
            if (this.props.verCarrinho) {
                return (this.state.arrayCarrinho.map(viagem => {
                    return <CardViagemCarrinho valor= { viagem.valor}> 

                        <img src={viagem.imagem} alt={'Imagem do produto'} />
                        <h2>{viagem.nomeProduto}</h2>
                        <div>
                            <p>{viagem.descricao}</p>
                            <p>{viagem.quantidade}x
                        R${viagem.valor},00</p>
                        </div>
                        <button> Remover Produto </button>
                    </CardViagemCarrinho>


                }))
            } else {
                return this.mostrarViagens
            }
        }

        
        return (
            <>

                {renderizarProdutos()}
            </>
        )
    }
}
