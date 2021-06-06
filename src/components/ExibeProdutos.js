import React from 'react';

import lupadebuscar from '../img/lupadebuscar.svg';
import carrinho from '../img/carrinho.svg';
import Viagens from './Viagens.js';
import Filtro from './Filtro.js';
import CampoBuscar from './CampoBuscar.js';
import { CardViagem } from './styled.js';
import { arrayViagens } from './arrayViagens.js';
import { CorpoPagina, FiltroProdutos, ContainerProdutos, ContainerBusca, CarrinhoBusca, ContarProdutos, OrdernarPreço } from './styled.js';


export default class ExibeProdutos extends React.Component {
    state = {
        buscando: false,
        onChangeBusca: "",
        valorInputBusca: "",
        sort: "",
        filtroMinMax: false,
        valorMinimo: "",
        valorMaximo: "",
        inputFiltroMaximo: "",
        inputFiltroMinimo: "",
        verCarrinho: false
    }



    onChangeBuscarProduto = (e) => {
        this.setState({ onChangeBusca: e.target.value })
    }


    buscarProduto = () => {
        this.setState({
            valorInputBusca: this.state.onChangeBusca,
            buscando: true,
            filtroMinMax: false,
            onChangeBusca: "",
            sort: ""
        })
    }

    onKeyDownBusca = (e) => {
        e.key === "Enter" &&
            this.buscarProduto()

    }


    onChangeMinFiltro = (e) => {
        this.setState({ inputFiltroMinimo: e.target.value })
    }

    onChangeMaxFiltro = (e) => {
        this.setState({ inputFiltroMaximo: e.target.value })
    }




    filtrarProdutos = () => {
        this.setState({
            valorMinimo: this.state.inputFiltroMinimo,
            valorMaximo: this.state.inputFiltroMaximo,
            filtroMinMax: true,
            buscando: false,
            sort: false,
            inputFiltroMaximo: "",
            inputFiltroMinimo: "",
        })

    }

    onKeyDownFiltro = (e) => {
        e.key === "Enter" &&
            this.filtrarProdutos()

    }


    FiltrarListaOrdenada = () => {
        arrayViagens.sort((a, b) =>
            this.state.sort === 'crescente' ?
                a.valor - b.valor :
                b.valor - a.valor)
        return arrayViagens.map((viagem) => {
            return <CardViagem key={viagem.id}>
                <img src={viagem.imagem} alt={'Imagem do produto'} />
                <h3>{viagem.nomeProduto}
                - R${viagem.valor},00</h3>    
                <button id={viagem.id} onClick={() => this.adicionarAoCarrinho(viagem)}> + </button>
            </CardViagem>
        })
    }

    onChangeSort = (event) => {
        this.setState({
            sort: event.target.value,
            buscar: false,
            filtroMinMax: false
        })
    }

    visualizarCarrinho = () => {
        this.setState({
            verCarrinho: true

        })
       
    }
    voltarInicio = () => {
        this.setState({
            verCarrinho: false,
            buscar: false,
            filtroMinMax: false,
            sort: false,

        })
    }

    identificarCarrinho = () => {
        if (!this.state.verCarrinho) {
            return (
                <>
                    <FiltroProdutos>
                        <h3>Filtros</h3>

                        <p>Valor mínimo:</p>
                        <input
                            placeholder={'Valor Mínino'}
                            value={this.state.inputFiltroMinimo}
                            onChange={this.onChangeMinFiltro}
                            onKeyDown={this.onKeyDownFiltro}
                        />
                        <p> Valor máximo:</p>
                        <input
                            placeholder={'Valor Máximo'}
                            value={this.state.inputFiltroMaximo}
                            onChange={this.onChangeMaxFiltro}
                            onKeyDown={this.onKeyDownFiltro} />
                        <br />
                        <button onClick={this.filtrarProdutos}>Filtrar</button>

                    </FiltroProdutos>
                    <ContainerBusca>
                        <div>
                            <input
                                placeholder={'Encontre seu próximo destino'}
                                value={this.state.onChangeBusca}
                                onChange={this.onChangeBuscarProduto}
                                onKeyDown={this.onKeyDownBusca} />
                            <button onClick={this.buscarProduto} >
                                <img src={lupadebuscar} alt={'buscar'} />
                            </button>
                        </div>
                        <CarrinhoBusca>
                            <button onClick={this.visualizarCarrinho}> <img src={carrinho} alt={'carrinho'} /> </button>
                            <ContarProdutos>
                                0
                            </ContarProdutos>
                        </CarrinhoBusca>
                        <OrdernarPreço>
                            <p>Quantidade: {arrayViagens.length}</p>
                            <p>Ordenação</p>
                            <select value={this.state.sort} onChange={this.onChangeSort}>
                                <option value={false}></option>
                                <option value={"crescente"}>Crescente</option>
                                <option value={"decrescente"}>Decrescente</option>
                            </select>

                        </OrdernarPreço>

                    </ContainerBusca> </>
            )
        } else {
            return (
            <>
                <h1>Carrinho</h1>
                <button onClick={this.voltarInicio}>Ver todos os produtos</button>
                <div>Valor total:{this.props.valor}</div>
                

            </>

)}
    }

    render() {
       
        const renderizarPagina = () => {
            if (this.state.buscando) {
                return <CampoBuscar valorInputBusca={this.state.valorInputBusca} />
            } else if (this.state.filtroMinMax) {
                return <Filtro valorMinimo={this.state.valorMinimo}
                    valorMaximo={this.state.valorMaximo} />
            } else if (this.state.sort) {
                return this.FiltrarListaOrdenada()

            } else {
                return <Viagens verCarrinho={this.state.verCarrinho} />
            }
        }


        return (
            <CorpoPagina>
                {this.identificarCarrinho()}
                <ContainerProdutos>
                    {renderizarPagina()}
                </ContainerProdutos>
            </CorpoPagina>
        )
    }
}