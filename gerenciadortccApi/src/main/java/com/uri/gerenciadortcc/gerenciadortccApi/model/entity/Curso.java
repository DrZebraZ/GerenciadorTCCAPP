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
@Table (name = "curso", schema="mydb")
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Curso {
	@Id
	@Column(name = "idcurso")
	@GeneratedValue( strategy = GenerationType.IDENTITY )
	private int idcurso;
	
	@Column(name = "nomecurso")
	private String nome;
	
	@Column(name = "areacurso")
	private String areacurso;
	
	@Column(name = "idcoordenador")
	private int idcoordenador;
}
