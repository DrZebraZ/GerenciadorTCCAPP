package com.uri.gerenciadortcc.gerenciadortccApi.service.impl;

import com.uri.gerenciadortcc.gerenciadortccApi.controller.objects.UsuarioObject;
import com.uri.gerenciadortcc.gerenciadortccApi.exception.ErroAutenticacao;
import com.uri.gerenciadortcc.gerenciadortccApi.model.entity.Curso;
import com.uri.gerenciadortcc.gerenciadortccApi.model.entity.Professor;
import com.uri.gerenciadortcc.gerenciadortccApi.model.enums.TipoUsuario;
import com.uri.gerenciadortcc.gerenciadortccApi.model.repository.CursoRepository;
import com.uri.gerenciadortcc.gerenciadortccApi.model.repository.ProfessorRepository;
import com.uri.gerenciadortcc.gerenciadortccApi.service.NotificacaoService;
import com.uri.gerenciadortcc.gerenciadortccApi.service.ProfessorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProfessorServiceImpl implements ProfessorService {

    @Autowired
    private ProfessorRepository repository;

    @Autowired
    private NotificacaoService notificacaoService;

    @Autowired
    private CursoRepository cursoRepository;

    @Autowired
    private DocStorageServiceImpl docStorageService;

    @Override
    public Professor salvarProfessor(UsuarioObject usuarioObject) {
        Boolean validou = validarCredenciaisADDUsuario(usuarioObject);
        if (validou) {
            Professor professor = new Professor();
            professor.setNome(usuarioObject.getNome());
            professor.setEmail(usuarioObject.getEmail());
            professor.setSenha(usuarioObject.getSenha());
            professor.setCpf(usuarioObject.getCpf());
            professor.setDatanasc(usuarioObject.getDatanasc());
            professor.setTipoUsuario(TipoUsuario.PROFESSOR);
            Optional<Curso> curso = cursoRepository.findById(usuarioObject.getCursoId());
            if(curso.isPresent()){
                professor.setCurso(curso.get());
            }
            Professor professorEntity = repository.save(professor);
            if(usuarioObject.getFoto() != null){
                docStorageService.saveFileProfessor(professorEntity.getId(), usuarioObject.getFoto());
            }
            notificacaoService.salvarNotificacaoNovoUsuarioProfessor(professor.getId());
            return professor;
        }else return null;
    }

    @Override
    public Optional<Professor> Login(String email, String senha) {
        return repository.findByEmailAndSenha(email, senha);
    }

    @Override
    public List<String> getProfessorPorCurso(Long cursoId) {
        return repository.getNameProfessorPorCurso(cursoId);
    }

    @Override
    public void transformaProfessorCoordenador(Long professorId) {
        Optional<Professor> professor = repository.findById(professorId);
        if(professor.isPresent()){
            Professor professorEntity = professor.get();
            professorEntity.setCoordenador(true);
            repository.save(professorEntity);
        }
    }

    @Override
    public Optional<Professor> getProfessorCoordenador(Long cursoId) {
        return repository.getCoordenador(cursoId);
    }

    @Override
    public boolean validarEmail(String email) {
        boolean existe = repository.existsByEmail(email);
        if (existe){
            return true;
        }else {
            return false;
        }
    }

    @Override
    public Long pegaIdProfessor(Professor professor) {
        Optional<Professor> user = repository.findByEmail(professor.getEmail());
        Long id = user.get().getId();
        return id;
    }

    @Override
    public boolean validarCredenciaisADDUsuario(UsuarioObject usuarioObject){
        boolean existeEmail = validarEmail(usuarioObject.getEmail());
        if (existeEmail){
            throw new ErroAutenticacao("Email em uso");
        }
        return true;
    }
}
