import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class Cliente extends Component {
    state = { /*PQ AQUI DIFERENTE DO QUE MOSTRA TODOS OS CLIENTES É SÓ STATE E NÃO UM CONSTRUTOR*/
        cliente: {},
    };

    componentDidMount () {/*Aparentemente verifica o componente td vez q foi montado pra ver se n tem nenhum erro*/
        const { id } = this.props.match.params; /*Pesquisar sobre esse tipo*/
        
        fetch(`http://localhost:3003/sistema/clientes/${id}`)
            .then(cliente =>
                cliente.json().then(cliente => this.setState({ cliente }))
                )
                .catch(erro => this.setState({ erro }))
    }

    render () {
        const { cliente, index } = this.state;

        /*if (cliente.telefone <= 0){
            cliente.telefone = "000000"
        }*/

        return (
            <div className="cliente-info">
                <h1>{cliente.nome}</h1>
                <h2>ID - {cliente.id}</h2>
                <h2>Endereço - {cliente.end}</h2>
                <h2>Email - {cliente.email}</h2>
                <h2>Telefone - {cliente.telefone}</h2>
                <h2>CPF - {cliente.cpf}</h2>
                <h2>CEP - {cliente.cep}</h2>
                <br />

                <Link to={`/admin/clientes`}>Voltar</Link> <br />
            </div>
        )
    };
}