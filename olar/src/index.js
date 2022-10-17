import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* import Componente00 from './Componente00';
import Componente01 from './Componente01';
 */
/* class LetraMaiuscula extends React.Component{
  render(){
    return <h1>Meu primeiro gomponten</h1>
  }
}

ReactDOM.render(<LetraMaiuscula/>, document.getElementById('root')); */

// /; .. . . .. .  . . .importando componentes/; .. . . .. .  . . .
/* class Principessa extends React.Component{
  render(){
    return(
      <div>
        <Componente00 />
        <Componente01 />
      </div>
    );
  }
} */

// /; .. . . .. .  . . .props/; .. . . .. .  . . .
/* var dados = {nome:"dasdadf", idade:21}

class Principessa extends React.Component{
  render(){
    return(
      <div>
        <p>Este meu nomer {this.props.informaçoes.nome}</p>
        <p>{this.props.informaçoes.idade}</p>
      </div>
    );
  }
}

ReactDOM.render(<Principessa informaçoes={dados} />, document.getElementById('root')); */

class Componente extends React.Component{

    //construtor a primeira funcionalidade q o componente executa
    constructor(props){
      super(props);

      this.state = {nome:'Pin'};
    }

    render(){
      return <h1>{this.state.nome}</h1>;
    }

}

ReactDOM.render(<Componente />, document.getElementById('root'));