class editoraServices{
    getAll(){
        const editoras = localStorage.getItem('editoras')
        return editoras ? JSON.parse(editoras) : []
    }

    get(id){
        const editoras = this.getAll()
        return editoras[id]
    }

    create(dados){
        const editoras = this.getAll()
        editoras.push(dados)
        localStorage.setItem('editoras', JSON.stringify(editoras))
    }

    update(dados ,id){
        const editoras = this.getAll()
        editoras.splice(id,1, dados)
        localStorage.setItem('editoras', JSON.stringify(editoras))
    }


    delete(id){
        const editoras = this.getAll()
        editoras.splice(id,1)
        localStorage.setItem('editoras', JSON.stringify(editoras))
    }
}

export default new editoraServices()