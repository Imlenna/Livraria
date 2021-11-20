class clienteServices{
    getAll(){
        const clientes = localStorage.getItem('clientes')
        return clientes ? JSON.parse(clientes) : []
    }

    get(id){
        const clientes = this.getAll()
        return clientes[id]
    }

    create(dados){

        const clientes = this.getAll()

        clientes.push(dados)
        localStorage.setItem('clientes', JSON.stringify(clientes))
    }

    update(dados, id){
        const clientes = this.getAll()
        clientes.splice(id,1, dados)
        localStorage.setItem('clientes', JSON.stringify(clientes))
    }


    delete(id){
        const clientes = this.getAll()
        clientes.splice(id,1)
        localStorage.setItem('clientes', JSON.stringify(clientes))
    }
}

export default new clienteServices()