import React, { useState , useEffect } from 'react'
import { Button, Card, Table } from 'react-bootstrap'
import { AiFillDelete, AiFillEdit, AiOutlineSend } from 'react-icons/ai'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Box from '../../components/card'
import LivrosServices from '../../services/livrosServices'

const Livros = () => {

    const [livros, setLivros] = useState([])

    useEffect(() => {
       const livros = LivrosServices.getAll()
       setLivros(livros)
    },[])

    function excluir(i) {
        LivrosServices.delete(i)
        setLivros(LivrosServices.getAll())
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
                        {livros.map((livro, i) =>(
                        <tr key={i}>
                            <td>{livro.titulo}</td>
                            <td>{livro.autor}</td>
                            <td>{livro.editora}</td>
                            <td>{livro.genero}</td>
                            <td>
                                        <Link to={'/Cadastrolivros/'+i } className="btn btn-outline-info" title="Alterar">
                                        <AiFillEdit />Editar
                                        </Link>  {' '}
                                        <Button variant="outline-danger" title="Deletar" onClick={(() => excluir(i))} ><AiFillDelete />Deletar</Button>{' '}
                                        <Link to="/Cadastrolivros" className ="btn btn-outline-primary"><AiOutlineSend />Inserir livros</Link>
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

export default Livros
