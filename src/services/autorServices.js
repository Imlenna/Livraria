class autorServices{
    getAll(){
        const autor = localStorage.getItem('autor')
        return autor
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