import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandScreen from './pages/Cliente/landscreen/index';
/*Cliente*/
import MainCliente from './pages/Admin/clientes/index';
import DetalhesCliente from './pages/Admin/detalhesC/index';
import CriarCliente from './pages/Cliente/cadastro/index';
import EditarCliente from './pages/Cliente/atualizar/index';
/*Produtos*/
import EstoqueProdutos from './pages/Cliente/produtos/index';
import DetalheProduto from './pages/Cliente/detalheProduto/index'


const Routes = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LandScreen}/>

            <Route exact path="/admin/clientes" component={MainCliente}/>
            <Route exact path="/clientes/:id" component={DetalhesCliente}/>
            <Route exact path="/criarCliente" component={CriarCliente}/>
            <Route exact path="/admin/atualizarCliente/:id" component={EditarCliente}/>

            <Route exact path="/produtos" component={EstoqueProdutos}/>
            <Route exact path="/produtosDetail/:id" component={DetalheProduto}/>

        </Switch>
    
    </BrowserRouter>
)

export default Routes;