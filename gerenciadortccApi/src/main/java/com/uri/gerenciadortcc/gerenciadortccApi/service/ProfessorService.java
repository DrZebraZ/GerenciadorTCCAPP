package com.uri.gerenciadortcc.gerenciadortccApi.service;

import com.uri.gerenciadortcc.gerenciadortccApi.controller.objects.UsuarioObject;
import com.uri.gerenciadortcc.gerenciadortccApi.model.entity.Professor;

import java.util.List;
import java.util.Optional;

public interface ProfessorService {

    Professor salvarProfessor(UsuarioObject usuarioObject);

    //retorna true caso email exista
    boolean validarEmail(String email);

    boolean validarCredenciaisADDUsuario(UsuarioObject usuarioObject);

    Long pegaIdProfessor(Professor professor);

    Optional<Professor> Login(String email, String senha);

    List<String> getProfessorPorCurso(Long cursoId);

    void transformaProfessorCoordenador(Long professorId);

    Optional<Professor> getProfessorCoordenador(Long cursoId);

}
