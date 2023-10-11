package com.inventoryManagementSystem.backend.chemical.labs;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LabChemicalServiceImpl implements LabChemicalService {
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

    @Override
    public LabChemicals getChemicalById(Long labId) {
        Optional<LabChemicals> labChemicalOptional = labChemicalRepository.findById(labId);
        return labChemicalOptional.orElse(null); // or handle the case differently as needed
    }

    @Override
    public void updateQuantity(Long labId, Long quantity) {
        LabChemicals labChemicals = labChemicalRepository.findById(labId)
                .orElseThrow(() -> new EntityNotFoundException("LabChemicals with id " + labId + " not found"));

        if (quantity == null) {
            throw new IllegalArgumentException("Quantity cannot be null");
        }

        if (labChemicals.getLabQuantity() <= 0) {
            throw new IllegalStateException("LabChemicals with id " + labId + " has insufficient quantity");
        }

        Long updatedQuantity = labChemicals.getLabQuantity() - quantity;
        if (updatedQuantity < 0) {
            throw new IllegalStateException("Quantity to subtract exceeds the current quantity");
        }

        labChemicals.setLabQuantity(updatedQuantity);
        labChemicalRepository.save(labChemicals);
    }

    @Override
    public void deleteLabChemical(Long labId) {
        boolean exists = labChemicalRepository.existsById(labId);
        if(!exists){
            throw new IllegalStateException("student id with "+ labId + "does not exist");
        }
        labChemicalRepository.deleteById(labId);
    }

}
