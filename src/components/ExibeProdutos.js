import React from 'react';
import styled from 'styled-components';
import Viagens from './Viagens.js';
import Filtro from './Filtro.js';
import CampoBuscar from './CampoBuscar.js';
import lupadebuscar from '../img/lupadebuscar.svg';
import carrinho from '../img/carrinho.svg';

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
    text-align: center;
    color:lightgray;
    div {
        width: 20vw;
        height: 60vh;
        border: 2px solid lightgray;
        margin: 8rem;
    }
    section{
        font-size:1.3rem;

    }
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
    flex-direction: row;
    justify-items: center;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 12vw;

   
 input{
     width:35vw;
     height: 4.1vh;
     border-radius: 1.1rem;
     color: white;
     border: 1px solid lightgray;
     background-color: black;
     font-size: 1rem;
     text-align:center;
    ::placeholder{
        color:lightgray;
        font-style: italic;
        font-size: 1rem;
        
    }
    }

    button{
        background-color: black;
        border: none;
        
    }
`
const CarrinhoBusca = styled.div`
    border: 2px solid lightgray;
    justify-self:  flex-start;
    width: 3.8vw;
    height: 7vh;
    text-align: center;
    display:flex;
    justify-content: center;
    align-content: space-around;
   
   
   img{
       width: 2vw;
       padding: 0;
      
   }
    
`
const ContarProdutos = styled.div`
    width: 1.2vw;
    height: 1.2vw;
    border-radius: 20px;
    border: 2px solid #f44336;
    position: absolute;
    margin: -0.4rem -5rem 0 0;
    background-color: #f44336;
    font-weight: bold;
   

   
`
const OrdernarPreço = styled.div`
    display: flex;
    justify-self:  flex-start;
    
   
    padding:2%;

   div{
       border: 1px solid lightgray;
       width: 3rem;
       height: 1.5rem;
   }

   p{
     margin: 0 2rem;
     font-size: 1.4rem;
   }

   select{
    background-color: black;
    color: lightgray;
    width: 10rem;
    font-size: 1.3rem;
    text-align: center;
   }

    
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
                    {/* <Filtro arrayViagens={this.state.arrayViagens} /> */}
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
                            <option>Crescente</option>
                            <option>Decrescente</option>
                        </select>
                    </OrdernarPreço>

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