package com.uri.gerenciadortcc.gerenciadortccApi.model.repository;

import java.util.Optional;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.uri.gerenciadortcc.gerenciadortccApi.model.entity.Usuario;

@SpringBootTest
@ExtendWith(SpringExtension.class)
@ActiveProfiles("test")
@AutoConfigureTestDatabase(replace = Replace.NONE)
public class UsuarioRepositoryTest {
	@Autowired
	UsuarioRepository repository;
	
	
	@Test
	public void deveVerificarAExistenciaDeUmEmail() {
		Usuario user = Usuario.builder().nome("usuario").email("usuario@email.com").Curso_idcurso(1).build();
		repository.save(user);
		boolean result = repository.existsByEmail("usuario@email.com");
		Assertions.assertThat(result).isTrue();
	}
	
	@Test
	public void deveAutenticarOLoginDeUmUsuarioComEmailESenha(){
		Usuario user = Usuario.builder().nome("usuario2").email("usuario2@email.com").senha("teste2").Curso_idcurso(1).build();
		repository.save(user);
		boolean achou = repository.existsByEmailAndSenha("usuario2@email.com", "teste2");		
		Assertions.assertThat(achou).isTrue();
	}
		
	@Test
	public void deveRetornarUmUsuarioCasoEncontreOEmailComOFindByEmail() {
		Usuario user = Usuario.builder().nome("Teste").email("teste5@gmail.com").senha("teste222").build();
		repository.save(user);
		Optional<Usuario> usuario = repository.findByEmail(user.getEmail());
		boolean existe = true;
		if (usuario.get().getNome().isEmpty()) {
			existe = false;
		}
		Assertions.assertThat(existe).isTrue();
	}
	
	
}