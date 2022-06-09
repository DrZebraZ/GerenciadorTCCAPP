package com.uri.gerenciadortcc.gerenciadortccApi.model.repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.uri.gerenciadortcc.gerenciadortccApi.model.entity.Professor;

@Repository
public interface ProfessorRepository extends JpaRepository<Professor, Long>{
	
	boolean existsByEmail(String Email);
	
	boolean existsByEmailAndSenha(String Email, String Senha);
		
	Optional<Professor> findByEmail(String email);
}
