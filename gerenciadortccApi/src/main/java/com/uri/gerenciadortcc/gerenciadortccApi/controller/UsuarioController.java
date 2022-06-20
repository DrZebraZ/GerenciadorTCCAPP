package com.uri.gerenciadortcc.gerenciadortccApi.controller;

import java.util.ArrayList;
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
import com.uri.gerenciadortcc.gerenciadortccApi.model.entity.Curso;
import com.uri.gerenciadortcc.gerenciadortccApi.model.entity.Usuario;
import com.uri.gerenciadortcc.gerenciadortccApi.service.CursoService;
import com.uri.gerenciadortcc.gerenciadortccApi.service.UsuarioService;


@RestController
@RequestMapping("/api/usuario")
@EnableWebMvc
public class UsuarioController {

	@Autowired
	private UsuarioService usuarioService;
	
	@Autowired
	private CursoService cursoservice;
		
	@PostMapping("/login")
	public Optional<Usuario> executaLogin(@RequestBody addUsuarioObject usuario){
		try {
			Optional<Usuario> user = usuarioService.Login(usuario.getEmail(),usuario.getSenha());
			return user;
		}catch(ErroAutenticacao e) {
			throw new RuntimeException("erro ao logar", e);
		}
	}
	
	@PostMapping("/add")
	public String add(@RequestBody addUsuarioObject usuario) {
		System.out.println("addUsuario");
		usuarioService.salvarUsuario(usuario);
		return "Usuario Adicionado com Sucesso";
	}
	
	@GetMapping("/getCursos")
	public ArrayList<Curso> getall(){
		return cursoservice.prucuraCursos();
	}
}
