import React from 'react';
import Header from '././components/Header.js';
import Footer from './components/Footer.js';
import ExibeProdutos from './components/ExibeProdutos.js';
class App extends React.Component {
  
  render() {
    
    return (
      <div className="App">
        <Header />
         <ExibeProdutos /> 
        <Footer />
      </div>
    );
  }
}

export default App;

