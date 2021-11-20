class livrosServices{
    getAll(){
        const livros = localStorage.getItem('livros')
        return livros ? JSON.parse(livros) : []
    }

    get(id){
        const livros = this.getAll()
        return livros[id]
    }

    create(dados){
        const livros = this.getAll()

        livros.push(dados)
        localStorage.setItem('livros', JSON.stringify(livros))
    }

    update(dados,id){
        const livros = this.getAll()
        livros.splice(id,1, dados)
        localStorage.setItem('livros', JSON.stringify(livros))
    }


    delete(id){
        const livros = this.getAll()
        livros.splice(id,1)
        localStorage.setItem('livros', JSON.stringify(livros))
    }
}

export default new livrosServices()