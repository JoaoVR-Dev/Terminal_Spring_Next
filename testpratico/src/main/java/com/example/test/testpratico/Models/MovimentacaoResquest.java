package com.example.test.testpratico.Models;

import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class MovimentacaoResquest {
    private String typeMovimentacao;
    private Date dataStart;
    private Date dataFinal;
    private long ContainerId;
}
