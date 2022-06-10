package com.uri.gerenciadortcc.gerenciadortccApi.controller;

import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.uri.gerenciadortcc.gerenciadortccApi.controller.objects.loginObject;
import com.uri.gerenciadortcc.gerenciadortccApi.model.entity.Usuario;
import com.uri.gerenciadortcc.gerenciadortccApi.service.UsuarioService;


@RestController
@RequestMapping("/usuario")
public class UsuarioController {

	@Autowired
	private UsuarioService usuarioService;
	
	@PostMapping("/add")
	public String add(@RequestBody Usuario usuario) {
		usuarioService.salvarUsuario(usuario);
		return "Usuario Adicionado com Sucesso";
	}
	
	
	
	@GetMapping("/login")
	public Optional<Usuario> executaLogin(@RequestBody loginObject login){
		Optional<Usuario> user = usuarioService.Login(login.getEmail(), login.getSenha());
		return user;
	}
}
