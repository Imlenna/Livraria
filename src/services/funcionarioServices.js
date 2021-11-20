class funcionarioServices{
    getAll(){
        const funcionarios = localStorage.getItem('funcionarios')
        return funcionarios ? JSON.parse(funcionarios) : []
    }

    get(id){
        const funcionarios = this.getAll()
        return funcionarios[id]
    }

    create(dados){
        const funcionarios = this.getAll()

        funcionarios.push(dados)
        localStorage.setItem('funcionarios', JSON.stringify(funcionarios))
    }

    update(dados,id){
        const funcionarios = this.getAll()
        funcionarios.splice(id,1, dados)
        localStorage.setItem('funcionarios', JSON.stringify(funcionarios))
    }


    delete(id){
        const funcionarios = this.getAll()
        funcionarios.splice(id,1)
        localStorage.setItem('funcionarios', JSON.stringify(funcionarios))
    }
}

export default new funcionarioServices()