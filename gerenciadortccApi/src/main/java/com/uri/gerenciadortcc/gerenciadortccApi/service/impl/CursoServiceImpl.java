package com.uri.gerenciadortcc.gerenciadortccApi.service.impl;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.uri.gerenciadortcc.gerenciadortccApi.model.entity.Curso;
import com.uri.gerenciadortcc.gerenciadortccApi.model.repository.CursoRepository;
import com.uri.gerenciadortcc.gerenciadortccApi.service.CursoService;

@Service
public class CursoServiceImpl implements CursoService{

	@Autowired
	private CursoRepository repository;
	
	@Override
	public Curso addCurso(Curso curso) {
		return repository.save(curso);
	}
	
	@Override
	public ArrayList<Curso> procuraCursos() {
		return repository.findAll();
		
	}
}
