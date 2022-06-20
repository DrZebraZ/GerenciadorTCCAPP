package com.uri.gerenciadortcc.gerenciadortccApi.service.impl;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.uri.gerenciadortcc.gerenciadortccApi.controller.objects.addUsuarioObject;
import com.uri.gerenciadortcc.gerenciadortccApi.exception.ErroAutenticacao;
import com.uri.gerenciadortcc.gerenciadortccApi.model.entity.Usuario;
import com.uri.gerenciadortcc.gerenciadortccApi.model.repository.UsuarioRepository;
import com.uri.gerenciadortcc.gerenciadortccApi.service.UsuarioService;

@Service
public class UsuarioServiceImpl implements UsuarioService {
	DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-M-d");
	String formatoData = ("[0-9]+" + "-" + "[0-9]+" +"-" +"[0-9]+");
	
	private UsuarioRepository repository;
	
	public UsuarioServiceImpl(UsuarioRepository repository) {
		super();
		this.repository = repository;
	}
	
	@Autowired
	private NotificacaoServiceImpl notfyimpl;
	
	private LocalDate transformaData(String datanasc){
		//Tue May 31 2022 00:00:00 GMT-0300
		//Sat Jun 04 2022 00:00:00 GMT-0300 (Horário Padrão de Brasília)
		//Sat Jun 04 2022 00:00:00 GMT-0300 (Horário Padrão de Brasília)
		String datana = datanasc.substring(0,10).toString();		
		LocalDate data = LocalDate.parse(datana,formatter);
		System.out.println(data);
		return data;
	}
	
	@Override
	public Optional<Usuario> salvarUsuario(addUsuarioObject usuario) {
		Optional<Usuario> usuarioatualizado = validarCredenciaisADDUsuario(usuario);
		if (!usuarioatualizado.get().equals(null)) {
			Usuario usuarioASalvar = usuarioatualizado.get();
			repository.save(usuarioASalvar);
			Optional<Usuario> user = repository.findByEmail(usuarioASalvar.getEmail());
			notfyimpl.salvarNotificacaoUsuario(user.get().getIdusuario());
			return user;
		}else return null;
	}

	@Override
	public Optional<Usuario> Login(String email, String senha) {
		System.out.println("Login usuario Service");
		Optional<Usuario> user = repository.findByEmail(email);
		if (user.get().equals(null)) {
			System.out.println("user equals null = emails inválido");
			throw new ErroAutenticacao("Email inválido");
		} else if(!user.get().getSenha().equals(senha)) {
			System.out.println(user.get().getSenha() + " ERROOOO " + senha);
			System.out.println("senha nao bate = senha inválida");
			throw new ErroAutenticacao("Senha inválida");
		}else {
		System.out.println("retornou usuario");
		return user;
		}
		
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
	public Optional<Usuario> validarCredenciaisADDUsuario(addUsuarioObject usuario){
		Usuario novoUsuario = Usuario.builder().build();
		boolean existeEmail = repository.existsByEmail(usuario.getEmail());
		if (!existeEmail){
			//Se n existir o email no BD então seta email novo usuario
			novoUsuario.setEmail(usuario.getEmail());
			if (usuario.getNome().length() > 4) {
				//Seta o nome do novo usuario
				novoUsuario.setNome(usuario.getNome());
				if (usuario.getCpf().length() == 11){
					//Seta CPF
					novoUsuario.setCpf(usuario.getCpf());
					if (usuario.getCurso_idcurso() != 0) {
						novoUsuario.setCurso_idcurso(usuario.getCurso_idcurso());
						if (usuario.getSenha().length() > 7) {
							//Seta senha se tiver ao menos 8 digitos
							novoUsuario.setSenha(usuario.getSenha());
							if (usuario.getDatanasc().matches(formatoData) && usuario.getDatanasc().length()<=10 && usuario.getDatanasc().length()>5){
								//Se STRING DATA bater com o formato data transforma em LocalDate e salva no Novo Usuario
								novoUsuario.setDatanasc(LocalDate.parse(usuario.getDatanasc(),formatter));
								//Retorna null ou Usuario
								return Optional.ofNullable(novoUsuario);
							}else if (usuario.getDatanasc().length()>10){
								//Caso receba da net (nesse formato abaixo, então corrige o formato)
								//Tue May 31 2022 00:00:00 GMT-0300
								LocalDate novadata = transformaData(usuario.getDatanasc());
								//Retorna (ano-mes-dia) ex (2001-12-30)
								novoUsuario.setDatanasc(novadata);
								
								return Optional.ofNullable(novoUsuario);	
							}
							else {
								throw new ErroAutenticacao("Informe a Data de Nascimento Corretamente (DD/MM/YYYY)");
							}
						}else {
							throw new ErroAutenticacao("Senha deve ter mais de 8 caracteres");
						}
					}else {
						throw new ErroAutenticacao("Informe o Curso");
					}
				}else {
					throw new ErroAutenticacao("Informe o CPF corretamente");
				}
			}else {
				throw new ErroAutenticacao("Informe nome Completo");
			}
		}else {
			throw new ErroAutenticacao("Email em uso");
		}
	}

}
