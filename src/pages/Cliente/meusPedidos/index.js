import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class Pedidos extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            pedido: [],
            erro: null
        };
    }

    componentDidMount () {/*Aparentemente verifica o componente td vez q foi montado pra ver se n tem nenhum erro*/
        fetch(`http://localhost:3003/sistema/meusPedidos`)
            .then(pedido =>
                pedido.json().then(pedido => this.setState({ pedido }))
                )
                .catch(erro => this.setState({ erro }))
    }

    render () {
        const { pedido } = this.state;
        return pedido.map((pedido, index) => (

            <div className="pedido-list">
                <div key={index} className="card mb-4">
                    <h5 className="card-header">{pedido.nomeProd}</h5>

                    <article key={pedido._id}>
                        <strong> Preço: R$ {pedido.precoVenda}</strong>
                        <p></p>
                        

                        <br/>
                    </article>

                </div>
            </div>
        ))
    };
}