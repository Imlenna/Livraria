import React, { useState, useEffect } from 'react'
import { Button, Card, Container, Table } from 'react-bootstrap'
import { AiFillDelete, AiFillEdit, AiOutlineSend } from 'react-icons/ai'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Swal from 'sweetalert2'
import Box from '../../components/card'
import EditoraServices from '../../services/editoraServices'


const Editora = (props) => {

    const [editora, setEditora] = useState([])

    useEffect(() => {
        const editora = EditoraServices.getAll()
        setEditora(editora)
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
                EditoraServices.delete(i)
                setEditora(EditoraServices.getAll())
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
            <Box title="Editora">
                <Card>
                    <Table size="sm" variant="light">
                        <thead>
                            <tr>
                                <th>Editora</th>
                                <th>País de Origem</th>
                            </tr>
                        </thead>
                        <tbody>
                            {editora.map((editora, i) => (
                                <tr key={i}>
                                    <td>{editora.editora}</td>
                                    <td>{editora.pais}</td>
                                    <td>
                                        <Link to={'/CadastroEditoras/' + i} className="btn btn-outline-info" title="Alterar">
                                            <AiFillEdit />Editar
                                        </Link>  {' '}
                                        <Button variant="outline-danger" title="Deletar" onClick={(() => excluir(i))} ><AiFillDelete />Deletar</Button>{' '}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Container className="mb-3">
                        <Link to="/CadastroEditoras" className="btn btn-outline-primary float-end"><AiOutlineSend />Inserir</Link>
                    </Container>
                </Card>
            </Box>
        </>
    )
}

export default Editora
