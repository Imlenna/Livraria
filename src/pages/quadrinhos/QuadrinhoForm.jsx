import { useForm } from 'react-hook-form'
import { Button, Form, Row } from 'react-bootstrap'
import Card from '../../components/card'
import { AiOutlineRollback, AiOutlineSend } from 'react-icons/ai';
import validador from '../../validadores/validadorQuadrinho';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { mask, unMask } from 'remask';
import QuadrinhoServices from '../../services/quadrinhosServices'
import { useEffect, useState } from 'react';
import editoraServices from '../../services/editoraServices';
import autorServices from '../../services/autorServices';


const QuadrinhoForm = (props) => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    const [editora, setEditora] = useState([])
    const [autor, setAutor] = useState([])

    useEffect(() => {
        const id = props.match.params.id

        if(id){
            const quadrinho = QuadrinhoServices.get(id)
        
            for(let campo in quadrinho){
                setValue(campo ,quadrinho[campo])
            }
        }

        const editoras = editoraServices.getAll()
        setEditora(editoras)
        
        const autores = autorServices.getAll()
        setAutor(autores)


    }, [props , setValue])

    function enviarDados(dados) {
        const id = props.match.params.id
        if(id){
            QuadrinhoServices.update(dados,id)
        }
        else{
            QuadrinhoServices.create(dados)
        }
       
        props.history.push('/quadrinhos')
       
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
            <Card title="Quadrinho">
                <Form>
                    <Row className="mb-3">
                        <Form.Group controlId="titulo">
                            <Form.Label>Titulo</Form.Label>
                            <Form.Control type="text" {...register("titulo", validador.titulo)} />
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
                        <Form.Group controlId="publica????o">
                            <Form.Label>Data de Publica????o:</Form.Label>
                            <Form.Control type="text" {...register("publica????o",validador.publica????o)}  mask="99/99/9999" onChange={mascara}/>
                        </Form.Group>
                        <Form.Group  controlId="vers??o">
                            <Form.Label>Vers??o:</Form.Label>
                            <Form.Control type="text" {...register("vers??o",validador.vers??o)} />
                        </Form.Group>
                        <Form.Group  controlId="genero">
                            <Form.Label>Genero:</Form.Label>
                            <Form.Control type="text" {...register("genero",validador.genero)} />
                            {errors.genero && <span className="text-danger">{errors.genero.message}</span>}
                        </Form.Group>
                        <Form.Group  controlId="pais">
                            <Form.Label>Pa??s de publica????o:</Form.Label>
                            <Form.Control type="text" {...register("pais",validador.pais)} />
                        </Form.Group>
                    </Row>
                    <div className="justify-content-center d-flex gap-2">
                        <Button variant="success" onClick={handleSubmit(enviarDados)}><AiOutlineSend /> Salvar</Button>
                        <Link to="/" className="btn btn-danger"><AiOutlineRollback/>Voltar</Link>
                    </div>
                </Form>
            </Card>
        </>
    )
}

export default QuadrinhoForm
