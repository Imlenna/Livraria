import Mensagem from "./mensagem";

const validadorFuncionario = {
    nome: {
        required: Mensagem.nome,
        minLength: { value: 3, message: Mensagem.min + ' ' + 3 },
        maxLength: { value: 60, message: Mensagem.max + ' ' + 60 },
    },
    função: { required: Mensagem.funcao },
    cpf: { required: Mensagem.cpf },
    matricula:
    {
        required: Mensagem.matricula,
        minLength: { value: 3, message: Mensagem.min + ' ' + 3 },
    },
    nascimento: { required: Mensagem.nascimento }
}

export default validadorFuncionario;