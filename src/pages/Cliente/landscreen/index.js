import React, { Component } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import { Link } from 'react-router-dom';
import './index.css';

export default class Main extends Component {

    render () {
        return (

            <div className="screen-land">
                <h1> Landscreen </h1>
                <p> Seja bem vindo a loja, entre e confira nossos itens</p>
                <Link to="/produtos"><button type="button"> Entrar </button></Link>
                <Link to="/login"><button>Sign In</button></Link>
                <Link to="/criarCliente"><button>Sign up</button></Link>
                
            </div>
        )
    };
}