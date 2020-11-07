import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class PedidoCliente extends Component {
    state = { /*PQ AQUI DIFERENTE DO QUE MOSTRA TODOS OS CLIENTES É SÓ STATE E NÃO UM CONSTRUTOR*/
        pedido: [],
        erro: null
    };

    componentDidMount () {/*Aparentemente verifica o componente td vez q foi montado pra ver se n tem nenhum erro*/
        const { idCliente } = this.props.match.params; /*Pesquisar sobre esse tipo*/
        
        fetch(`http://localhost:3003/sistema/pedidos/${idCliente}`)
            .then(pedido =>
                pedido.json().then(pedido => this.setState({ pedido }))
                )
                .catch(erro => this.setState({ erro }))
    }

    render () {
        const { pedido, index } = this.state;

        /*if (cliente.telefone <= 0){
            cliente.telefone = "000000"
        }*/

        return (
            <>
            <pbody>
                {pedido.map((pedido, index) => (
                

                    <div className="pedido-info">
                    <p>CLIENTE PEDIDO</p>
                        <h1>-  {pedido.nomeProd}</h1>
                        <h2>ID Cliente - {pedido.idCliente}</h2>
                        <h2>Preço - R${pedido.precoVenda}</h2>
                        

                        <Link to={`/clientes`}>Voltar</Link> <br />
                    </div>

                ))}
            </pbody>
            </>
        )
    };
}