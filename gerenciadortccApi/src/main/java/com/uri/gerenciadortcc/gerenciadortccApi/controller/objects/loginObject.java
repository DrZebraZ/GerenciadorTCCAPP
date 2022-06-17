package com.uri.gerenciadortcc.gerenciadortccApi.controller.objects;

import java.time.LocalDate;

import com.uri.gerenciadortcc.gerenciadortccApi.model.entity.Usuario;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class loginObject {
	private String email;
	private String senha;
		
}
