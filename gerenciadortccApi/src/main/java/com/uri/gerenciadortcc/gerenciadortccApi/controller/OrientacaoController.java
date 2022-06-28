package com.uri.gerenciadortcc.gerenciadortccApi.controller;

import com.uri.gerenciadortcc.gerenciadortccApi.controller.objects.OrientacaoObject;
import com.uri.gerenciadortcc.gerenciadortccApi.dto.CursoReturnDTO;
import com.uri.gerenciadortcc.gerenciadortccApi.service.OrientacaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/orientacao")
public class OrientacaoController {

    @Autowired
    private OrientacaoService orientacaoService;

    @PostMapping("/add")
    public String add(@RequestBody OrientacaoObject orientacao) {
        orientacaoService.addOrientacao(orientacao);
        return "Orientacao Adicionada com Sucesso";
    }


}
