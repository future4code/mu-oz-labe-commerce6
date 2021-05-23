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
        // alterar este state para true exibe a busca por nom
        buscando: false,
        // este state captura o valor do input
        onChangeBusca: "",
        // este state é usado no botão de busca para mudar o valor da busca
        valorInputBusca: "",

        sort: "",

        filtroMinMax: false,
        valorMinimo: "",

        valorMaximo: "",

        inputFiltroMaximo: "",
        inputFiltroMinimo: "",

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
            onChangeBusca: "",
            sort: ""
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
            inputFiltroMaximo: "",
            inputFiltroMinimo: "",
        })

    }

    onKeyDownFiltro = (e) => {
        e.key === "Enter" &&
            this.filtrarProdutos()

    }

    //Lógica de ordenação dos produtos
    FiltrarListaOrdenada = () => {
        arrayViagens.sort((a, b) =>
            this.state.sort === 'crescente' ?
                a.valor - b.valor :
                b.valor - a.valor)
        return arrayViagens.map((viagem) => {
            return <CardViagem key={viagem.id}>
                <img src={viagem.imagem} alt={'Imagem do produto'} />
                <h3>{viagem.nomeProduto}</h3>

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

    render() {
        console.log("ValorMáximo:", this.state.valorMaximo)
        console.log("ValorMinimo:", this.state.valorMinimo)
        const renderizarPagina = () => {
            if (this.state.buscando) {
                return <CampoBuscar valorInputBusca={this.state.valorInputBusca} />
            } else if (this.state.filtroMinMax) {
                return <Filtro valorMinimo={this.state.valorMinimo}
                    valorMaximo={this.state.valorMaximo} />
            } else if (this.state.sort) {
                return this.FiltrarListaOrdenada()

            } else {
                return <Viagens />
            }
        }

        return (
            <CorpoPagina>
                <FiltroProdutos>
                    <h3>Filtros</h3>

                    <p>Valor mínimo:</p>
                    <input
                        // type="number"
                        placeholder={'Valor Mínino'}
                        value={this.state.inputFiltroMinimo}
                        onChange={this.onChangeMinFiltro}
                        onKeyDown={this.onKeyDownFiltro}
                    />
                    <p> Valor máximo:</p>
                    <input
                        // type="number"
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
                        <img src={carrinho} alt={'carrinho'} />
                        <ContarProdutos>
                            2
                    </ContarProdutos>
                    </CarrinhoBusca>
                    <OrdernarPreço>
                        <p>Quantidade: {arrayViagens.length}</p>
                        <p>Ordenação</p>
                        <select value={this.state.sort} onChange={this.onChangeSort}>
                            <option value={""}></option>
                            <option value={"crescente"}>Crescente</option>
                            <option value={"decrescente"}>Decrescente</option>
                        </select>
                        </div>
                    </OrdernarPreço>

                </ContainerBusca>
                <ContainerProdutos>

                    {renderizarPagina()}
                </ContainerProdutos>
            </CorpoPagina>
        )
    }
}