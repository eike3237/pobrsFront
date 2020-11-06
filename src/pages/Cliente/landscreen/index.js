import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class Main extends Component {

    render () {
        return (

            <div className="screen-land">
                <h1> Landscreen </h1>
                <p> Seja bem vindo a loja, entre e confira nossos itens</p>
                <Link to="/clientes"><button type="button"> Clientes </button></Link>
                <Link to="/produtos"><button>Produtos Vitrine</button></Link>
                <Link to="/pedidos"><button>Pedidos</button></Link>
                
            </div>
        )
    };
}