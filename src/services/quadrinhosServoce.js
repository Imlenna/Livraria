class quadrinhoServices{
    getAll(){
        const quadrinho = localStorage.getItem('quadrinho')
        return quadrinho
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