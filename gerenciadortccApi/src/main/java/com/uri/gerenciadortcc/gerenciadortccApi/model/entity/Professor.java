package com.uri.gerenciadortcc.gerenciadortccApi.model.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table (name = "professor", schema="mydb")
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Professor {
	
	@Id
	@Column(name = "idProfessor")
	@GeneratedValue( strategy = GenerationType.IDENTITY )
	private int idprofessor;
	
	@Column(name = "tipoprofessor")
	private int tipoprofessor;
	
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
	
	
}