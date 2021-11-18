import { useForm } from 'react-hook-form'
import { Button, Form, Row } from 'react-bootstrap'
import Card from '../../components/card'
import {  AiOutlineRollback, AiOutlineSend } from 'react-icons/ai';
import validador from '../../validadores/validadorAutor';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';



const AutorForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    function enviarDados(dados) {
        console.log(dados);
    }

    return (
        <>
            <Card title="Autor">
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Row} controlId="Nome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" autoComplete="off" {...register("nome", validador.nome)} />
                            {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
                        </Form.Group>
                        <Form.Group as={Row} controlId="residencia">
                            <Form.Label>Residencia</Form.Label>
                            <Form.Control type="text" {...register("residencia", validador.residencia)} />
                            {errors.residencia && <span className="text-danger">{errors.residencia.message}</span>}
                        </Form.Group>
                        <Form.Group as={Row} controlId="nascimento">
                            <Form.Label>Data de Nascimento</Form.Label>
                            <Form.Control type="date" {...register("nascimento", validador.nascimento)} />
                            {errors.nascimento && <span className="text-danger">{errors.nascimento.message}</span>}
                        </Form.Group>
                    </Row>

                    <div className="text-center ">
                        <Button variant="success" onClick={handleSubmit(enviarDados)}><AiOutlineSend /> Salvar</Button>
                        <Link to="/" className="btn btn-danger"><AiOutlineRollback/>Voltar</Link>
                    </div>

                </Form>
            </Card>
        </>
    )
}

export default AutorForm
