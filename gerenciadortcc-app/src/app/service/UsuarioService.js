import ApiService from '../ApiService'

class UsuarioService extends ApiService{


    constructor(){
        super('/api/usuario')
    }

    executarLogin(credenciais){
        return this.post('/login',credenciais)
    }

    cadastrarUsuario(credenciais){
        return this.post('/add',credenciais)
    }
}
export default UsuarioService