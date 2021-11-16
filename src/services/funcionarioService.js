class funcionarioServices{
    getAll(){
        const funcionarios = localStorage.getItem('funcionarios')
        return funcionarios ? JSON.parse(funcionarios) : []
    }

    get(id){

    }

    create(dados){
        console.log(dados)
        localStorage.setItem('funcionario', JSON.stringify(dados))
    }

    update(dados){

    }


    delete(id){

    }
}

export default new funcionarioServices()