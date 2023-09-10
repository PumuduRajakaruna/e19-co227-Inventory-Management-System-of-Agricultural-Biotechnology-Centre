package com.inventoryManagementSystem.backend.chemical;

import java.util.List;

public interface ChemicalService {
    Chemical registerChemical(ChemicalModel chemicalModel);

    List<Chemical> getChemicals();

    Chemical findChemicalByName(String chemicalName);
}
