import React, { useState , useEffect } from 'react'
import { Card, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Box from '../../components/card'
import LivrosServices from '../../services/livrosServices'

const Livros = () => {

    const [livros, setLivros] = useState([])

    useEffect(() => {
       const livros = LivrosServices.getAll()
       setLivros(livros)
    },[])
    
    return (
        <>
            <Box title="Livros">
            <Card>
                <Table size="sm" striped variant="light">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Titulo</th>
                            <th>Autor</th>
                            <th>Editora</th>
                            <th>Exemplares</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map((livro, i) =>(
                        <tr key={i}>
                            
                            <td>{i}</td>
                            <td>{livro.titulo}</td>
                            <td>{livro.autor}</td>
                            <td>{livro.editora}</td>
                            <td>{livro.exemplares}</td>
                        </tr>
                         ))}
                    </tbody>
                </Table>
            </Card>
            <Link to="/Cadastrolivros" className ="btn btn-outline-info">Inserir livros</Link>
            </Box>
        </>
    )
}

export default Livros
