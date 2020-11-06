import React, { Component } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import { Link } from 'react-router-dom';
import './index.css';

export default class Main extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            cliente: [],
            erro: null
        };
    }

    componentDidMount () {/*Aparentemente verifica o componente td vez q foi montado pra ver se n tem nenhum erro*/
        fetch(`http://localhost:3003/sistema/clientes`)
            .then(cliente =>
                cliente.json().then(cliente => this.setState({ cliente }))
                )
                .catch(erro => this.setState({ erro }))
    }

    render () {
        const { cliente } = this.state;
        return cliente.map((cliente, index) => (

            <div className="cliente-list">
                <div key={index} className="card mb-4">
                    <h5 className="card-header">{cliente.nome}</h5>

                    <article key={cliente._id}>
                        <strong>Nome = {cliente.nome}</strong>
                        <p>CPF = {cliente.cpf}</p>
                        
                        <p><Link to={`/clientes/${cliente.idCliente}`}>Clique para detalhes</Link></p>
                        <p><Link to={`/novoPedido`}>Adicionar Pedido</Link></p>
                        <p><Link to={`/pedidosCliente/${cliente.idCliente}`}>Mostrar Pedidos</Link></p>

                        <br/>
                    </article>

                </div>
            </div>
        ))
    };
}