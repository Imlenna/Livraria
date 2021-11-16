import Mensagem from "./mensagem";

const validadorLivro = {
    titulo: {
        required: Mensagem.titulo,
        minLength: {value: 2, message: Mensagem.min+' '+2},
    },
    editora :{required: Mensagem.editora},
    autor: {
        required: Mensagem.autor,
        minLength: {value: 3, message: Mensagem.min+' '+3},
        maxLength: {value: 60, message: Mensagem.max+' '+60},
    },
    genero:{required: Mensagem.genero},
}

export default validadorLivro;