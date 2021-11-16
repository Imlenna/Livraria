import { useForm } from 'react-hook-form'
import { Button, Form, Row } from 'react-bootstrap'
import Card from '../../components/card'
import { AiOutlineRollback, AiOutlineSend } from 'react-icons/ai';
import validador from '../../validadores/validadorCliente';


const ClienteForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()


    function enviarDados(dados) {
        console.log(dados);
    }

    return (
        <>
            <Card title="Cliente">
                <Form>
                    <Row className="mb-3">
                        <Form.Group controlId="nome">
                            <Form.Label>Nome:</Form.Label>
                            <Form.Control type="text" autoComplete="off" {...register("nome", validador.nome)} />
                            {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
                        </Form.Group>
                        <Form.Group as={Row} controlId="residencia">
                            <Form.Label>Residência:</Form.Label>
                            <Form.Control type="text" {...register("residencia", validador.residencia)} />
                            {errors.residencia && <span className="text-danger">{errors.residencia.message}</span>}
                        </Form.Group>
                        <Form.Group as={Row} controlId="nascimento">
                            <Form.Label>Data de Nascimento:</Form.Label>
                            <Form.Control type="date" {...register("nascimento",validador.nascimento)} />
                            {errors.nascimento && <span className="text-danger">{errors.nascimento.message}</span>}
                        </Form.Group>
                        <Form.Group as={Row} controlId="cpf">
                            <Form.Label>CPF:</Form.Label>
                            <Form.Control type="number" {...register("cpf",validador.cpf)} />
                            {errors.cpf && <span className="text-danger">{errors.cpf.message}</span>}
                        </Form.Group>
                        <Form.Group as={Row} controlId="email">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" {...register("email",validador.email)} />
                            {errors.email && <span className="text-danger">{errors.email.message}</span>}
                        </Form.Group>
                        <Form.Group as={Row} controlId="telefone">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control type="text" {...register("telefone", validador.telefone)} />
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

export default ClienteForm
