class clienteServices{
    getAll(){
        const clientes = localStorage.getItem('clientes')
        return clientes ? JSON.parse(clientes) : []
    }

    get(id){

    }

    create(dados){

        const clientes = this.getAll()

        clientes.push(dados)
        localStorage.setItem('clientes', JSON.stringify(clientes))
    }

    update(dados){

    }


    delete(id){

    }
}

export default new clienteServices()