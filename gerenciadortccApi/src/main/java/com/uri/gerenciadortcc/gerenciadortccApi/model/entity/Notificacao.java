package com.uri.gerenciadortcc.gerenciadortccApi.model.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.uri.gerenciadortcc.gerenciadortccApi.model.enums.TipoNotificacao;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table (name = "notificacao", schema="mydb")
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Notificacao {
	
	@Id
	@Column(name = "idnotificacao")
	@GeneratedValue( strategy = GenerationType.IDENTITY )
	private int idnotificacao;
	
	@Column(name="data_notificacao")
	private LocalDate data_notificacao;
	
	@Column(name="tipo_notificacao")
	@Enumerated(value = EnumType.STRING)
	private TipoNotificacao tipo_notificacao;
	
	@Column(name="usuario")
	private int usuario;
	
	@Column(name="professor")
	private int professor;
	
	@Column(name="confirmada")
	private int confirmada;
	
	@Column(name="descartada")
	private int descartada;
	
	@Column(name="id_confirmador")
	private int id_confirmador;
	
	@Column(name="data_confirmacao")
	private LocalDate data_confirmacao;
}

