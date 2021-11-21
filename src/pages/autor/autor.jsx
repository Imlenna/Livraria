import React, { useState, useEffect } from 'react'
import { Button, Card, Container, Table } from 'react-bootstrap'
import { AiFillDelete, AiFillEdit, AiOutlineSend } from 'react-icons/ai'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Box from '../../components/card'
import AutorServices from '../../services/autorServices'


const Autor = (props) => {

    const [autores, setAutores] = useState([])

    useEffect(() => {
        const autores = AutorServices.getAll()
        setAutores(autores)
    }, [])

    function excluir(i) {
        
        AutorServices.delete(i)
        setAutores(AutorServices.getAll())
    }


    return (
        <>
            <Box title="Autores">
                <Card>
                    <Table size="sm" variant="light">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Reside</th>
                            </tr>
                        </thead>
                        <tbody>
                            {autores.map((autor, i) => (
                                <tr key={i}>
                                    <td>{autor.nome}</td>
                                    <td>{autor.residencia}</td>
                                    <td>
                                        <Link to={'/CadastroAutor/' + i} className="botoes btn-sm btn btn-outline-info" title="Alterar">
                                            <AiFillEdit />Editar
                                        </Link>  {' '}
                                        <Button variant="outline-danger" className="botoes btn-sm" title="Deletar" onClick={(() => excluir(i))} ><AiFillDelete />Deletar</Button>{' '}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Container className="mb-3">
                        <Link to="/CadastroAutor" className="botoes btn-sm btn btn-outline-primary float-end"><AiOutlineSend />Inserir</Link>
                    </Container>
                </Card>
            </Box>
        </>
    )
}

export default Autor
