package com.uri.gerenciadortcc.gerenciadortccApi.service;

import java.util.Optional;

import com.uri.gerenciadortcc.gerenciadortccApi.controller.objects.addUsuarioObject;
import com.uri.gerenciadortcc.gerenciadortccApi.model.entity.Usuario;

public interface UsuarioService {
	
	Optional<Usuario> salvarUsuario(addUsuarioObject usuario);
	
	//retorna true caso email exista
	boolean validarEmail(String email);

	Optional<Usuario> validarCredenciaisADDUsuario(addUsuarioObject usuario);

	int pegaIdUsuario(Usuario usuario);

	Optional<Usuario> Login(String email, String senha);
	
	
}
