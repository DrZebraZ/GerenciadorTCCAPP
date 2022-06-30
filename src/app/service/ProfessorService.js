import ApiService from '../ApiService'

class ProfessorService extends ApiService {


  constructor() {
    super('/professor')
  }

  executarLogin(credenciais) {
    return this.post('/login', credenciais)
  }

  cadastrarUsuario(credenciais) {
    return this.post('/add', credenciais)
  }

  getListaProfessores(credenciais) {
    return this.get(`/${credenciais.idCurso}/getProfessor`)
  }
}
export default ProfessorService