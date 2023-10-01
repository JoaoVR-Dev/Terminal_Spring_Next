package com.example.test.testpratico.Controller;

import com.example.test.testpratico.Models.Container;
import com.example.test.testpratico.Models.Movimentacao;
import com.example.test.testpratico.Models.MovimentacaoResquest;
import com.example.test.testpratico.Repository.ContainerRepository;
import com.example.test.testpratico.Repository.MovimentacaoRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/")
public class MovimentacaoController {
    @Autowired
    private final MovimentacaoRepository movimentacaoRepository;
    @Autowired
    private final ContainerRepository containerRepository;

    public MovimentacaoController(MovimentacaoRepository movimentacaoRepository, ContainerRepository containerRepository) {
        this.movimentacaoRepository = movimentacaoRepository;
        this.containerRepository = containerRepository;
    }

    @GetMapping("movimentacao/findall")
    @CrossOrigin(origins = "*")
    public List<Movimentacao> findAllMovimentacao() {
        return movimentacaoRepository.findAll();
    }

    @GetMapping("movimentacao/findtype/{typeMovimentacao}")
    @CrossOrigin(origins = "*")
    public ResponseEntity findMovimentacaoByType(@PathVariable String typeMovimentacao){
        return ResponseEntity.ok(movimentacaoRepository.findByTypeMovimentacao(typeMovimentacao));
    }
    @GetMapping("container/findall")
    @CrossOrigin(origins = "*")
    public ResponseEntity findallContainer(){
        return ResponseEntity.ok(containerRepository.findAll(Sort.by(Sort.Direction.ASC, "id")));
    }

    @GetMapping("container/find/{id}")
    @CrossOrigin(origins = "*")
    public ResponseEntity findContainerById(@PathVariable long id){
        return ResponseEntity.ok(containerRepository.findById(id));
    }


    @GetMapping("container/findtype/{typeContainer}")
    @CrossOrigin(origins = "*")
    public ResponseEntity findContainerByType(@PathVariable String typeContainer){
        return ResponseEntity.ok(containerRepository.findContainerByType(typeContainer));
    }

    @GetMapping("container/findnumber/{numberContainer}")
    @CrossOrigin(origins = "*")
    public ResponseEntity findContainerByNumber(@PathVariable String numberContainer) {
        return ResponseEntity.ok(containerRepository.findContainerByNumber(numberContainer));
    }

    @PostMapping("container/add")
    @CrossOrigin(origins = "*")
    public ResponseEntity insertContainer(@RequestBody Container container){
        containerRepository.save(container);
        return ResponseEntity.ok("Container " + container.getNumberContainer() + " adicionado com sucesso!!");
    }

    @PostMapping("movimentacao/add")
    @CrossOrigin(origins = "*")
    public ResponseEntity insertMovimetacao(@RequestBody MovimentacaoResquest movimentacaoResquest) {
       Optional<Container> container = containerRepository.findById(movimentacaoResquest.getContainerId());
        try {
                if(container.isPresent()){
                Movimentacao movimentacao = new Movimentacao();
                movimentacao.addMovimentacao(movimentacaoResquest);
                movimentacao.setContainer(container.get());
                if(movimentacao.dateBefore()) {
                    movimentacaoRepository.save(movimentacao);
                    return ResponseEntity.ok("Movimentação adicionada com sucesso!!");
                }
                else {
                    throw new Exception("data de final está anterior a data inicial!");
                }
            } else {
                    throw new EntityNotFoundException("Container não encontrado!");
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @PutMapping("container/edit/{id}")
    @CrossOrigin("*")
    public ResponseEntity editContainer(@PathVariable long id,@RequestBody Container container){
        Optional<Container> containers = containerRepository.findById(id);
        try{
            if(containers.isPresent()) {
                Container containerSaver = containers.get();
                containerSaver.editContainer(container);
                containerRepository.save(containerSaver);
                return ResponseEntity.ok("Container Alterado com sucesso!!");
            }
            else{
                return ResponseEntity.notFound().build();
            }
        }catch (Exception e)
        {
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping("movimentacao/edit/{id}")
    @CrossOrigin(origins = "*")
    public ResponseEntity<String> editMovimentacao(@PathVariable long id, @RequestBody MovimentacaoResquest movimentacaoResquest) {
        Optional<Movimentacao> movimetacoes = movimentacaoRepository.findById(id);
        try {
            if (movimetacoes.isPresent()) {
                Optional<Container> container = containerRepository.findById(movimentacaoResquest.getContainerId());
                if (container.isPresent()) {
                    Movimentacao movimentacaoSaver = movimetacoes.get();
                    movimentacaoSaver.setTypeMovimentacao(movimentacaoResquest.getTypeMovimentacao());
                    movimentacaoSaver.setDataStart(movimentacaoResquest.getDataStart());
                    movimentacaoSaver.setDataFinal(movimentacaoResquest.getDataFinal());
                    movimentacaoSaver.setContainer(container.get());
                    movimentacaoRepository.save(movimentacaoSaver);
                    return ResponseEntity.ok("Movimentação alterado com sucesso!");
                } else {
                    throw new EntityNotFoundException("Container não encontrado");
                }
            }else {
                throw new EntityNotFoundException("Movimentação não encontrada");
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @DeleteMapping("movimentacao/delete/{id}")
    @CrossOrigin(origins = "*")
    public ResponseEntity<String> deleteMovimentacao(@PathVariable long id) {
        Optional<Movimentacao> movimetacoes = movimentacaoRepository.findById(id);
        try {
            if (movimetacoes.isPresent()) {
                movimentacaoRepository.delete(movimetacoes.get());
                return ResponseEntity.ok("Movimentação deletado com sucesso!");
            } else {
                throw new EntityNotFoundException("Movimentação não encontrada!");
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }



    @DeleteMapping("container/delete/{id}")
    @CrossOrigin(origins = "*")
    public ResponseEntity deleteContainer(@PathVariable Long id){
        Optional<Container> containerSaver = containerRepository.findById(id);
        try
        {
            if(containerSaver.isPresent()){
                Container containerdel = containerSaver.get();
                containerRepository.delete(containerdel);
                return ResponseEntity.ok("Container Excluido com sucesso!!");
            }
            else
            {
                return ResponseEntity.notFound().build();
            }
        }catch (Exception e)
        {
            return ResponseEntity.badRequest().build();
        }
    }


}
