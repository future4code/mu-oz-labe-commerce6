import React from 'react';
import styled from 'styled-components';
// import viagemEspaco from '../img/produtos/viagemEspaco1.svg';
// import viagemVoltaTerra from '../img/produtos/viagemVoltaTerra2.svg';
// import viagemMarte from '../img/produtos/viagemMarte3.svg';
// import viagemVenus from '../img/produtos/viagemVenus4.svg';
// import viagemPlanetaAzul from '../img/produtos/viagemPlanetaAzul5.svg';
// import viagemSaturno from '../img/produtos/viagemSaturno6.svg';
// import viagemPlutao from '../img/produtos/viagemPlutao7.svg';
// import viagemLua from '../img/produtos/viagemLua8.svg';


const CardViagem = styled.div`
    display: grid;
    grid-template-columns: 7fr 2fr;
    grid-template-rows:1fr;
   
 
    width: fit-content;
       /*   height: 43vh; */
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

export default class Viagens extends React.Component {
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

    mostrarViagens = this.state.arrayViagens.map((viagem, index) => {
        return (
            <CardViagem key={index}>
                <img src={viagem.imagem} alt={'Imagem do produto'}/> 
                <h3>{viagem.nomeProduto}</h3>
                <h1> + </h1>
            </CardViagem>
        )

    })

    render() {
        return (
            <>
                {this.mostrarViagens}
            </>
        )
    }
}