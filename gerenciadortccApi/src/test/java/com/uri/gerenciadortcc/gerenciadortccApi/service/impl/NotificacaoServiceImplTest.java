package com.uri.gerenciadortcc.gerenciadortccApi.service.impl;
import java.time.LocalDate;
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
import com.uri.gerenciadortcc.gerenciadortccApi.model.enums.TipoNotificacao;
import com.uri.gerenciadortcc.gerenciadortccApi.model.repository.NotificacaoRepository;
import com.uri.gerenciadortcc.gerenciadortccApi.model.repository.UsuarioRepository;

@SpringBootTest
@ExtendWith(SpringExtension.class)
@ActiveProfiles("test")
@AutoConfigureTestDatabase(replace = Replace.NONE)
public class NotificacaoServiceImplTest {
	@Autowired
	NotificacaoRepository repository;
	
	@Autowired
	UsuarioRepository usuarioRep;
	
	@Autowired
	NotificacaoServiceImpl notificaImpl;
	
	@Test
	public void deveValidarAFuncaoVerificaEAtualizaNotificacao() {
		Notificacao notfy = (Notificacao.builder()
				.usuario(1)
				.build());
		Notificacao notfy2 = notificaImpl.verificaEAtualizaNotificacao(notfy);
		boolean verificou = true;
		if (notfy.getUsuario() != notfy2.getUsuario()) {
			verificou = false;
		}
		if (notfy2.getData_notificacao().equals(null)) {
			verificou = false;
		}
		System.out.println(notfy2.getData_notificacao());
		if (notfy2.getTipo_notificacao()!=TipoNotificacao.NOVOUSUARIO) {
			verificou = false;
		}
		Assertions.assertThat(verificou).isTrue();
		
	}
	@Test
	public void deveValidarAFuncaoSalvarNotificacao() {
		Notificacao notfy = (Notificacao.builder()
				.usuario(1)
				.build());
		Notificacao notfy2 = notificaImpl.salvarNotificacao(notfy);
		boolean existe = true;
		boolean verificou = true;
		if (notfy.getUsuario() != notfy2.getUsuario()) {
			verificou = false;
		}
		if (notfy2.getData_notificacao().equals(null)) {
			verificou = false;
		}
		System.out.println(notfy2.getData_notificacao());
		if (notfy2.getTipo_notificacao()!=TipoNotificacao.NOVOUSUARIO) {
			verificou = false;
		}
		Assertions.assertThat(existe).isTrue();
	}
	
	@Test
	public void deveValidarAFuncaoSalvarNotificacaoUsuario() {
		
	}
}
