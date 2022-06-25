import { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import UsuarioService from '../app/service/UsuarioService'
import { useUserContext } from '../context/UserLogedContext';

function Login() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [tipoUsuario, setTipoUsuario] = useState();
  const [isLogged, setIsLogged] = useState(false);
  const [service, setService] = useState(new UsuarioService());

  const { login } = useUserContext()

  return (
    <>
      <div className="container" style={{ marginTop: 200, marginBottom: 300 }}>
        <div className="row justify-content-center">
          <div className="col-8">
            <div className="p-4" style={{ backgroundColor: "#4C9BE8", border: "2px solid black", borderRadius: "30px", color: "black" }}>
              <div className="col-6">
                <h1>Login</h1>
              </div>
              <div className="form-floating mb-2 pt-2">
                <input style={{ borderRadius: "10px" }} value={email}
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="floatingInput">Email</label>
              </div>
              <div className="form-floating mb-2 pt-2">
                <input
                  style={{ borderRadius: "10px" }}
                  value={senha}
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  onChange={e => setSenha(e.target.value)}
                />
                <label htmlFor="floatingPassword">Senha</label>
              </div>
              <div className="row justify-content-md-center">
                <div className="row">
                  <div className="col-8 mb-2 pt-2">
                    <div className="form-check">
                      <input onChange={e => setTipoUsuario(1)} className="form-check-input" type="radio" name="flexRadioDefault" id="1" />
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Aluno
                      </label>
                    </div>
                    <div className="form-check">
                      <input onChange={e => setTipoUsuario(2)} className="form-check-input" type="radio" name="flexRadioDefault" id="2" />
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Professor
                      </label>
                    </div>
                    <div className="form-check">
                      <input onChange={e => setTipoUsuario(3)} className="form-check-input" type="radio" name="flexRadioDefault" id="3" />
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Sistema
                      </label>
                    </div>
                  </div>
                </div>
                <div className="" style={{ textAlign: "center" }}>
                  <button onClick={() => login(tipoUsuario, email, senha)} type="button" className="btn btn-light mb-2 pt-2" style={{ width: "50%", color: "black", backgroundColor: "white", borderRadius: "10px" }}>Logar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="" style={{ textAlign: "center" }}>
            <NavLink to="/cadastro">Novo por aqui? Cadastrar-se.</NavLink>
          </div>
        </div>
      </div>
    </>
  )

}


export default Login



/*  if (tipoUsuario === 1){
            console.log("Usuario")
            service.executarLogin({
                email: email,
                senha: senha
            })
            .then( response => {
            localStorage.setItem('_usuario_logado', JSON.stringify(response.data))
            console.log(localStorage.getItem('_usuario_logado'))
            setIsLogged(true)
            })
            .catch( erro => {
                console.log(erro.response)
                console.log("não logou")
            }) 

        }else if (this.state.tipoUsuario === 2){
            console.log("Professor")
        }else if (this.state.tipoUsuario === 3){
            console.log("Sistema")
        }else{
            console.log("Informe se é Usuario, Professor ou Sistema")
        }
    }*/