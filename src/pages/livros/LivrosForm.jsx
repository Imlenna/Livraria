import { useForm } from 'react-hook-form'
import { Button, Col, Form, Row } from 'react-bootstrap'
import Card from '../../components/card'
import { AiOutlineRollback, AiOutlineSend } from 'react-icons/ai';
import validador from '../../validadores/validadorLivro';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { mask, unMask } from 'remask';
import LivrosServices from '../../services/livrosServices'
import { useEffect , useState  } from 'react';
import editoraServices from '../../services/editoraServices';
import autorServices from '../../services/autorServices';



const LivrosForm = (props) => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    const [editora, setEditora] = useState([])
    const [autor, setAutor] = useState([])
   

    useEffect(() => {
        const id = props.match.params.id

        if (id) {
            const livro = LivrosServices.get(id)

            for (let campo in livro) {
                setValue(campo, livro[campo])
            }
        }

        const editoras = editoraServices.getAll()
        setEditora(editoras)
        
        const autores = autorServices.getAll()
        setAutor(autores)


    }, [props, setValue])

    function enviarDados(dados) {
        const id = props.match.params.id
        if (id) {
            LivrosServices.update(dados, id)
        }
        else {
            LivrosServices.create(dados)
        }

        props.history.push('/livros')

    }

    function mascara(event) {
        const masc = event.target.getAttribute('mask')
        const name = event.target.name
        let valor = unMask(event.target.value)
        valor = mask(valor, masc)

        setValue(name, valor)
    }

    return (
        <>
            <Card title="Livros">
                <Form>
                    <Row className="mb-3">
                        <Form.Group controlId="titulo">
                            <Form.Label>Título</Form.Label>
                            <Form.Control type="text" autoComplete="off" {...register("titulo", validador.titulo)} />
                            {errors.titulo && <span className="text-danger">{errors.titulo.message}</span>}
                        </Form.Group>
                        <Form.Group controlId="autor">
                            <Form.Label>Autor</Form.Label>
                            <Form.Select {...register("autor", validador.autor)} >
                            <option value="">Selecione</option>
                             {autor.map(autor=>(
                                 <option key={autor.id} value={autor.id}>{autor.nome}</option>
                             ))}   
                            {errors.autor && <span className="text-danger">{errors.autor.message}</span>}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group controlId="editora">
                            <Form.Label>Editora</Form.Label>
                            <Form.Select {...register("editora", validador.editora)} >
                            <option value="">Selecione a Editora</option>
                             {editora.map(editora=>(
                                 <option key={editora.id} value={editora.id}>{editora.editora}</option>
                             ))}   
                            </Form.Select>
                            {errors.editora && <span className="text-danger">{errors.editora.message}</span>}
                        </Form.Group>
                        <Form.Group controlId="publicacao">
                            <Form.Label>Data de publicação</Form.Label>
                            <Form.Control type="tex" {...register("publicacao", validador.publicacao)} mask="99/99/9999" onChange={mascara} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="versão">
                            <Form.Label>Versão</Form.Label>
                            <Form.Control type="text" {...register("versão", validador.versão)} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="exemplares">
                            <Form.Label>Número de exemplares</Form.Label>
                            <Form.Control type="text" {...register("exemplares", validador.exemplares)} />
                        </Form.Group>
                        <Form.Group controlId="genero">
                            <Form.Label>Genêro Literario</Form.Label>
                            <Form.Control type="text" {...register("genero", validador.genero)} />
                            {errors.genero && <span className="text-danger">{errors.genero.message}</span>}
                        </Form.Group>
                        <Form.Group controlId="pais">
                            <Form.Label>País de publicação:</Form.Label>
                            <Form.Control type="text" {...register("pais", validador.pais)} />
                        </Form.Group>
                    </Row>
                    <div className="justify-content-center d-flex gap-2">
                        <Button variant="success" onClick={handleSubmit(enviarDados)}><AiOutlineSend /> Salvar</Button>
                        <Link to="/" className="btn btn-danger"><AiOutlineRollback />Voltar</Link>
                    </div>
                </Form>
            </Card>
        </>
    )
}

export default LivrosForm
