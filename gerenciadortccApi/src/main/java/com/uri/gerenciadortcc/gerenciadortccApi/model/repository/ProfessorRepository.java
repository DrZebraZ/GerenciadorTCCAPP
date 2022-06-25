package com.uri.gerenciadortcc.gerenciadortccApi.model.repository;
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

	@Query(value = "SELECT nome FROM PROFESSOR WHERE cursoId = :cursoId", nativeQuery = true)
	List<String> getNameProfessorPorCurso(Long cursoId);

	@Query(value = "SELECT * FROM PROFESSOR WHERE cursoId = :cursoId AND coordenador = 1", nativeQuery = true)
	Optional<Professor> getCoordenador(Long cursoId);
}
