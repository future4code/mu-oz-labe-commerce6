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
        arrayViagens: [
            {
                id: 1,
                nomeProduto: "Viagem ao espaço",
                valor: 26000000.00,
                imagem: require('../img/produtos/viagemEspaco1.svg'),
                descricao: ""

            },
            {
                id: 2,
                nomeProduto: "Viagem Volta à terra",
                valor: 15000000.00,
                imagem: require('../img/produtos/viagemVoltaTerra2.svg')
            },
            {
                id: 3,
                nomeProduto: "Viagem a Marte",
                valor: 26000000.00,
                imagem: require('../img/produtos/viagemMarte3.svg')
            },
            {
                id: 4,
                nomeProduto: "Viagem a Vênus",
                valor: 26000000.00,
                imagem: require('../img/produtos/viagemVenus4.svg')
            },

            {
                id: 5,
                nomeProduto: "Viagem ao Planeta Azul",
                valor: 26000000.00,
                imagem: require('../img/produtos/viagemPlanetaAzul5.svg')
            },

            {
                id: 6,
                nomeProduto: "Viagem a Saturno",
                valor: 26000000.00,
                imagem: require('../img/produtos/viagemSaturno6.svg')
            },

            {
                id: 7,
                nomeProduto: "Viagem a Plutão",
                valor: 26000000.00,
                imagem: require('../img/produtos/viagemPlutao7.svg')
            },

            {
                id: 8,
                nomeProduto: "Viagem a Lua",
                valor: 26000000.00,
                imagem: require('../img/produtos/viagemLua8.svg')
            },
        ]
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
                <FiltroProdutos arrayViagens={this.state.arrayViagens}>Filtros</FiltroProdutos>
                <ContainerBusca arrayViagens={this.state.arrayViagens}>
                    <input placeholder={'Encontre seu próximo destino'} value={this.state.produto} onChange={this.onChangeBuscarProduto} /> 
                    <button onClick={this.buscarProduto} >Buscar</button>
                </ContainerBusca>
                <ContainerProdutos>
                    <Viagens arrayViagens={this.state.arrayViagens}/>
                </ContainerProdutos>
            </CorpoPagina>
        )
    }
}