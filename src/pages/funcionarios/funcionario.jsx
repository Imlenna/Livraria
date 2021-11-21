import React, { useState , useEffect } from 'react'
import { Button, Card, Container, Table } from 'react-bootstrap'
import { AiFillDelete, AiFillEdit, AiOutlineSend } from 'react-icons/ai'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Swal from 'sweetalert2'
import Box from '../../components/card'
import FuncionarioServices from '../../services/funcionarioServices'

const Funcionario = () => {

    const [funcionarios, setFuncionarios] = useState([])

    useEffect(() => {
       const funcionarios = FuncionarioServices.getAll()
       setFuncionarios(funcionarios)
    },[])

    function excluir(i) {
        Swal.fire({
            title: 'Deletar',
            text: "Você deseja deletar?",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonColor: '#DC3545',
            confirmButtonColor: '#0D6EFD',
            cancelButtonText: "Não",
            confirmButtonText: 'Sim'

          }).then((result) => {
            if (result.isConfirmed) {
                FuncionarioServices.delete(i)
                setFuncionarios(FuncionarioServices.getAll())
              Swal.fire(
                'Deletado',
                'O Autor foi deletado',
                'success'
              )
            }
          })
        
    }
    
    return (
        <>
            <Box title="Funcionarios">
            <Card>
                <Table size="sm" striped variant="light">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Função</th>
                            <th>Matricula</th>
                        </tr>
                    </thead>
                    <tbody>
                        {funcionarios.map((funcionario, i) =>(
                        <tr key={i}>
                            <td>{funcionario.nome}</td>
                            <td>{funcionario.cpf}</td>
                            <td>{funcionario.funcao}</td>
                            <td>{funcionario.matricula}</td>
                            <td>
                                        <Link to={'/Cadastrofuncionario/'+i } className="botoes btn-sm btn btn-outline-info" title="Alterar">
                                        <AiFillEdit />Editar
                                        </Link>  {' '}
                                        <Button variant="outline-danger" title="Deletar" className="botoes btn-sm" onClick={(() => excluir(i))} ><AiFillDelete />Deletar</Button>{' '}
                            </td>
                        </tr>
                         ))}
                    </tbody>
                </Table>
                <Container className="mb-3">
                <Link to="/Cadastrofuncionario" className ="botoes btn-sm btn btn-outline-primary float-end"><AiOutlineSend />Inserir</Link>
                </Container>
            </Card>
            </Box>
        </>
    )
}

export default Funcionario
