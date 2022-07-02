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

  addDocAoTCC(props, credenciais) {
    return this.post(`/add/${props.idTCC}/document`,credenciais)
  }

  atualizarTCC(props, credenciais){
    return this.put(`/${props.idTCC}/update`,credenciais)
  }

  atualizarDoc(props, credenciais){
    return this.put(`/update/${props.idTCC}/document`, credenciais)
  }
}
export default TccService