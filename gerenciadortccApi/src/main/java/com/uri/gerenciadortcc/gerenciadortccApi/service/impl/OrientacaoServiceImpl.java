package com.uri.gerenciadortcc.gerenciadortccApi.service.impl;

import com.uri.gerenciadortcc.gerenciadortccApi.controller.objects.OrientacaoObject;
import com.uri.gerenciadortcc.gerenciadortccApi.model.entity.Aluno;
import com.uri.gerenciadortcc.gerenciadortccApi.model.entity.Orientacao;
import com.uri.gerenciadortcc.gerenciadortccApi.model.entity.Professor;
import com.uri.gerenciadortcc.gerenciadortccApi.model.repository.AlunoRepository;
import com.uri.gerenciadortcc.gerenciadortccApi.model.repository.OrientacaoRepository;
import com.uri.gerenciadortcc.gerenciadortccApi.model.repository.ProfessorRepository;
import com.uri.gerenciadortcc.gerenciadortccApi.service.OrientacaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class OrientacaoServiceImpl implements OrientacaoService {

    @Autowired
    private OrientacaoRepository orientacaoRepository;

    @Autowired
    private ProfessorRepository professorRepository;

    @Autowired
    private AlunoRepository alunoRepository;

    @Override
    public void addOrientacao(OrientacaoObject orientacaoObject) {
        Optional<Aluno> aluno = alunoRepository.findById(orientacaoObject.getAlunoId());
        Optional<Professor> professor = professorRepository.findById(orientacaoObject.getProfessorId());
        if(aluno.isPresent() && professor.isPresent()){
            Orientacao orientacao = new Orientacao();
            orientacao.setAluno(aluno.get());
            orientacao.setProfessor(professor.get());
            orientacaoRepository.save(orientacao);
        }else {
            throw new RuntimeException();
        }
    }
}
