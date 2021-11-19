import { useForm } from 'react-hook-form'
import { Button, Col, Form, Row } from 'react-bootstrap'
import Card from '../../components/card'
import { AiOutlineRollback, AiOutlineSend } from 'react-icons/ai';
import validador from '../../validadores/validadorLivro';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { mask, unMask } from 'remask';
import LivrosServices from '../../services/livrosServices'


const LivrosForm = (props) => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm()


    function enviarDados(dados) {
        LivrosServices.create(dados)
        props.history.push('/Livros')
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
            <Card title="Livros">
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="titulo">
                            <Form.Label>Título</Form.Label>
                            <Form.Control type="text" autoComplete="off" {...register("titulo", validador.titulo)} />
                            {errors.titulo && <span className="text-danger">{errors.titulo.message}</span>}
                        </Form.Group>
                        <Form.Group as={Row} controlId="autor">
                            <Form.Label>Autor</Form.Label>
                            <Form.Control type="text" {...register("autor",validador.autor)} />
                            {errors.autor && <span className="text-danger">{errors.autor.message}</span>}
                        </Form.Group>
                        <Form.Group as={Row} controlId="editora">
                            <Form.Label>Editora</Form.Label>
                            <Form.Control type="text" {...register("editora", validador.editora)} />
                            {errors.editora && <span className="text-danger">{errors.editora.message}</span>}
                        </Form.Group>
                        <Form.Group as={Row} controlId="publicacao">
                            <Form.Label>Data de publicação</Form.Label>
                            <Form.Control type="tex" {...register("publicacao",validador.publicacao)} mask="99/99/9999" onChange={mascara} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="versão">
                            <Form.Label>Versão</Form.Label>
                            <Form.Control type="text" {...register("versão",validador.versão)} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="exemplares">
                            <Form.Label>Número de exemplares</Form.Label>
                            <Form.Control type="text" {...register("exemplares",validador.exemplares)} />
                        </Form.Group>
                        <Form.Group as={Row} controlId="genero">
                            <Form.Label>Genêro Literario</Form.Label>
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
                        <Link to="/" className="btn btn-danger"><AiOutlineRollback/>Voltar</Link>
                    </div>
                </Form>
            </Card>
        </>
    )
}

export default LivrosForm
