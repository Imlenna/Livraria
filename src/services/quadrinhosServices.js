class quadrinhoServices{
    getAll(){
        const quadrinhos = localStorage.getItem('quadrinhos')
        return quadrinhos ? JSON.parse(quadrinhos) : []
    }

    get(id){
        const quadrinhos = this.getAll()
        return quadrinhos[id]
    }

    create(dados){
        const quadrinhos = this.getAll()

        quadrinhos.push(dados)

        localStorage.setItem('quadrinhos', JSON.stringify(quadrinhos))
    }

    update(dados,id){
        const quadrinhos = this.getAll()
        quadrinhos.splice(id,1, dados)
        localStorage.setItem('quadrinhos', JSON.stringify(quadrinhos))
    }


    delete(id){
        const quadrinhos = this.getAll()
        quadrinhos.splice(id,1)
        localStorage.setItem('quadrinhos', JSON.stringify(quadrinhos))
    }
}

export default new quadrinhoServices()