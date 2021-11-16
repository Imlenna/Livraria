class clienteServices{
    getAll(){
        const cliente = localStorage.getItem('cliente')
        return cliente
    }

    get(id){

    }

    create(dados){
        console.log(dados)
        localStorage.setItem('cliente', JSON.stringify(dados))
    }

    update(dados){

    }


    delete(id){

    }
}

export default new clienteServices()