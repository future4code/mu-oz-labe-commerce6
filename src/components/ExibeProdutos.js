import React from 'react';
import styled from 'styled-components';
import Viagens from './Viagens.js';

const CorpoPagina = styled.div`
    display: grid;
    min-height:100vh;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 20vh 1fr;
   
    color:white;
    background-color:black;
`
const FiltroProdutos = styled.div`
grid-row: 1/3;
 background-color:yellow;
`

const ContainerProdutos = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 10rem; 
    width:fit-content;
    justify-items: center;
    padding-top: 3rem;
    margin: 0 auto;
`

const ContainerBusca = styled.div`
background-color:pink;

`


export default class ExibeProdutos extends React.Component {

    state = {
        produto: ""

    }

    onChangeBuscarProduto = (e) => {
        const onChangeBusca = e.target.value
        this.setState({ produto: onChangeBusca })

        console.log(this.state.produto);
    }

    buscarProduto = () => {

    }



    render() {
        return (
            <CorpoPagina>
                <FiltroProdutos>Filtros</FiltroProdutos>
                <ContainerBusca>
                    <input placeholder={'Encontre seu próximo destino'} value={this.state.produto} onChange={this.onChangeBuscarProduto} /> 
                    <button onClick={this.buscarProduto} >Buscar</button>
                </ContainerBusca>
                <ContainerProdutos>
                    <Viagens />
                </ContainerProdutos>
            </CorpoPagina>
        )
    }
}