import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./style.css"

const menu = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="links" href="/">Livraria</Navbar.Brand>
          <Nav className="me-auto">
            <NavDropdown title="Cadastro" className="links" id="navbarScrollingDropdown-dark" menuVariant="dark">
              <Link to="/CadastroFuncionario" className="links dropdown-item">Funcionario</Link>
              <Link to="/CadastroCliente" className="links dropdown-item">Clientes</Link>
              <Link to="/CadastroLivros" className="links dropdown-item">Livros</Link>
              <Link to="/CadastroAutor" className="links dropdown-item">Autor</Link>
              <Link to="/CadastroQuadrinhos" className="links dropdown-item">Quadrinho</Link>
              <Link to="/CadastroEditoras" className="links dropdown-item">Editoras</Link>
            </NavDropdown>
            <Link to="/livros" className=" links nav-link">Livros</Link>
            <Link to="/quadrinhos" className="links nav-link">Quadrinhos</Link>
            <Link to="/autores" className="links nav-link">Autores</Link>
            <Link to="/clientes" className="links nav-link">Clientes</Link>
            <Link to="/funcionarios" className="links nav-link">Funcionarios</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default menu
