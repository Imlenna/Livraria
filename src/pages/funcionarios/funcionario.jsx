import React, { useState , useEffect } from 'react'
import { Card, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Box from '../../components/card'
import FuncionarioServices from '../../services/funcionarioServices'

const Funcionario = () => {

    const [funcionarios, setFuncionarios] = useState([])

    useEffect(() => {
       const funcionarios = FuncionarioServices.getAll()
       setFuncionarios(funcionarios)
    },[])
    
    return (
        <>
            <Box title="Funcionarios">
            <Card>
                <Table size="sm" striped variant="light">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Função</th>
                            <th>Matricula</th>
                        </tr>
                    </thead>
                    <tbody>
                        {funcionarios.map((funcionario, i) =>(
                        <tr key={i}>
                            
                            <td>{i}</td>
                            <td>{funcionario.nome}</td>
                            <td>{funcionario.cpf}</td>
                            <td>{funcionario.funcao}</td>
                            <td>{funcionario.matricula}</td>
                        </tr>
                         ))}
                    </tbody>
                </Table>
            </Card>
            <Link to="/Cadastrofuncionario" className ="btn btn-outline-info">Inserir funcionario</Link>
            </Box>
        </>
    )
}

export default Funcionario
