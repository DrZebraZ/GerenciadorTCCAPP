import ApiService from '../ApiService'

class CursoService extends ApiService{

    constructor(){
        super('/api/curso')
    }

    getCursos(){
        return this.get('/getCursos')
    }

}
export default CursoService