package com.uri.gerenciadortcc.gerenciadortccApi.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.uri.gerenciadortcc.gerenciadortccApi.controller.objects.cursoObject;
import com.uri.gerenciadortcc.gerenciadortccApi.model.entity.Curso;
import com.uri.gerenciadortcc.gerenciadortccApi.model.repository.CursoRepository;
import com.uri.gerenciadortcc.gerenciadortccApi.model.repository.UsuarioRepository;
import com.uri.gerenciadortcc.gerenciadortccApi.service.CursoService;

@Service
public class CursoServiceImpl implements CursoService{
	
	private CursoRepository repository;
	
	public CursoServiceImpl(CursoRepository repository) {
		super();
		this.repository = repository;
	}
	
	@Override
	public Curso addCurso(Curso curso) {
		return repository.save(curso);
	}
	
	@Override
	public ArrayList<Curso> prucuraCursos() {	
		return repository.findAll();
		
	}
}
