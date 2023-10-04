package com.inventoryManagementSystem.backend.chemical.labs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LabChemicalServiceImpl implements LabChemicalService{
    @Autowired
    private LabChemicalRepository labChemicalRepository;
    @Override
    public void addChemical(LabChemicals labChemical) {
        labChemicalRepository.save(labChemical);
    }
    @Override
    public List<LabChemicals> getChemicalsByLabName(String labName) {
        return labChemicalRepository.findByLabName(labName);
    }
}
