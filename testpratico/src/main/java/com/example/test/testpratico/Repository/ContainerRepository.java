package com.example.test.testpratico.Repository;

import com.example.test.testpratico.Models.Container;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import java.util.List;

@EnableJpaRepositories
public interface ContainerRepository extends JpaRepository<Container, Long> {
    @Query(value = "SELECT C FROM Container C WHERE C.typeContainer LIKE %:typeContainer%")
    List<Container> findContainerByType(String typeContainer);
    @Query(value = "SELECT C FROM Container C WHERE C.numberContainer LIKE %:numberContainer%")
    List<Container> findContainerByNumber(String numberContainer);

    List<Container> findByStatusContainer(String statusContainer);
    List<Container> findByCategoriaContainer(String categoriaContainer);
    List<Container> findByCliente(String cliente);
}
