package com.inventoryManagementSystem.backend.consumable.labs;

import com.inventoryManagementSystem.backend.chemical.labs.LabChemicals;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LabConsumableServiceImpl implements LabConsumableService{
    @Autowired
    private LabConsumableRepository labConsumableRepository;
    @Override
    public void addConsumable(LabConsumable labConsumable) {
        labConsumableRepository.save(labConsumable);
    }

    @Override
    public List<LabConsumable> getConsumablesByLabName(String labName) {
        return labConsumableRepository.findByLabName(labName);
    }

    @Override
    public LabConsumable getConsumableById(Long labId) {
        Optional<LabConsumable> labConsumableOptional = labConsumableRepository.findById(labId);
        return labConsumableOptional.orElse(null); // or handle the case differently as needed
    }

    @Override
    public void updateQuantity(Long labId, Long quantity) {
        LabConsumable labConsumable = labConsumableRepository.findById(labId)
                .orElseThrow(() -> new EntityNotFoundException("LabConsumable with id " + labId + " not found"));

        if (quantity == null) {
            throw new IllegalArgumentException("Quantity cannot be null");
        }

        if (labConsumable.getLabQuantity() <= 0) {
            throw new IllegalStateException("LabChemicals with id " + labId + " has insufficient quantity");
        }

        Long updatedQuantity = labConsumable.getLabQuantity() - quantity;
        if (updatedQuantity < 0) {
            throw new IllegalStateException("Quantity to subtract exceeds the current quantity");
        }

        labConsumable.setLabQuantity(updatedQuantity);
        labConsumableRepository.save(labConsumable);
    }
    @Override
    public void deleteLabConsumable(Long labId) {
        boolean exists = labConsumableRepository.existsById(labId);
        if(!exists){
            throw new IllegalStateException("student id with "+ labId + "does not exist");
        }
        labConsumableRepository.deleteById(labId);
    }
}
