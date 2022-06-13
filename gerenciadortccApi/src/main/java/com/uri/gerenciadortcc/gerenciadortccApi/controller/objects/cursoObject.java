package com.uri.gerenciadortcc.gerenciadortccApi.controller.objects;

public class cursoObject {
	private String nomecurso;
	private int idcurso;
	
	public cursoObject() {
		
	}
	
	public cursoObject(String nome, int id) {
		this.nomecurso=nome;
		this.idcurso=id;
	}
	
	public String getNomecurso() {
		return nomecurso;
	}
	public void setNomecurso(String nomecurso) {
		this.nomecurso = nomecurso;
	}
	public int getIdcurso() {
		return idcurso;
	}
	public void setIdcurso(int idcurso) {
		this.idcurso = idcurso;
	}
	
	
}
