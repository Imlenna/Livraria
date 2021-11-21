import React, { useState, useEffect } from 'react'
import { Button, Card, Container, Table } from 'react-bootstrap'
import { AiFillDelete, AiFillEdit, AiOutlineSend } from 'react-icons/ai'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Swal from 'sweetalert2'
import Box from '../../components/card'
import QuadrinhosServices from '../../services/quadrinhosServices'

const Quadrinhos = () => {

    const [quadrinhos, setQuadrinhos] = useState([])

    useEffect(() => {
        const quadrinhos = QuadrinhosServices.getAll()
        setQuadrinhos(quadrinhos)
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
                QuadrinhosServices.delete(i)
                setQuadrinhos(QuadrinhosServices.getAll())
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
            <Box title="Quadrinhos">
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
                            {quadrinhos.map((quadrinho, i) => (
                                <tr key={i}>
                                    <td>{quadrinho.titulo}</td>
                                    <td>{quadrinho.autor}</td>
                                    <td>{quadrinho.editora}</td>
                                    <td>{quadrinho.genero}</td>
                                    <td>
                                        <Link to={'/CadastroQuadrinhos/' + i} className="botoes btn-sm btn btn-outline-info" title="Alterar">
                                            <AiFillEdit />Editar
                                        </Link>  {' '}
                                        <Button variant="outline-danger" title="Deletar" className="botoes btn-sm" onClick={(() => excluir(i))} ><AiFillDelete />Deletar</Button>{' '}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Container className="mb-3">
                        <Link to="/CadastroQuadrinhos" className="botoes btn-sm btn btn-outline-primary float-end"><AiOutlineSend />Inserir</Link>
                    </Container>
                </Card>
            </Box>
        </>
    )
}

export default Quadrinhos
