import React from 'react';
import Viagens from './Viagens.js';
/* import Filtro from './Filtro.js'; */
import CampoBuscar from './CampoBuscar.js';
import lupadebuscar from '../img/lupadebuscar.svg';
import carrinho from '../img/carrinho.svg';

import { CorpoPagina, FiltroProdutos, ContainerProdutos, ContainerBusca, CarrinhoBusca, ContarProdutos, OrdernarPreço} from './styled.js';





export default class ExibeProdutos extends React.Component {

    state = {
        // alterar este state para true exibe a busca por nome
        buscando: false,
        // este state captura o valor do input
        onChangeBusca: "",
        // este state é usado no botão de busca para mudar o valor da busca
        valorInputBusca: "",

    }

    // esta função adiciona o valor da busca ao state onChangeBusca
    onChangeBuscarProduto = (e) => {
        this.setState({ onChangeBusca: e.target.value })
    }

    // esta função atualiza os states para exibir o campo de busca
    buscarProduto = () => {
        this.setState({
            valorInputBusca: this.state.onChangeBusca,
            buscando: true,
            onChangeBusca: ""
        })
        console.log("botão buscar", this.state.onChangeBusca)
    }

    // essa função pega o evento (no caso as teclas clicadas) e caso a tecla seja enter ela executa a mesma função do botão
    // a sintaxe estranha é o curto circuito, caso cês não lembrem kkk (eu não lembrava tb, fui procurar nas anotações)
    onKeyDownBusca = (e) => {
        e.key === "Enter" &&
            this.buscarProduto()

    }



    render() {
        return (
            <CorpoPagina>
                <FiltroProdutos>
                    {/* <Filtro/> */}
                    <div>
                        <h1>Filtro</h1>
                        <section>Buscar por preço</section>
                    </div>
                </FiltroProdutos>
                <ContainerBusca>
                    <div>
                        <input placeholder={'Encontre seu próximo destino'}
                            value={this.state.onChangeBusca}
                            onChange={this.onChangeBuscarProduto}
                            onKeyDown={this.onKeyDownBusca} />
                        <button onClick={this.buscarProduto} > <img src={lupadebuscar} alt={'buscar'} /></button>
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
                    {
                        this.state.buscando ?
                            <CampoBuscar valorInputBusca={this.state.valorInputBusca} /> :
                            <Viagens/>
                    }
                </ContainerProdutos>
            </CorpoPagina>
        )
    }
}