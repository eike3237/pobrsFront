import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './produtos.css';

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            produto: [],
            erro: null
        };
    }

    componentDidMount () {
        fetch(`http://localhost:3003/sistema/produtos`)
            .then(produto => 
                produto.json().then(produto => this.setState({ produto }))
            )
                .catch(erro => this.setState({ erro }))
    }

    render () {
        const { produto } = this.state;
        //const idCliente = req.params.params.idCliente;
        return (
            <>
            <div className="Clientes-Options">
            <button><Link to={`/cadastroProduto`}>Inserir novo produto</Link></button>
            </div>

            <div className="produto-list">
                {produto.map((produto, index) => (
                    <div key={index} className="card mb-4">
                        <h5 className="card-header">{produto.nome}</h5>

                        <arcticle key={produto._id}>
                            <strong>Item: {produto.nome}</strong><br></br>
                            <img src={`${produto.linkImg}`} alt="#" 
                            width="300px" height="300px"></img>
                            <p>Preço: R${produto.precoVenda}</p>
                            <p>{produto.descricao}</p>
                            <div className="buttons">
                            <Link to={`/produtosDetail/${produto.idProduto}`}><button type="submit">Detalhes</button></Link>
                            <Link to={`/deleteProduto/${produto.idProduto}`}><button type="submit">Remover Produto</button></Link>
                            </div>
                        </arcticle>
                    </div>
                ))}
            </div> 
            </>
        )
    };
}