import React, { useState , useEffect } from 'react'
import { Card, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Box from '../../components/card'
import AutorServices from '../../services/autorServices'

const Autor = () => {

    const [autores, setAutores] = useState([])

    useEffect(() => {
       const autores = AutorServices.getAll()
       setAutores(autores)
    },[])

    return (
        <>
            <Box title="Autores">
            <Card>
                <Table size="sm" striped variant="light">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Livros</th>
                            <th>Reside</th>
                        </tr>
                    </thead>
                    <tbody>
                        {autores.map((autor, i) =>(
                        <tr key={i}>
                            <td>{i}</td>
                            <td>{autor.nome}</td>
                            <td></td>
                            <td>{autor.residencia}</td>
                        </tr>
                         ))}
                    </tbody>
                </Table>
            </Card>
            <Link to="/CadastroAutor" className ="btn btn-outline-info">Inserir Autor</Link>
            </Box>
        </>
    )
}

export default Autor
