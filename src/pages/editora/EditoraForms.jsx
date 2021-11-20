import { useForm } from 'react-hook-form'
import { Button, Col, Form, Row } from 'react-bootstrap'
import Card from '../../components/card'
import { AiOutlineRollback, AiOutlineSend } from 'react-icons/ai';
import validador from '../../validadores/validadorLivro';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import EditoraServices from '../../services/editoraServices'
import React, { useEffect } from 'react';


const EditoraForm = (props) => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    useEffect(() => {
        const id = props.match.params.id
        if (id) {
            const editora = EditoraServices.get(id)

            for (let campo in editora) {
                setValue(campo, editora[campo])
            }
        }

    }, [props, setValue])

    function enviarDados(dados) {
        const id = props.match.params.id
        if (id) {
            EditoraServices.update(dados, id)
        }
        else {
            EditoraServices.create(dados)
        }

        props.history.push('/Editoras')

    }


    return (
        <>
            <Card title="Editora">
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="editora">
                            <Form.Label>Editora</Form.Label>
                            <Form.Control type="text" {...register("editora", validador.editora)} />
                            {errors.editora && <span className="text-danger">{errors.editora.message}</span>}
                        </Form.Group>
                        <Form.Group as={Col} controlId="pais">
                            <Form.Label>País de Origem:</Form.Label>
                            <Form.Control type="text" {...register("pais", validador.pais)} />
                        </Form.Group>
                    </Row>
                    <div className="mt-3 text-center">
                        <Button variant="success" onClick={handleSubmit(enviarDados)}><AiOutlineSend /> Salvar</Button>{'    '}
                        <Link to="/" className="btn btn-danger"><AiOutlineRollback />Voltar</Link>
                    </div>
                </Form>
            </Card>
        </>
    )
}

export default EditoraForm
