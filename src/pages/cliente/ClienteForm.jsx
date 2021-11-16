import { useForm } from 'react-hook-form'
import { Button, Form, Row } from 'react-bootstrap'
import Card from '../../components/card'
import { AiOutlineRollback, AiOutlineSend } from 'react-icons/ai';
import validador from '../../validadores/validadorCliente';
import { mask, unMask } from 'remask';


const ClienteForm = () => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm()


    function enviarDados(dados) {
        console.log(dados);
    }

    function mascara(event){ 
        const masc = event.target.getAttribute('mask')
        const name = event.target.name
        let valor = unMask(event.target.value) 
        valor = mask(valor,masc)
        
        setValue(name, valor)
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
                            <Form.Control type="text" {...register("cpf",validador.cpf)} mask ="999.999.999-99" onChange={mascara}/>
                            {errors.cpf && <span className="text-danger">{errors.cpf.message}</span>}
                        </Form.Group>
                        <Form.Group as={Row} controlId="email">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" {...register("email",validador.email)}/>
                            {errors.email && <span className="text-danger">{errors.email.message}</span>}
                        </Form.Group>
                        <Form.Group as={Row} controlId="telefone">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control type="text" {...register("telefone", validador.telefone)}  mask="(99)99999-9999" onChange={mascara}/>
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
