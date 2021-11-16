import React from 'react'
import { Container } from 'react-bootstrap'
import {Switch , Route } from 'react-router-dom'
import AutorForm from '../pages/autor/AutorForm'
import ClienteForm from '../pages/cliente/ClienteForm'
import FuncionarioForm from '../pages/funcionarios/FuncionarioForm'
import LivroFrom from '../pages/livros/LivrosForm'
import QuadrinhoForm from '../pages/quadrinhos/QuadrinhoForm'



const rotas = () => {
    return (
        <>
            <Switch>
                <Container className="mt-3">
                    <Route path="/CadastroAutor" component={AutorForm} />
                    <Route path="/CadastroFuncionario" component={FuncionarioForm} />
                    <Route path="/CadastroCliente" component={ClienteForm} />
                    <Route path="/CadastroLivros" component={LivroFrom} />
                    <Route path="/CadastroQuadrinhos" component={QuadrinhoForm} />
                </Container>
            </Switch>
        </>
    )
}

export default rotas
