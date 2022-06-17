package com.uri.gerenciadortcc.gerenciadortccApi.controller;

import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import com.uri.gerenciadortcc.gerenciadortccApi.controller.objects.addUsuarioObject;
import com.uri.gerenciadortcc.gerenciadortccApi.controller.objects.loginObject;
import com.uri.gerenciadortcc.gerenciadortccApi.exception.ErroAutenticacao;
import com.uri.gerenciadortcc.gerenciadortccApi.model.entity.Usuario;
import com.uri.gerenciadortcc.gerenciadortccApi.service.UsuarioService;


@RestController
@RequestMapping("/api/usuario")
@EnableWebMvc
public class UsuarioController {

	@Autowired
	private UsuarioService usuarioService;
		
	@PostMapping("/login")
	public ResponseEntity executaLogin(@RequestBody loginObject login){
		System.out.println("executaLogin");
		try {
			Optional<Usuario> user = usuarioService.Login(login.getEmail(), login.getSenha());
			return ResponseEntity.ok(user);
		}catch(ErroAutenticacao e) {
			return ResponseEntity.badRequest().body(e.getMessage());		}
	}
	
	@PostMapping("/add")
	public String add(@RequestBody addUsuarioObject usuario) {
		System.out.println("addUsuario");
		usuarioService.salvarUsuario(usuario);
		return "Usuario Adicionado com Sucesso";
	}
}
