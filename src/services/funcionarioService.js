class funcionarioServices{
    getAll(){
        const funcionario = localStorage.getItem('funcionario')
        return funcionario
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