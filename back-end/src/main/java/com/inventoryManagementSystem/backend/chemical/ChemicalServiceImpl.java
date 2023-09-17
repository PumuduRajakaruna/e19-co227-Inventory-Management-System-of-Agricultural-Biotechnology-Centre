package com.inventoryManagementSystem.backend.chemical;

import com.inventoryManagementSystem.backend.entity.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ChemicalServiceImpl implements ChemicalService{
    @Autowired
    private ChemicalRepository chemicalRepository;
    @Override
    public Chemical registerChemical(ChemicalModel chemicalModel) {
        Chemical chemical = new Chemical();
        chemical.setChemicalName(chemicalModel.getChemicalName());
        chemical.setQuantity(chemicalModel.getQuantity());
        chemical.setUnitPrice(chemicalModel.getUnitPrice());
        chemical.setBrand(chemicalModel.getBrand());
        chemical.setReceivedDate(chemicalModel.getReceivedDate());
        chemical.setExpirationDate(chemicalModel.getExpirationDate());

        chemicalRepository.save(chemical);
        return chemical;
    }

    @Override
    public List<Chemical> getChemicals() {
            return chemicalRepository.findAll();
        }

    @Override
    public List<Chemical> findChemicalByName(String chemicalName) {
//        List<Chemical> chemicalList = chemicalRepository.findAll();
//        for(int i=0; i <= chemicalList.size(); i++ ){
//            if (chemicalName.equals(chemicalList.get(i))) {
//                Chemical requiredChemical = chemicalList.get(i);
//                return requiredChemical;
//            }
//        }

        return chemicalRepository.findBychemicalName(chemicalName);
    }
}
