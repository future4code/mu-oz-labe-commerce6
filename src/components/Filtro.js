import React from 'react'
import styled from 'styled-components';
import { arrayViagens } from './arrayViagens.js'
import { CardViagem } from './styled.js'

const FiltersContainer = styled.div`
  border: 1px solid black;
  padding: 8px;
`

const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
`

export default class Filters extends React.Component {
  
   
    render() {
       const arrayViagensFiltrado = arrayViagens.filter(viagem => {
            if ((this.props.valorMinimo <= viagem.valor)) { 
                if (this.props.valorMaximo > 0) {
                    if (this.props.valorMaximo >= viagem.valor) {
                        return viagem
                    }
                }
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