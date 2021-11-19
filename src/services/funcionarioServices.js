class funcionarioServices{
    getAll(){
        const funcionarios = localStorage.getItem('funcionarios')
        return funcionarios ? JSON.parse(funcionarios) : []
    }

    get(id){

    }

    create(dados){
        const funcionarios = this.getAll()

        funcionarios.push(dados)
        localStorage.setItem('funcionarios', JSON.stringify(funcionarios))
    }

    update(dados){

    }


    delete(id){

    }
}

export default new funcionarioServices()