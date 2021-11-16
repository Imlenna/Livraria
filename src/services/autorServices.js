class autorServices{
    getAll(){
        const autores = localStorage.getItem('autores')
        return autores ? JSON.parse(autores) : []
    }

    get(id){

    }

    create(dados){
        console.log(dados)
        localStorage.setItem('autor', JSON.stringify(dados))
    }

    update(dados){

    }


    delete(id){

    }
}

export default new autorServices()