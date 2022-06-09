package com.uri.gerenciadortcc.gerenciadortccApi.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.uri.gerenciadortcc.gerenciadortccApi.exception.ErroAutenticacao;
import com.uri.gerenciadortcc.gerenciadortccApi.model.entity.Usuario;
import com.uri.gerenciadortcc.gerenciadortccApi.model.repository.UsuarioRepository;
import com.uri.gerenciadortcc.gerenciadortccApi.service.UsuarioService;

@Service
public class UsuarioServiceImpl implements UsuarioService {

	private UsuarioRepository repository;
	@Autowired
	private NotificacaoServiceImpl notfyimpl;
	
	public UsuarioServiceImpl(UsuarioRepository repository) {
		super();
		this.repository = repository;
	}
	
	@Override
	public Optional<Usuario> salvarUsuario(Usuario usuario) {
		Boolean validou = validarCredenciaisADDUsuario(usuario);
		if (validou) {
			repository.save(usuario);
			Optional<Usuario> user = repository.findByEmail(usuario.getEmail());
			notfyimpl.salvarNotificacaoUsuario(user.get().getIdusuario());
			return user;
		}else return null;
	}

	@Override
	public Usuario autenticarLogin(String email, String senha) {
		Optional<Usuario> usuario = repository.findByEmail(email);
		if (!usuario.isPresent()){
			throw new ErroAutenticacao("email não encontrado");	
		}
		if (!usuario.get().getSenha().equals(senha)) {
			throw new ErroAutenticacao("senha inválida");
		}
		if (usuario.get().getVerificado() == 0) {
			throw new ErroAutenticacao("usuario ainda não foi verificado pelo sistema");
		}
		return usuario.get();
	}

	@Override
	public boolean validarEmail(String email) {
		boolean existe = repository.existsByEmail(email);
		if (existe){
			return true;
		}else {
			return false;
		}
	}
	
	@Override
	public int pegaIdUsuario(Usuario usuario) {
		Optional<Usuario> user = repository.findByEmail(usuario.getEmail());
		int id = user.get().getIdusuario();
		return id;
	}
	
	@Override
	public boolean validarCredenciaisADDUsuario(Usuario usuario){
		boolean existeEmail = repository.existsByEmail(usuario.getEmail());
		if (!existeEmail){
			String nome = usuario.getNome();
			if (nome.length() > 4) {
				int curso = usuario.getCurso_idcurso();
				if (curso>=1) {
					String cpf = usuario.getCpf();
					if (cpf.length() == 11){
						String formatoData = ("[0-9]+" + "/" + "[0-9]+" +"/" +"[0-9]+");
						String datanasc = usuario.getDatanasc();
						if (datanasc.matches(formatoData) && datanasc.length()<=10 && datanasc.length()>5){
							String senha = usuario.getSenha();
							if (senha.length() > 7) {
								return true;
							}else {
								throw new ErroAutenticacao("Senha deve ter mais de 8 caracteres");
							}
						}else {
							throw new ErroAutenticacao("Informe a Data de Nascimento Corretamente (DD/MM/YYYY)");
						}
					}else {
						throw new ErroAutenticacao("Informe o CPF corretamente");
					}
				}else {
					throw new ErroAutenticacao("Informe o curso");
				}
			}else {
				throw new ErroAutenticacao("Informe nome Completo");
			}
		}else {
			throw new ErroAutenticacao("Email em uso");
		}
	}

}
