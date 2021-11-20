import Mensagem from "./mensagem";

const validadorEditora = {
    nome: {
        required: Mensagem.editora,
        minLength: {value: 2, message: Mensagem.min+' '+2},
        maxLength: {value: 60, message: Mensagem.max+' '+60},
    }
}

export default validadorEditora;