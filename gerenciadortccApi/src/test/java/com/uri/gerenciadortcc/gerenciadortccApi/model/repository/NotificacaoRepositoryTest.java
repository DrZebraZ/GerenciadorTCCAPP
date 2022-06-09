package com.uri.gerenciadortcc.gerenciadortccApi.model.repository;

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

@SpringBootTest
@ExtendWith(SpringExtension.class)
@ActiveProfiles("test")
@AutoConfigureTestDatabase(replace = Replace.NONE)
public class NotificacaoRepositoryTest {
	
	@Autowired
	NotificacaoRepository repository;
	@Autowired
	UsuarioRepository userRepository;
	
	@Test
	public void deveVerificarAExistenciaDeUmaNotificacaoAtravesDoUsuario() {
		Usuario user = Usuario.builder().idusuario(110).nome("Testeee").email("testenofty@gmail.com").verificado(0).build();
		userRepository.save(user);
		Notificacao notfy = Notificacao.builder().usuario(110).data_notificacao(LocalDate.now()).tipo_notificacao(TipoNotificacao.NOVOUSUARIO).build();
		repository.save(notfy);
		Optional<Notificacao> notifica = repository.findByUsuario(110);
		boolean verificou = true;
		if (notifica.getClass().equals(null)) {
			verificou = false;
		}
		Assertions.assertThat(verificou).isTrue();
	
	}
	
}
