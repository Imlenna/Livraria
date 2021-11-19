class quadrinhoServices{
    getAll(){
        const quadrinhos = localStorage.getItem('quadrinhos')
        return quadrinhos ? JSON.parse(quadrinhos) : []
    }

    get(id){

    }

    create(dados){
        const quadrinhos = this.getAll()

        quadrinhos.push(dados)

        localStorage.setItem('quadrinhos', JSON.stringify(quadrinhos))
    }

    update(dados){

    }


    delete(id){

    }
}

export default new quadrinhoServices()