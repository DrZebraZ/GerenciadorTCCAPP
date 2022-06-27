package com.uri.gerenciadortcc.gerenciadortccApi.model.repository;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.uri.gerenciadortcc.gerenciadortccApi.model.entity.Professor;

@Repository
public interface ProfessorRepository extends JpaRepository<Professor, Long>{
	
	boolean existsByEmail(String Email);

	Optional<Professor> findByEmailAndSenha(String Email, String Senha);

	Optional<Professor> findByEmail(String email);

	@Query(value = "SELECT * FROM PROFESSOR WHERE curso_id = :cursoId", nativeQuery = true)
	ArrayList<Professor> getProfessorPorIDCurso(Long cursoId);

	@Query(value = "SELECT * FROM PROFESSOR WHERE curso_id = :cursoId AND coordenador = 1", nativeQuery = true)
	Optional<Professor> getCoordenador(Long cursoId);
}
