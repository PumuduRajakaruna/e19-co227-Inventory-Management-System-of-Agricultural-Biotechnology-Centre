package com.inventoryManagementSystem.backend.chemical;

import com.inventoryManagementSystem.backend.entity.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;

import static org.aspectj.bridge.MessageUtil.print;

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

    @Override
    @Transactional
    public void updateQuantity(Long chemId, Long quantity) {
        Chemical chemical = chemicalRepository.findById(chemId).orElseThrow(() -> new IllegalStateException("chemical with id "+ chemId+ " does not exist"));
        Long updateQuantity = chemical.getQuantity() - quantity ;
        if (quantity != null && chemical.getQuantity() > 0 && updateQuantity > 0){
            chemical.setQuantity(updateQuantity);
        }
    }
}
