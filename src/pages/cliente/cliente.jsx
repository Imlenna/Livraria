import React, { useState, useEffect } from 'react'
import { Button, Card, Container, Table } from 'react-bootstrap'
import { AiFillDelete, AiFillEdit, AiOutlineSend } from 'react-icons/ai'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Box from '../../components/card'
import ClienteServices from '../../services/clienteServices'

const Cliente = () => {

    const [clientes, setClientes] = useState([])

    useEffect(() => {
        const clientes = ClienteServices.getAll()
        setClientes(clientes)
    }, [])

    function excluir(i) {
        ClienteServices.delete(i)
        setClientes(ClienteServices.getAll())
    }



    return (
        <>
            <Box title="Clientes">
                <Card>
                    <Table size="sm" striped variant="light">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>CPF</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientes.map((cliente, i) => (
                                <tr key={i}>
                                    <td>{cliente.nome}</td>
                                    <td>{cliente.cpf}</td>
                                    <td>{cliente.email}</td>
                                    <td>
                                        <Link to={'/Cadastrocliente/' + i} className="botoes btn-sm  btn btn-outline-info" title="Alterar">
                                            <AiFillEdit />Editar
                                        </Link>  {' '}
                                        <Button variant="outline-danger" className="botoes btn-sm" title="Deletar" onClick={(() => excluir(i))} ><AiFillDelete />Deletar</Button>{' '}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Container className="mb-3">
                        <Link to="/Cadastrocliente" className="botoes btn-sm  btn btn-outline-primary float-end"><AiOutlineSend />Inserir</Link>
                    </Container>
                </Card>
            </Box>
        </>
    )
}

export default Cliente
