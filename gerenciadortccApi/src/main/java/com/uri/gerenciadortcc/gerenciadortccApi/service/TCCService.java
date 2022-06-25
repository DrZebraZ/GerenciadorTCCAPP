package com.uri.gerenciadortcc.gerenciadortccApi.service;

import com.uri.gerenciadortcc.gerenciadortccApi.controller.objects.TCCObject;
import com.uri.gerenciadortcc.gerenciadortccApi.model.entity.TCC;

import java.util.Optional;

public interface TCCService {

    public void salvaTCC(TCCObject tccObject);

    public Optional<TCC> getTCC(Long tccId);

    public void atualizaTCC(Long tccId, TCCObject tccObject);

    public void deleteTCC(Long tccId);
}
