import Mensagem from "./mensagem";

const validadorCliente = {

    nome: {
        required: Mensagem.nome,
        minLength: { value: 3, message: Mensagem.min + ' ' + 3 },
        maxLength: { value: 60, message: Mensagem.max + ' ' + 60 },
    },
    residencia: {
        required: Mensagem.residencia,
        minLength: { value: 3, message: Mensagem.min + ' ' + 3 },
        maxLength: { value: 50, message: Mensagem.max + ' ' + 50 },
    },
    nascimento: { required: Mensagem.nascimento },
    cpf: {
        required: Mensagem.cpf,
        maxLength: { value: 50, message: Mensagem.max + ' ' + 14},
    },
    email: { required: Mensagem.email }

}

export default validadorCliente;