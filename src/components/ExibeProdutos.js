import React from 'react';
import styled from 'styled-components';

const CorpoPagina = styled.div`
    display: grid;
    min-height:100vh;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr 5fr;
    color:white;
    background-color:black;
`
const FiltroProdutos = styled.div`
grid-row: 1/3;
background-color:yellow;
`

const ContainerProdutos = styled.div`

`

const ContainerBusca = styled.div`
background-color:pink;
`

export default class ExibeProdutos extends React.Component {
    render(){
        return(
            <CorpoPagina>
                <FiltroProdutos>Filtros</FiltroProdutos>
                <ContainerBusca>busca</ContainerBusca>
                <ContainerProdutos>produtos</ContainerProdutos>
            </CorpoPagina>
        )
    }
} 