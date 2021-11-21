import { useForm } from 'react-hook-form'
import { Button, Col, Form, Row } from 'react-bootstrap'
import Card from '../../components/card'
import { AiOutlineRollback, AiOutlineSend } from 'react-icons/ai';
import validador from '../../validadores/validadorFuncionario';
import { Link } from 'react-router-dom';
import FuncionarioServices from '../../services/funcionarioServices'
import { mask, unMask } from 'remask';
import { useEffect } from 'react';


const FuncionarioForm = (props) => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    useEffect(() => {
        const id = props.match.params.id

        if (id) {
            const funcionario = FuncionarioServices.get(id)
            for (let campo in funcionario) {
                setValue(campo, funcionario[campo])
            }
        }

    }, [props, setValue])

    function enviarDados(dados) {
        const id = props.match.params.id
        if (id) {
            FuncionarioServices.update(dados, id)
        }
        else {
            FuncionarioServices.create(dados)
        }

        props.history.push('/funcionarios')

    }

    function mascara(event) {
        const masc = event.target.getAttribute('mask')
        const name = event.target.name
        let valor = unMask(event.target.value)
        valor = mask(valor, masc)

        setValue(name, valor)
    }
    console.log(props)

    return (
        <>
            <Card title="Funcionario">
                <Form>
                    <Row className="mb-3">
                        <Form.Group controlId="nome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" {...register("nome", validador.nome)} />
                            {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
                        </Form.Group>
                        <Row>
                        <Form.Group as={Col} controlId="funcao">
                            <Form.Label>Função</Form.Label>
                            <Form.Control type="text" {...register("funcao", validador.funcao)} />
                            {errors.funcao && <span className="text-danger">{errors.funcao.message}</span>}
                        </Form.Group>
                        <Form.Group as={Col} controlId="contratação">
                            <Form.Label>Data de contratação</Form.Label>
                            <Form.Control type="text" {...register("contratação", validador.contratação)} mask="99/99/9999" onChange={mascara} />
                        </Form.Group>
                        </Row>
                        <Form.Group  controlId="cpf">
                            <Form.Label>CPF</Form.Label>
                            <Form.Control type="text" {...register("cpf", validador.cpf)} mask="999.999.999-99" onChange={mascara} />
                            {errors.cpf && <span className="text-danger">{errors.cpf.message}</span>}
                        </Form.Group>
                        <Form.Group  controlId="matricula">
                            <Form.Label>matricula</Form.Label>
                            <Form.Control type="text" {...register("matricula", validador.matricula)} mask="999-9999" onChange={mascara} />
                            {errors.matricula && <span className="text-danger">{errors.matricula.message}</span>}
                        </Form.Group>
                        <Form.Group controlId="nascimento">
                            <Form.Label>Data de nascimento</Form.Label>
                            <Form.Control type="text" {...register("nascimento", validador.nascimento)} mask="99/99/9999" onChange={mascara} />
                            {errors.nascimento && <span className="text-danger">{errors.nascimento.message}</span>}
                        </Form.Group>
                        <Form.Group  controlId="telefone">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control type="text" {...register("telefone", validador.telefone)} mask="(99)99999-9999" onChange={mascara} />
                        </Form.Group>
                    </Row>
                    <div className="justify-content-center d-flex gap-2">
                        <Button variant="success" onClick={handleSubmit(enviarDados)}><AiOutlineSend /> Salvar</Button>
                        <Link to='/' className="btn btn-danger"><AiOutlineRollback />Voltar</Link>
                    </div>
                </Form>
            </Card>
        </>
    )
}

export default FuncionarioForm
