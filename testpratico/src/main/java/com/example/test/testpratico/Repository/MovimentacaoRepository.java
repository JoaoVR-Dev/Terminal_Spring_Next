package com.example.test.testpratico.Repository;

import com.example.test.testpratico.Models.Container;
import com.example.test.testpratico.Models.Movimentacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import java.util.List;

@EnableJpaRepositories
public interface MovimentacaoRepository extends JpaRepository<Movimentacao, Long> {

    List<Movimentacao> findByTypeMovimentacao(String typeMovimentacao);

}
