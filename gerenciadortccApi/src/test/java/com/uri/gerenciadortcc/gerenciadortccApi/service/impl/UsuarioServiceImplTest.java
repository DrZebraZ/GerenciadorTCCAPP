package com.uri.gerenciadortcc.gerenciadortccApi.service.impl;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
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

import com.uri.gerenciadortcc.gerenciadortccApi.model.entity.Notificacao;
import com.uri.gerenciadortcc.gerenciadortccApi.model.entity.Usuario;
import com.uri.gerenciadortcc.gerenciadortccApi.model.repository.NotificacaoRepository;
import com.uri.gerenciadortcc.gerenciadortccApi.model.repository.UsuarioRepository;

@SpringBootTest
@ExtendWith(SpringExtension.class)
@ActiveProfiles("test")
@AutoConfigureTestDatabase(replace = Replace.NONE)
public class UsuarioServiceImplTest {

	@Autowired
	UsuarioRepository repository;
	
	@Autowired
	NotificacaoRepository notrepo;
	
	@Autowired
	UsuarioServiceImpl usuarioserviceimpl;
	
	
	@Test
	public void deveValidarAFuncaoValidarCredenciaisADD_Usuario_Completo(){
		Usuario user = Usuario.builder().Curso_idcurso(1).nome("Luis Guilherme").cpf("04598604026").datanasc(LocalDate.parse("2001-01-02")).email("teste@gmail.com").senha("12345678").build();
		
		boolean validou = usuarioserviceimpl.validarCredenciaisADDUsuario(user);
		
		Assertions.assertThat(validou).isTrue();
	}
	
	@Test
	public void deveValidarAFuncaoADDUsuarioEConfirmarQueFoiCriadoANotificacaoComOPedido(){
		Usuario user = Usuario.builder().Curso_idcurso(1).nome("Luis Guilherme Andres").cpf("14598604026").datanasc(LocalDate.parse("2001-01-02")).email("teste2@gmail.com").senha("12345679").build();
		usuarioserviceimpl.salvarUsuario(user);
		boolean verificaExistencia = false;
		boolean salvouNotificacao = true;
		Optional<Usuario> usuario = repository.findByEmail(user.getEmail());
		
		Optional<Notificacao> notifi = notrepo.findByUsuario(usuario.get().getIdusuario());
		
		if (notifi.get().getData_notificacao().equals(null)) {
			salvouNotificacao = false;
		}
		if (usuario.get().getNome().equals(user.getNome())){
			verificaExistencia = true;
		}
		Assertions.assertThat(verificaExistencia).isTrue();
		Assertions.assertThat(salvouNotificacao).isTrue();
	}
	
	@Test
	public void deveValidarAFuncaoAutenticarLogin() {
		Usuario user = Usuario.builder().Curso_idcurso(1).nome("Luis Guilherme").cpf("04598604026").datanasc(LocalDate.parse("2001-12-31")).email("teste3@gmail.com").senha("12345679").verificado(1).build();
		usuarioserviceimpl.salvarUsuario(user);
		
		Optional<Usuario> usuario = usuarioserviceimpl.Login(user.getEmail(), user.getSenha());
		boolean deu = true;
		if (usuario.equals(null)) {
			deu = false;
		}
		Assertions.assertThat(deu).isTrue();
	}
}

