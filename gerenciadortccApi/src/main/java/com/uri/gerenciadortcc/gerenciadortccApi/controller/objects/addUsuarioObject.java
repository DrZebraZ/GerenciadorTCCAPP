package com.uri.gerenciadortcc.gerenciadortccApi.controller.objects;

import java.time.LocalDate;

import javax.persistence.Column;

import com.uri.gerenciadortcc.gerenciadortccApi.model.entity.Usuario;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class addUsuarioObject {
	@Column(name = "Curso_idcurso")
	private int Curso_idcurso;
	
	@Column(name = "nome")
	private String nome;
	
	@Column(name = "cpf")
	private String cpf;
	
	@Column(name = "datanasc")
	private String datanasc;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "senha")
	private String senha;
	
	@Column(name = "verificado")
	private int verificado;
}
