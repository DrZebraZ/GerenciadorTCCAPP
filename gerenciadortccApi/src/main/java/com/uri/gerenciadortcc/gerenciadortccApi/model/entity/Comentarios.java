package com.uri.gerenciadortcc.gerenciadortccApi.model.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "comentarios", schema="mydb")
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Comentarios {

    @Id
    @Column(name = "ID_COMENTARIO")
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private Long idComentario;

    @Column(name = "COMENTARIO")
    private String comentario;

}

