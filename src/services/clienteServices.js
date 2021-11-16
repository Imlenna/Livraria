class clienteServices{
    getAll(){
        const clientes = localStorage.getItem('cliente')
        return clientes ? JSON.parse(clientes) : []
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