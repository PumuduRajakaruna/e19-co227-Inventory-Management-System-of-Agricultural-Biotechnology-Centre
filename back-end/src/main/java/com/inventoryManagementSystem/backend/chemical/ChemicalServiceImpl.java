package com.inventoryManagementSystem.backend.chemical;

import com.inventoryManagementSystem.backend.entity.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class ChemicalServiceImpl implements ChemicalService{
    @Autowired
    private ChemicalRepository chemicalRepository;
    @Override
    public Chemical registerChemical(ChemicalModel chemicalModel) {
        Chemical chemical = new Chemical();
        chemical.setChemicalName(chemicalModel.getChemicalName());
        chemical.setQuantity(chemicalModel.getQuantity());
        chemical.setReceivedDate(chemicalModel.getReceivedDate());
        chemical.setExpirationDate(chemicalModel.getExpirationDate());

        chemicalRepository.save(chemical);
        return chemical;
    }
}
