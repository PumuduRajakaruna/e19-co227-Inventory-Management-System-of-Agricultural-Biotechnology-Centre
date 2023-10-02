package com.inventoryManagementSystem.backend.chemical;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChemicalRepository extends JpaRepository<Chemical,Long> {

    List<Chemical> findBychemicalName(String chemicalName);
}
