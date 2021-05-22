import React from 'react';

import {arrayViagens} from './arrayViagens.js'
import { CardViagem} from './styled.js';

// import viagemEspaco from '../img/produtos/viagemEspaco1.svg';
// import viagemVoltaTerra from '../img/produtos/viagemVoltaTerra2.svg';
// import viagemMarte from '../img/produtos/viagemMarte3.svg';
// import viagemVenus from '../img/produtos/viagemVenus4.svg';
// import viagemPlanetaAzul from '../img/produtos/viagemPlanetaAzul5.svg';
// import viagemSaturno from '../img/produtos/viagemSaturno6.svg';
// import viagemPlutao from '../img/produtos/viagemPlutao7.svg';
// import viagemLua from '../img/produtos/viagemLua8.svg';


export default class Viagens extends React.Component {
    

    mostrarViagens = arrayViagens.map((viagem) => {
        
        return (
            <CardViagem key={viagem.id}>
                <img src={viagem.imagem} alt={'Imagem do produto'}/> 
                <h3>{viagem.nomeProduto}</h3>
                <button> + </button>
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