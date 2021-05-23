import React from 'react';

import lupadebuscar from '../img/lupadebuscar.svg';
import carrinho from '../img/carrinho.svg';
import Viagens from './Viagens.js';
import Filtro from './Filtro.js';
import CampoBuscar from './CampoBuscar.js';

import { CorpoPagina, FiltroProdutos, ContainerProdutos, ContainerBusca, CarrinhoBusca, ContarProdutos, OrdernarPreço } from './styled.js';

export default class ExibeProdutos extends React.Component {



    state = {
        // alterar este state para true exibe a busca por nom
        buscando: false,
        // este state captura o valor do input
        onChangeBusca: "",
        // este state é usado no botão de busca para mudar o valor da busca
        valorInputBusca: "",

        sort: 'DECRESCENTE',

        filtroMinMax: false,
        valorMinimo: "",

        valorMaximo: "",

        onChangeFiltroMaximo: "",
        onChangeFiltroMinimo: "",

    }

    // ---------------------LOGICA POR NOME ------------------------

    // esta função adiciona o valor da busca ao state onChangeBusca
    onChangeBuscarProduto = (e) => {
        this.setState({ onChangeBusca: e.target.value })
    }

    // esta função atualiza os states para exibir o campo de busca
    buscarProduto = () => {
        this.setState({
            valorInputBusca: this.state.onChangeBusca,
            buscando: true,
            filtroMinMax: false,
            onChangeBusca: ""
        })
    }

    // essa função pega o evento (no caso as teclas clicadas) e caso a tecla seja enter ela executa a mesma função do botão
    // a sintaxe estranha é o curto circuito, caso cês não lembrem kkk (eu não lembrava tb, fui procurar nas anotações)
    onKeyDownBusca = (e) => {
        e.key === "Enter" &&
            this.buscarProduto()

    }

    // ----------------------LOGICA VALOR ------------------------

    onChangeMinFiltro = (e) => {
        this.setState({ onChangeFiltroMinimo: e.target.value })
    }

    onChangeMaxFiltro = (e) => {
        this.setState({ onChangeFiltroMaximo: e.target.value })
    }




    filtrarProdutos = () => {
        this.setState({
            valorMinimo: this.state.onChangeMinFiltro,
            valorMaximo: this.state.onChangeMaxFiltro,
            filtroMinMax: true,
            buscando: false,
        })
    }

    onKeyDownFiltro = (e) => {
        e.key === "Enter" &&
            this.filtrarProdutos()

    }
    // getFilteredAndOrderedList = () => {
    //     return this.props.products
    //         .filter((product) => this.props.maxFilter ? product.price < this.props.maxFilter : true)
    //         .filter((product) => this.props.minFilter ? product.price > this.props.minFilter : true)
    //         .filter((product) => this.props.nameFilter ? product.name.includes(this.props.nameFilter) : true)
    //         .sort((a, b) => this.state.sort === 'CRESCENTE' ? a.price - b.price : b.price - a.price)
    // }

    render() {
        const renderizarPagina = () => {
            if (this.state.buscando) {
                return <CampoBuscar valorInputBusca={this.state.valorInputBusca} />
            } else if (this.state.filtroMinMax) {
                return <Filtro valorMinimo={this.state.valorMinimo}
                    valorMaximo={this.state.valorMaximo} />
            } else {
                return <Viagens />
            }
        }
        console.log("ValorMinimo", this.state.valorMinimo)
        console.log("onChangeValorMinimo", this.state.onChangeValorMinimo)
        return (
            <CorpoPagina>
                <FiltroProdutos>
                    <h3>Filtros</h3>
                    <div>
                        <p>Valor mínimo:</p>
                        <input placeholder={'Valor Mínino'}
                            value={this.state.onChangeFiltroMinimo}
                            onChange={this.onChangeMinFiltro}
                            onKeyDown={this.onKeyDownFiltro}
                        />
                    </div>
                    <div>
                        <p> Valor máximo:</p>
                        <input
                            type="number"
                            value={this.state.onChangeFiltroMaximo}
                            onChange={this.onChangeMaxFiltro} />
                    </div>
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
                        <img src={carrinho} alt={'carrinho'} />
                        <ContarProdutos>
                            2
                    </ContarProdutos>
                    </CarrinhoBusca>
                    <OrdernarPreço>
                        <p>Ordenação</p>
                        <select>
                            <option value={"crescente"}>Crescente</option>
                            <option value={"decrescente"}>Decrescente</option>
                        </select>
                    </OrdernarPreço>

                </ContainerBusca>
                <ContainerProdutos>
                    {renderizarPagina()}
                </ContainerProdutos>
            </CorpoPagina>
        )
    }
}