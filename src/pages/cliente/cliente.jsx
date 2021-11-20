import React, { useState, useEffect } from 'react'
import { Button, Card, Table } from 'react-bootstrap'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
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
                                        <Link to={'/Cadastrocliente/' + i} className="btn btn-outline-info" title="Alterar">
                                        <AiFillEdit />Editar
                                        </Link>  {' '}
                                        <Button variant="outline-danger" title="Deletar" onClick={(() => excluir(i))} ><AiFillDelete />Deletar</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card>
                <Link to="/Cadastrocliente" className="btn btn-outline-info">Inserir cliente</Link>
            </Box>
        </>
    )
}

export default Cliente
