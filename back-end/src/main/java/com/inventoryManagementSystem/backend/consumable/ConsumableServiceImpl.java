package com.inventoryManagementSystem.backend.consumable;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConsumableServiceImpl implements ConsumableService{
    @Autowired
    private ConsumableRepository consumableRepository;
    @Override
    public Consumable registerConsumable(Consumable consumable) {
         return consumableRepository.save(consumable);
    }
    @Override
    public List<Consumable> getConsumables() {
        return consumableRepository.findAll();
    }
}
