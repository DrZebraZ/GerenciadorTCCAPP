package com.uri.gerenciadortcc.gerenciadortccApi.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import com.uri.gerenciadortcc.gerenciadortccApi.controller.objects.cursoObject;
import com.uri.gerenciadortcc.gerenciadortccApi.model.entity.Curso;
import com.uri.gerenciadortcc.gerenciadortccApi.model.entity.Usuario;
import com.uri.gerenciadortcc.gerenciadortccApi.service.CursoService;

@RestController
@RequestMapping("/api/curso")
@EnableWebMvc
public class CursoController {
	
	@Autowired
	private CursoService cursoservice;
		
	@PostMapping("/add")
	public String add(@RequestBody Curso curso) {
		cursoservice.addCurso(curso);
		return "Curso Adicionado com Sucesso";
	}
	
	@GetMapping("/getCursos")
	public ArrayList<Curso> getall(){
		return cursoservice.prucuraCursos();
	}
}
