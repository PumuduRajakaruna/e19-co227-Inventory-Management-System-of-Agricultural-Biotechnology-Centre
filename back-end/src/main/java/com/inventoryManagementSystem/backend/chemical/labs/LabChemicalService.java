package com.inventoryManagementSystem.backend.chemical.labs;

import com.inventoryManagementSystem.backend.consumable.labs.LabConsumable;

import java.util.List;

public interface LabChemicalService {
    void addChemical(LabChemicals labChemical);

    List<LabChemicals> getChemicalsByLabName(String labName);

    LabChemicals getChemicalById(Long labId);

    void updateQuantity(Long labId, Long quantity);

    void deleteLabChemical(Long labId);

    List<LabChemicals> getChemicalsByName(String chemName);
}
