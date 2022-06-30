import ApiService from '../ApiService'

class TccService extends ApiService {


  constructor() {
    super('/tcc')
  }

  adicionarTCC(credenciais) {
    return this.post('/add', credenciais)
  }

  pegarTCC(props) {
    return this.get(`/${props.idTCC}/getTCC`)
  }

  getListaProfessores(credenciais) {
    return this.get(`/${credenciais.idCurso}/getProfessor`)
  }
}
export default TccService