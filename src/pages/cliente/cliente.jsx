import React, { useState , useEffect } from 'react'
import { Card, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Box from '../../components/card'
import ClienteServices from '../../services/clienteServices'

const Cliente = () => {

    const [clientes, setClientes] = useState([])

    useEffect(() => {
       const clientes = ClienteServices.getAll()
       setClientes(clientes)
    },[])
    
    return (
        <>
            <Box title="Clientes">
            <Card>
                <Table size="sm" striped variant="light">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map((cliente, i) =>(
                        <tr key={i}>
                            
                            <td>{i}</td>
                            <td>{cliente.nome}</td>
                            <td>{cliente.cpf}</td>
                            <td>{cliente.email}</td>
                        </tr>
                         ))}
                    </tbody>
                </Table>
            </Card>
            <Link to="/Cadastrocliente" className ="btn btn-outline-info">Inserir cliente</Link>
            </Box>
        </>
    )
}

export default Cliente
