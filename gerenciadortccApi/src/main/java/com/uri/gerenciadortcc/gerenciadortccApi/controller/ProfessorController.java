package com.uri.gerenciadortcc.gerenciadortccApi.controller;

import com.uri.gerenciadortcc.gerenciadortccApi.controller.objects.UsuarioObject;
import com.uri.gerenciadortcc.gerenciadortccApi.controller.objects.loginObject;
import com.uri.gerenciadortcc.gerenciadortccApi.model.entity.Professor;
import com.uri.gerenciadortcc.gerenciadortccApi.service.DocStorageService;
import com.uri.gerenciadortcc.gerenciadortccApi.service.ProfessorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/professor")
public class ProfessorController {

    @Autowired
    private ProfessorService professorService;

    @Autowired
    private DocStorageService docStorageService;

    @GetMapping("/login")
    public Optional<Professor> executaLogin(@RequestBody loginObject login){
        Optional<Professor> professor = professorService.Login(login.getEmail(), login.getSenha());
        return professor;
    }

    @PostMapping("/add")
    public String add(@RequestBody @Valid UsuarioObject usuarioObject) {
        professorService.salvarProfessor(usuarioObject);
        return "Professor Adicionado com Sucesso";
    }

    @GetMapping("/{cursoId}/getProfessor")
    public List<String> getNamoProfessorPorCurso(@PathVariable("cursoId") String cursoId){
        return professorService.getProfessorPorCurso(Long.valueOf(cursoId));
    }

    @PutMapping("/{professorId}/coordenador")
    public String transformaProfessorCoordenador(@PathVariable("professorId") String professorId){
        professorService.transformaProfessorCoordenador(Long.valueOf(professorId));
        return "Coordenador setado com sucesso";
    }

    @GetMapping("/{cursoId}/coordenador")
    public Optional<Professor> getNamoProfessorCoordenador(@PathVariable("cursoId") String cursoId){
        return professorService.getProfessorCoordenador(Long.valueOf(cursoId));
    }

    @PostMapping("/add/{professorId}/document")
    private String salvaDocumento(@PathVariable("professorId") String professorId, @RequestBody MultipartFile file){
        docStorageService.saveFileProfessor(Long.valueOf(professorId), file);
        return "Documento adicionado com sucesso";
    }

    @GetMapping("/get/{professorId}/document")
    private ByteArrayResource salvaDocumento(@PathVariable("professorId") String professorId){
        return docStorageService.getDocumentProfessor(Long.valueOf(professorId));
    }

    @PutMapping("/update/{professorId}/document")
    private String atualizaDocumento(@PathVariable("professorId") String professorId, @RequestBody MultipartFile file){
        docStorageService.atualizaDocProfessor(Long.valueOf(professorId), file);
        return "Documento atualizado com sucesso";
    }

    @PutMapping("/delete/{professorId}/document")
    private String deleteDocumento(@PathVariable("professorId") String professorId){
        docStorageService.deleteDocProfessor(Long.valueOf(professorId));
        return "Documento deletado com sucesso";
    }


}
