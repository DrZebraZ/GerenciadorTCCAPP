package com.uri.gerenciadortcc.gerenciadortccApi.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.uri.gerenciadortcc.gerenciadortccApi.model.entity.Curso;
import com.uri.gerenciadortcc.gerenciadortccApi.model.entity.Usuario;
import com.uri.gerenciadortcc.gerenciadortccApi.service.CursoService;
import com.uri.gerenciadortcc.gerenciadortccApi.service.UsuarioService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/cross")
public class crossOriginController {
	@Autowired
	private CursoService cursoservice;
	
	@Autowired
	private UsuarioService usuarioService;
	
	@GetMapping("/curso/getcross")
	public ArrayList<Curso> getall(){
		return cursoservice.prucuraCursos();
	}
	
	
	
}
