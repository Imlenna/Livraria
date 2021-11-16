import { useForm } from 'react-hook-form'
import { Button, Col, Form, Row } from 'react-bootstrap'
import Card from '../../components/card'
import { AiOutlineRollback, AiOutlineSend } from 'react-icons/ai';
import validador from '../../validadores/validadorFuncionario';


const FuncionarioForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()


    function enviarDados(dados) {
        console.log(dados);
    }

    return (
        <>
            <Card title="Funcionario">
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="nome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" {...register("nome", validador.nome)} />
                            {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
                        </Form.Group>
                        <Form.Group as={Row} controlId="função">
                            <Form.Label>Função</Form.Label>
                            <Form.Control type="text" {...register("função", validador.função)} />
                            {errors.função && <span className="text-danger">{errors.função.message}</span>}
                        </Form.Group>
                        <Form.Group as={Row} controlId="contratação">
                            <Form.Label>Data de contratação</Form.Label>
                            <Form.Control type="date" {...register("contratação", validador.contratação)} />
                        </Form.Group>
                        <Form.Group as={Row} controlId="cpf">
                            <Form.Label>CPF</Form.Label>
                            <Form.Control type="text" {...register("cpf", validador.cpf)} />
                            {errors.cpf && <span className="text-danger">{errors.cpf.message}</span>}
                        </Form.Group>
                        <Form.Group as={Row} controlId="matricula">
                            <Form.Label>matricula</Form.Label>
                            <Form.Control type="text" {...register("matricula", validador.matricula)} />
                            {errors.matricula && <span className="text-danger">{errors.matricula.message}</span>}
                        </Form.Group>
                        <Form.Group as={Row} controlId="nascimento">
                            <Form.Label>Data de nascimento</Form.Label>
                            <Form.Control type="date" {...register("nascimento", validador.nascimento)} />
                            {errors.nascimento && <span className="text-danger">{errors.nascimento.message}</span>}
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

export default FuncionarioForm
