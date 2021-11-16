import { useForm } from 'react-hook-form'
import { Button, Col, Form, Row } from 'react-bootstrap'
import Card from '../../components/card'
import { AiOutlineRollback, AiOutlineSend } from 'react-icons/ai';
import validador from '../../validadores/validadorQuadrinho';


const QuadrinhoForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()


    function enviarDados(dados) {
        console.log(dados);
    }

    return (
        <>
            <Card title="Quadrinho">
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="titulo">
                            <Form.Label>Titulo</Form.Label>
                            <Form.Control type="text" {...register("titulo", validador.titulo)} />
                            {errors.titulo && <span className="text-danger">{errors.titulo.message}</span>}
                        </Form.Group>
                        <Form.Group as={Row} controlId="editora">
                            <Form.Label>Editora</Form.Label>
                            <Form.Control type="text" {...register("editora", validador.editora)} />
                            {errors.editora && <span className="text-danger">{errors.editora.message}</span>}
                        </Form.Group>
                        <Form.Group as={Row} controlId="publicação">
                            <Form.Label>Data de Publicação:</Form.Label>
                            <Form.Control type="date" {...register("publicação",validador.publicação)} />
                        </Form.Group>
                        <Form.Group as={Row} controlId="autor">
                            <Form.Label>Autor:</Form.Label>
                            <Form.Control type="text" {...register("autor",validador.autor)} />
                            {errors.autor && <span className="text-danger">{errors.autor.message}</span>}
                        </Form.Group>
                        <Form.Group as={Row} controlId="versão">
                            <Form.Label>Versão:</Form.Label>
                            <Form.Control type="number" {...register("versão",validador.versão)} />
                        </Form.Group>
                        <Form.Group as={Row} controlId="genero">
                            <Form.Label>Genero:</Form.Label>
                            <Form.Control type="text" {...register("genero",validador.genero)} />
                            {errors.genero && <span className="text-danger">{errors.genero.message}</span>}
                        </Form.Group>
                        <Form.Group as={Row} controlId="pais">
                            <Form.Label>País de publicação:</Form.Label>
                            <Form.Control type="text" {...register("pais",validador.pais)} />
                        </Form.Group>
                    </Row>
                    <div className="text-center">
                        <Button variant="success" onClick={handleSubmit(enviarDados)}><AiOutlineSend /> Salvar</Button>
                      
                        <Button variant="danger"><AiOutlineRollback />Voltar</Button>
                    </div>
                </Form>
            </Card>
        </>
    )
}

export default QuadrinhoForm
