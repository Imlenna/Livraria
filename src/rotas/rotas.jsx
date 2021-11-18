import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AutorForm from '../pages/autor/AutorForm'
import Autor from '../pages/autor/autor'
import ClienteForm from '../pages/cliente/ClienteForm'
import Cliente from '../pages/cliente/cliente'
import FuncionarioForm from '../pages/funcionarios/FuncionarioForm'
import Funcionarios from '../pages/funcionarios/funcionario'
import LivroFrom from '../pages/livros/LivrosForm'
import Livros from '../pages/livros/livro'
import QuadrinhoForm from '../pages/quadrinhos/QuadrinhoForm'
import Quadrinhos from '../pages/quadrinhos/quadrinho'
import Inicio from '../pages/Inicio'

const rotas = () => {
    return (
        <>
            <Switch>
                    <Route exact path="/" component={Inicio}/>
                    <Route path="/CadastroAutor" component={AutorForm} />
                    <Route path="/CadastroFuncionario" component={FuncionarioForm} />
                    <Route path="/CadastroCliente" component={ClienteForm} />
                    <Route path="/CadastroLivros" component={LivroFrom} />
                    <Route path="/CadastroQuadrinhos" component={QuadrinhoForm} />
                    <Route path="/Autores" component={Autor} />
                    <Route path="/Funcionarios" component={Funcionarios} />
                    <Route path="/Clientes" component={Cliente} />
                    <Route path="/Livros" component={Livros} />
                    <Route path="/Quadrinhos" component={Quadrinhos} />
            </Switch>
        </>
    )
}

export default rotas
