import React, { useState, useEffect } from 'react'
import { Button, Card, Container, Table } from 'react-bootstrap'
import { AiFillDelete, AiFillEdit, AiOutlineSend } from 'react-icons/ai'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Swal from 'sweetalert2'
import Box from '../../components/card'
import LivrosServices from '../../services/livrosServices'

const Livros = () => {

    const [livros, setLivros] = useState([])

    useEffect(() => {
        const livros = LivrosServices.getAll()
        setLivros(livros)
    }, [])

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
                LivrosServices.delete(i)
                setLivros(LivrosServices.getAll())
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
            <Box title="Livros">
                <Card>
                    <Table size="sm" striped variant="light">
                        <thead>
                            <tr>
                                <th>Titulo</th>
                                <th>Autor</th>
                                <th>Editora</th>
                                <th>Gênero</th>
                            </tr>
                        </thead>
                        <tbody>
                            {livros.map((livro, i) => (
                                <tr key={i}>
                                    <td>{livro.titulo}</td>
                                    <td>{livro.autor}</td>
                                    <td>{livro.editora}</td>
                                    <td>{livro.genero}</td>
                                    <td>
                                        <Link to={'/Cadastrolivros/' + i} className="botoes btn btn-sm btn-outline-info" title="Alterar">
                                            <AiFillEdit />Editar
                                        </Link>  {' '}
                                        <Button variant="outline-danger" className="botoes btn-sm" title="Deletar" onClick={(() => excluir(i))} ><AiFillDelete />Deletar</Button>{' '}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Container className="mb-3">
                        <Link to="/Cadastrolivros" className="botoes btn btn-sm btn-outline-primary float-end"><AiOutlineSend />Inserir</Link>
                    </Container>
                </Card>
            </Box>
        </>
    )
}

export default Livros
