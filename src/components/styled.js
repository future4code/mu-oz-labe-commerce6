import styled from 'styled-components';
import lupadebuscar from '../img/lupadebuscar.svg';
import carrinho from '../img/carrinho.svg';

export const CorpoPagina = styled.div`
    display: grid;
    min-height:100vh;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 20vh 1fr;
   
    color:white;
    background-color:black;
`

export const FiltroProdutos = styled.div`
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

export const ContainerProdutos = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 10rem; 
    width:fit-content;
    justify-items: center;
    padding-top: 3rem;
    margin: 0 auto;
`

export const CardViagem = styled.div`
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
        border:none;
        grid-column: 1/3;
        width:21vw;

    }

    button{
        color: white;
        background-color: black;
        height:100%;
        border-left: 1px solid white; 
        border-right: none;
        border-bottom: none;
        border-top:none;
        text-align: center;
        align-self: center;
        padding:0;
        margin:0;
        font-size: 1.5rem;
       :active{
        background-color: red;
        border: 2px solid white;
       }
    }

    h3 {
        text-align:center;
        padding:1rem 0;
        margin:0;
    }
`


export const ContainerBusca = styled.div`
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
export const CarrinhoBusca = styled.div`
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

export const ContarProdutos = styled.div`
    width: 1.2vw;
    height: 1.2vw;
    border-radius: 20px;
    border: 2px solid #f44336;
    position: absolute;
    margin: -0.4rem -5rem 0 0;
    background-color: #f44336;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
   
`;
export const OrdernarPreço = styled.div`
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
   `;