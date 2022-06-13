package com.uri.gerenciadortcc.gerenciadortccApi.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.uri.gerenciadortcc.gerenciadortccApi.controller.objects.cursoObject;
import com.uri.gerenciadortcc.gerenciadortccApi.model.entity.Curso;
import com.uri.gerenciadortcc.gerenciadortccApi.service.CursoService;

@RestController
@RequestMapping("/curso")
public class CursoController {
	
	@Autowired
	private CursoService cursoservice;
	
	@GetMapping("/get")
	public ArrayList<cursoObject> getall(){
		return cursoservice.prucuraCursos();
	}
}
