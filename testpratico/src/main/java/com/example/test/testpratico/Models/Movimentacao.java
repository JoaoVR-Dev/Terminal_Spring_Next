package com.example.test.testpratico.Models;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.*;
import org.springframework.cglib.core.Local;
import org.springframework.data.annotation.TypeAlias;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;

import java.text.DateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

@Entity(name = "movimentacao")
@Table(name = "movimentacao")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Movimentacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @NotBlank
    @Pattern(regexp = "^(EMBARQUE|DESCARGA|GATE IN|GATE OUT|REPOSICIONAMENTO|PESAGEM|SCANNER)$")
    private String typeMovimentacao;
    private Date dataStart;
    private Date dataFinal;
    @ManyToOne
    private Container container;

    public void editMovimentacao(Movimentacao movimentacao)
    {
        this.typeMovimentacao = movimentacao.getTypeMovimentacao();
        this.dataStart = movimentacao.getDataStart();
        this.dataFinal = movimentacao.getDataFinal();
        this.container = movimentacao.getContainer();
    }

    public boolean dateBefore(){
        if(dataStart.before(dataFinal)) return true;
        else return false;
    }

    public void addMovimentacao(MovimentacaoResquest movimentacaoResquest){
        this.typeMovimentacao = movimentacaoResquest.getTypeMovimentacao();
        this.dataStart = movimentacaoResquest.getDataStart();
        this.dataFinal = movimentacaoResquest.getDataFinal();
    }
}

