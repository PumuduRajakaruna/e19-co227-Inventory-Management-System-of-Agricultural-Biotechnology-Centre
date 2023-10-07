package com.inventoryManagementSystem.backend.consumable.labs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LabConsumableServiceImpl implements LabConsumableService{
    @Autowired
    private LabConsumableRepository labConsumableRepository;
    @Override
    public void addConsumable(LabConsumable labConsumable) {
        labConsumableRepository.save(labConsumable);
    }
}
