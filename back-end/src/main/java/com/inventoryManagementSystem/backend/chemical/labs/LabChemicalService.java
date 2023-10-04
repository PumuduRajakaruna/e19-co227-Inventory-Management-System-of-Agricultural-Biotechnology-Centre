package com.inventoryManagementSystem.backend.chemical.labs;

import java.util.List;

public interface LabChemicalService {
    void addChemical(LabChemicals labChemical);

    List<LabChemicals> getChemicalsByLabName(String labName);
}
