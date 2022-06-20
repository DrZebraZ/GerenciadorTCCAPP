package com.uri.gerenciadortcc.gerenciadortccApi.service.impl;

import java.time.LocalDate;

import org.springframework.stereotype.Service;

import com.uri.gerenciadortcc.gerenciadortccApi.exception.ErroNotificacao;
import com.uri.gerenciadortcc.gerenciadortccApi.model.entity.Notificacao;
import com.uri.gerenciadortcc.gerenciadortccApi.model.enums.TipoNotificacao;
import com.uri.gerenciadortcc.gerenciadortccApi.model.repository.NotificacaoRepository;
import com.uri.gerenciadortcc.gerenciadortccApi.model.repository.UsuarioRepository;
import com.uri.gerenciadortcc.gerenciadortccApi.service.NotificacaoService;

@Service
public class NotificacaoServiceImpl implements NotificacaoService{
	
	private NotificacaoRepository repository;
	
	public NotificacaoServiceImpl(NotificacaoRepository repository) {
		super();
		this.repository = repository;
	}
	
	@Override
	public Notificacao salvarNotificacao(Notificacao notificacao){
		Notificacao notificacao2 = verificaEAtualizaNotificacao(notificacao);
		return repository.save(notificacao2);		
	}
	
	@Override
	public void salvarNotificacaoUsuario(int idusuario){
		System.out.println("AAAAAAAAAAAAAAAAABRIU "+idusuario);
		try {
			Notificacao notif = (Notificacao.builder()
				.data_notificacao(LocalDate.now())
				.tipo_notificacao(TipoNotificacao.NOVOUSUARIO)
				.usuario(idusuario).build());
			repository.save(notif);
		}catch(Exception e){
			System.out.println("nao foi "+e);
		}
	}
	
	@Override
	public Notificacao verificaEAtualizaNotificacao(Notificacao notificacao){
		if (notificacao.getUsuario() != 0 && notificacao.getProfessor() == 0){
			notificacao.setTipo_notificacao(TipoNotificacao.NOVOUSUARIO);
		}else if (notificacao.getProfessor() != 0) {
			notificacao.setTipo_notificacao(TipoNotificacao.NOVOPROFESSOR);
		}else if (notificacao.getUsuario() != 0 && notificacao.getProfessor() != 0) {
			notificacao.setTipo_notificacao(TipoNotificacao.ORIENTACAO);
		}else if (notificacao.getUsuario() == 0 && notificacao.getProfessor() == 0){
			notificacao.setTipo_notificacao(TipoNotificacao.VAZIA);
		}else {
			throw new ErroNotificacao("erro ao setar tipoNotificacao");
		}
		notificacao.setData_notificacao(LocalDate.now());
		return notificacao;
	}

}
