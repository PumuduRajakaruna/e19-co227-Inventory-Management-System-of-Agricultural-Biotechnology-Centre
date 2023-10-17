package com.inventoryManagementSystem.backend.chemical.labs;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LabChemicalRepository extends JpaRepository<LabChemicals,Long> {

    List<LabChemicals> findByLabName(String labName);

    List<LabChemicals> findByChemicalChemicalName(String chemName); }
