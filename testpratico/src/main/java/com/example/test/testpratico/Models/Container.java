package com.example.test.testpratico.Models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jdk.jshell.Snippet;
import lombok.*;

import java.io.Serializable;

@Entity(name = "Container")
@Table(name = "Container")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Container implements Serializable {
    public static final long seralVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String cliente;
    @Pattern(regexp = "^[A-Z]{4}[0-9]{7}$")
    private String numberContainer;
    @Pattern(regexp = "^(20|40)$")
    private String typeContainer;
    @Pattern(regexp = "^(CHEIO|VAZIO)$")
    private String statusContainer;
    @Pattern(regexp = "^(EXPORTAÇÃO|IMPORTAÇÃO)$")
    private String categoriaContainer;

    public void editContainer(Container container)
    {
        this.cliente = container.getCliente();
        this.numberContainer = container.getNumberContainer();
        this.typeContainer = container.getTypeContainer();
        this.statusContainer = container.getStatusContainer();
        this.categoriaContainer = container.getCategoriaContainer();
    }
}

