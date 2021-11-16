class quadrinhoServices{
    getAll(){
        const quadrinhos = localStorage.getItem('quadrinhos')
        return quadrinhos ? JSON.parse(quadrinhos) : []
    }

    get(id){

    }

    create(dados){
        console.log(dados)
        localStorage.setItem('quadrinho', JSON.stringify(dados))
    }

    update(dados){

    }


    delete(id){

    }
}

export default new quadrinhoServices()