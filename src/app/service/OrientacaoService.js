import ApiService from '../ApiService'

class OrientacaoService extends ApiService {

  constructor() {
    super('/orientacao')
  }

  getOrientacaoAluno(props) {
    return this.get(`/getOrientacaoAluno/${props.alunoId}`)
  }

  addOrientacaoProfessor(props, credenciais){
    return this.post(`/add/professor/${props.orientacaoID}/comentario`, credenciais)
  }

  addOrientacaoAluno(props, credenciais){
    return this.post(`/add/aluno/${props.orientacaoID}/comentario`, credenciais)
  }

}
export default OrientacaoService