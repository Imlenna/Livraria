class autorServices{
    getAll(){
        const autores = localStorage.getItem('autores')
        return autores ? JSON.parse(autores) : []
    }

    get(id){

    }

    create(dados){
        const autores = this.getAll()

        autores.push(dados)
        localStorage.setItem('autores', JSON.stringify(autores))
    }

    update(dados){

    }


    delete(id){

    }
}

export default new autorServices()