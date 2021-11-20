import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const menu = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Livraria</Navbar.Brand>
          <Nav className="me-auto">
            <NavDropdown title="Cadastro" id="navbarScrollingDropdown">
              <Link to="/CadastroFuncionario" className="dropdown-item">Funcionario</Link>
              <Link to="/CadastroCliente" className="dropdown-item">Clientes</Link>
              <Link to="/CadastroLivros" className="dropdown-item">Livros</Link>
              <Link to="/CadastroAutor" className="dropdown-item">Autor</Link>
              <Link to="/CadastroQuadrinhos" className="dropdown-item">Quadrinho</Link>
              <Link to="/CadastroEditoras" className="dropdown-item">Editoras</Link>
            </NavDropdown>
            <Link to="/livros" className="nav-link">Livros</Link>
            <Link to="/quadrinhos" className="nav-link">Quadrinhos</Link>
            <Link to="/autores" className="nav-link">Autores</Link>
            <Link to="/clientes" className="nav-link">Clientes</Link>
            <Link to="/funcionarios" className="nav-link">Funcionarios</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default menu
