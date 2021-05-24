import styled from 'styled-components';
import fundoHeader from '../img/backgroundHeader.svg';
export const CorpoPagina = styled.div`
    display: grid;
    min-height:100vh;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 20vh 1fr;
   
    color:white;
    background-color:black;
    

    button{
        margin: 0 2rem ;
        text-decoration: none;
        color: white;
        background-color: black;
    }

    h1{
        font-size: 1.2rem;
    }

    

    @media (max-width:800px){
        display:flex;
        flex-direction: column;
        position: relative;
    }
`


export const Cabecalho = styled.div`
    background-image: url(${fundoHeader});
    background-repeat: no-repeat;
    background-size: cover;
    display:grid;
    grid-template-columns: 1/3;
    grid-template-rows: 2fr 8fr;
    align-items: center;
    justify-content:center;
    height: 90vh;

    @media (max-width:800px){
        height: 60vh;
    }
   

`
export const Slogan = styled.img`
           
            
     @media(max-width:1000px){
       
            width: 700px;
            text-align:center;  

    } 

    @media(max-width:500px){
        width: 200px;
    }

    @media(max-width:500px){
        display:none;
    }

`

export const Logo = styled.img`
    justify-self: start;
    align-self: center;
    margin-left:-3rem;

    @media(max-width:800px){
            margin:0;
            width: 150px;
            text-align:center;        
    }

    

`
export const FiltroProdutos = styled.div`
    grid-row: 1/3;
    text-align: center;
    color:lightgray;
 
    div {
        width: 20vw;
        height: 60vh;
        border: 2px solid lightgray;
        margin-top: 10.8rem;
        margin-left: 4rem;
    }
    section{
        font-size:1.2rem;
    }
    h1{
        font-size:1.4rem;
    }
    
    @media (max-width:800px){
        display:flex;
        flex-direction: column;
        position: relative;
        grid-gap: 2rem;
        width: auto;
        height: auto;
    }
`

export const ContainerProdutos = styled.div`
    display:grid;
    grid-column: 2;
    grid-row: 2;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 10rem; 
    width:fit-content;
    justify-items: center;
    padding-top: 3rem;
    margin: 0 auto;

    @media (max-width:1000px){
        display:grid;
        grid-template-columns: 1fr 1fr;
        position:relative;
        grid-gap: 2rem;
    }
`

export const CardViagem = styled.div`
    display: grid;
    grid-template-columns: 7fr 2fr;
    grid-template-rows:1fr;
    box-sizing: content-box;
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
        width:22vw;

    }

    p{
        grid-row:2;
        grid-column: 1;
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
        padding:1.2rem 0.8rem;
        margin:0;
        display:flex;
        
    }
`


export const ContainerBusca = styled.div`
    flex-direction: row;
    justify-items: center;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 12vw;
    margin: 2rem 0;

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
    font-size: 1.2rem;
    padding:2%;
    align-items: center;
    text-align: center;
        
    
    div{
      margin: 0 7rem;
      display: flex;
      justify-content: space-evenly;
   }
   p{
    margin: 0 0.8rem;
    
   }
   select{
    background-color: black;
    color: lightgray;
    width: auto;
    height: auto;
    text-align: center;
   }

    button {
        margin: 0 2rem ;
        text-decoration: none;
        color: white;
        background-color: black;
    
    }
   `;

export const ExibeCarrinho = styled.div`
    display: flex;
    flex-direction: column;
   `


export const CardViagemCarrinho = styled.div`
    display: grid;
    grid-column: 1;
    grid-template-columns: 15vw 2fr;
    grid-template-rows:1fr 1fr 1fr;
    box-sizing: content-box;
 
    width:  47.4vw;
    height:  28.2vh;
    align-items:center;
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-left: 1px solid;
    border-right: 1px solid;
    padding:0;

    &&::hover{
       

    }

    img{
        grid-column: 1;
        grid-row:1/4;
        border:none;
        
        width: 15vw;

    }

    button{
        
        grid-row:3;
        color: white;
        background-color: black;
        height:100%;
        border: 1px solid white;
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

    h2 {
        grid-row:1;
        text-align:center;
        padding:1rem 0;
        margin:0;
        font-size: 1.4rem;
        text-align:center;
        letter-spacing:1px;
        text-transform: uppercase;
    }

    div{
        grid-row:2;
        font-size: 1.2rem;
        padding:2%;
        text-align:right;
    }
    p{
        text-align:left;
        font-size: 1.2rem;
        color:white;
        
    }


   
`


