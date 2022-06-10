package com.uri.gerenciadortcc.gerenciadortccApi.model.repository;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.uri.gerenciadortcc.gerenciadortccApi.model.entity.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer>{

	boolean existsByEmail(String Email);
	
	Optional<Usuario> findByEmailAndSenha(String Email, String Senha);
		
	Optional<Usuario> findByEmail(String email);
	
	Optional<Usuario> findByIdusuario(int Idusuario);
}

