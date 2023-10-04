package com.inventoryManagementSystem.backend.chemical.labs;

import java.util.List;
import java.util.Optional;

public interface LabChemicalService {
    void addChemical(LabChemicals labChemical);

    List<LabChemicals> getChemicalsByLabName(String labName);

    LabChemicals getChemicalById(Long labId);
}
