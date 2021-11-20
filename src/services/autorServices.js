class autorServices{
    getAll(){
        const autores = localStorage.getItem('autores')
        return autores ? JSON.parse(autores) : []
    }

    get(id){
        const autores = this.getAll()
        return autores[id]
    }

    create(dados){
        const autores = this.getAll()

        autores.push(dados)
        localStorage.setItem('autores', JSON.stringify(autores))
    }

    update(dados ,id){
        const autores = this.getAll()
        autores.splice(id,1, dados)
        localStorage.setItem('autores', JSON.stringify(autores))
    }


    delete(id){
        const autores = this.getAll()
        autores.splice(id,1)
        localStorage.setItem('autores', JSON.stringify(autores))
    }
}

export default new autorServices()