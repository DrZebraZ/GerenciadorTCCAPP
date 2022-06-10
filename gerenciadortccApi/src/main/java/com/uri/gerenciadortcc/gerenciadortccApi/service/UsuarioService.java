package com.uri.gerenciadortcc.gerenciadortccApi.service;

import java.util.Optional;

import com.uri.gerenciadortcc.gerenciadortccApi.model.entity.Usuario;

public interface UsuarioService {
	
	Optional<Usuario> salvarUsuario(Usuario usuario);
	
	//retorna true caso email exista
	boolean validarEmail(String email);

	boolean validarCredenciaisADDUsuario(Usuario usuario);

	int pegaIdUsuario(Usuario usuario);

	Optional<Usuario> Login(String email, String senha);
	
	
}
