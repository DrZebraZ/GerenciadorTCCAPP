package com.uri.gerenciadortcc.gerenciadortccApi.model.repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.uri.gerenciadortcc.gerenciadortccApi.model.entity.Curso;
@Repository
public interface CursoRepository extends JpaRepository<Curso, Long>{
	
	ArrayList<Curso> findAll();
	
}
