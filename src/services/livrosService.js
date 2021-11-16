class livrosServices{
    getAll(){
        const livros = localStorage.getItem('livros')
        return livros ? JSON.parse(livros) : []
    }

    get(id){

    }

    create(dados){
        console.log(dados)
        localStorage.setItem('livros', JSON.stringify(dados))
    }

    update(dados){

    }


    delete(id){

    }
}

export default new livrosServices()