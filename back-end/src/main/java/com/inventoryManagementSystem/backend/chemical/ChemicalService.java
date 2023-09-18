package com.inventoryManagementSystem.backend.chemical;

import java.util.List;

public interface ChemicalService {
    Chemical registerChemical(ChemicalModel chemicalModel);

    List<Chemical> getChemicals();

    List<Chemical> findChemicalByName(String chemicalName);

    void updateQuantity(Long chemId, Long quantity);
}
