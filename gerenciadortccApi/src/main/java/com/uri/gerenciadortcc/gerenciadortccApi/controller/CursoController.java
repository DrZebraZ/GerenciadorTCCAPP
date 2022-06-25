package com.uri.gerenciadortcc.gerenciadortccApi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.uri.gerenciadortcc.gerenciadortccApi.model.entity.Curso;
import com.uri.gerenciadortcc.gerenciadortccApi.service.CursoService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/curso")
public class CursoController {
	
	@Autowired
	private CursoService cursoservice;
		
	@PostMapping("/add")
	public String add(@RequestBody Curso curso) {
		cursoservice.addCurso(curso);
		return "Curso Adicionado com Sucesso";
	}
}
