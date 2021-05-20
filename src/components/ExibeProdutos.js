import React from 'react';
import styled from 'styled-components';
import Viagens from './Viagens.js';
import Filtro from './Filtro.js';
import CampoBuscar from './CampoBuscar.js';

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
                descricao: "Conheça um lugar além de tudo que você já viu. Conheça o espaço!",

            },
            {
                id: 2,
                nomeProduto: "Viagem Volta à terra",
                valor: 15000000.00,
                imagem: require('../img/produtos/viagemVoltaTerra2.svg'),
            },
            {
                id: 3,
                nomeProduto: "Viagem a Marte",
                valor: 26000000.00,
                imagem: require('../img/produtos/viagemMarte3.svg'),
                descricao: "Visite o planeta vermelho um lugar que não pode ser distinguido em meio aos raios de sol, mas você poderá conhecê-lo de perto.",
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
                imagem: require('../img/produtos/viagemPlanetaAzul5.svg'),
                descricao: "O planeta azul, o lugar mais próximo do que consideramos o nosso lar. Uma partícula de poeira suspensa em um raio de sol.",
            },

            {
                id: 6,
                nomeProduto: "Viagem a Saturno",
                valor: 26000000.00,
                imagem: require('../img/produtos/viagemSaturno6.svg'),
            },

            {
                id: 7,
                nomeProduto: "Viagem a Plutão",
                valor: 26000000.00,
                imagem: require('../img/produtos/viagemPlutao7.svg'),
            },

            {
                id: 8,
                nomeProduto: "Viagem a Lua",
                valor: 26000000.00,
                imagem: require('../img/produtos/viagemLua8.svg'),
            },
        ],
        buscando: false,
        valorInputBusca: ""
    }

    onChangeBuscarProduto = (e) => {
        const onChangeBusca = e.target.value
        this.setState({ valorInputBusca: onChangeBusca })

        console.log(e.target.value);
    }


    buscarProduto = () => {
        this.setState({ buscando: true })
    }



    render() {


        console.log(this.state.buscando)
        return (
            <CorpoPagina>
                <FiltroProdutos >
                    {/* <Filtro arrayViagens={this.state.arrayViagens} /> */}
                </FiltroProdutos>
                <ContainerBusca>
                    <input placeholder={'Encontre seu próximo destino'} value={this.state.produtoBuscado} onChange={this.onChangeBuscarProduto} />
                    <button onClick={this.buscarProduto} >Buscar</button>
                </ContainerBusca>
                <ContainerProdutos>
                    {
                        this.state.buscando ?
                            <CampoBuscar arrayViagens={this.state.arrayViagens} valorInputBusca={this.state.valorInputBusca} /> :
                            <Viagens arrayViagens={this.state.arrayViagens} />
                    }



                </ContainerProdutos>
            </CorpoPagina>
        )
    }
}