package com.uri.gerenciadortcc.gerenciadortccApi.service;

import com.uri.gerenciadortcc.gerenciadortccApi.model.entity.Notificacao;

public interface NotificacaoService {
	
	Notificacao salvarNotificacao(Notificacao notificacao);
	
	void salvarNotificacaoUsuario(int idusuario);
	
	Notificacao verificaEAtualizaNotificacao(Notificacao notificacao);
	
	
}
