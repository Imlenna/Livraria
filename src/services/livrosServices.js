class livrosServices{
    getAll(){
        const livros = localStorage.getItem('livros')
        return livros ? JSON.parse(livros) : []
    }

    get(id){

    }

    create(dados){
        const livros = this.getAll()

        livros.push(dados)
        localStorage.setItem('livros', JSON.stringify(livros))
    }

    update(dados){

    }


    delete(id){

    }
}

export default new livrosServices()