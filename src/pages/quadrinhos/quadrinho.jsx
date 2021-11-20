import React, { useState, useEffect } from 'react'
import { Button, Card, Table } from 'react-bootstrap'
import { AiFillDelete, AiFillEdit, AiOutlineSend } from 'react-icons/ai'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Box from '../../components/card'
import QuadrinhosServices from '../../services/quadrinhosServices'

const Quadrinhos = () => {

    const [quadrinhos, setQuadrinhos] = useState([])

    useEffect(() => {
        const quadrinhos = QuadrinhosServices.getAll()
        setQuadrinhos(quadrinhos)
    }, [])


    function excluir(i) {
        QuadrinhosServices.delete(i)
        setQuadrinhos(QuadrinhosServices.getAll())
    }


    return (
        <>
            <Box title="Quadrinhos">
                <Card>
                    <Table size="sm" striped variant="light">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Titulo</th>
                                <th>Autor</th>
                                <th>Editora</th>
                                <th>Gênero</th>
                            </tr>
                        </thead>
                        <tbody>
                            {quadrinhos.map((quadrinho, i) => (
                                <tr key={i}>

                                    <td>{i}</td>
                                    <td>{quadrinho.titulo}</td>
                                    <td>{quadrinho.autor}</td>
                                    <td>{quadrinho.editora}</td>
                                    <td>{quadrinho.genero}</td>
                                    <td>
                                        <Link to={'/CadastroQuadrinhos/' + i} className="btn btn-outline-info" title="Alterar">
                                            <AiFillEdit />Editar
                                        </Link>  {' '}
                                        <Button variant="outline-danger" title="Deletar" onClick={(() => excluir(i))} ><AiFillDelete />Deletar</Button>{' '}
                                        <Link to="/CadastroQuadrinhos" className="btn btn-outline-primary"><AiOutlineSend />Inserir quadrinhos</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card>
            </Box>
        </>
    )
}

export default Quadrinhos
