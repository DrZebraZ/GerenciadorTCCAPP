package com.uri.gerenciadortcc.gerenciadortccApi.service;

import java.util.Optional;

import com.uri.gerenciadortcc.gerenciadortccApi.controller.objects.addUsuarioObject;
import com.uri.gerenciadortcc.gerenciadortccApi.model.entity.Usuario;


public interface UsuarioService {
	
	public Optional<Usuario> salvarUsuario(addUsuarioObject usuario);
	
	//retorna true caso email exista
	public boolean validarEmail(String email);

	public Optional<Usuario> validarCredenciaisADDUsuario(addUsuarioObject usuario);

	public int pegaIdUsuario(Usuario usuario);

	public Optional<Usuario> Login(String email, String senha);
	
	
}
