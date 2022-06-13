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
	public ArrayList<cursoObject> prucuraCursos() {
		ArrayList<Curso> lista1 = repository.findAll();
		ArrayList<cursoObject> lista2 = new ArrayList<>();
		for(int i=0; i<lista1.size();i++){
			cursoObject curso = new cursoObject();
			curso.setIdcurso(lista1.get(i).getIdcurso());
			curso.setNomecurso(lista1.get(i).getNome());
			lista2.add(curso);
		}
		return lista2;
		
	}
}
