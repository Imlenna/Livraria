import React, { useState , useEffect } from 'react'
import { Card, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Box from '../../components/card'
import QuadrinhosServices from '../../services/quadrinhosServices'

const Quadrinhos = () => {

    const [quadrinhos, setQuadrinhos] = useState([])

    useEffect(() => {
       const quadrinhos = QuadrinhosServices.getAll()
       setQuadrinhos(quadrinhos)
    },[])
    
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
                            <th>Exemplares</th>
                        </tr>
                    </thead>
                    <tbody>
                        {quadrinhos.map((quadrinho, i) =>(
                        <tr key={i}>
                            
                            <td>{i}</td>
                            <td>{quadrinho.titulo}</td>
                            <td>{quadrinho.autor}</td>
                            <td>{quadrinho.editora}</td>
                            <td>{quadrinho.exemplares}</td>
                        </tr>
                         ))}
                    </tbody>
                </Table>
            </Card>
            <Link to="/CadastroQuadrinhos" className ="btn btn-outline-info">Inserir quadrinhos</Link>
            </Box>
        </>
    )
}

export default Quadrinhos
