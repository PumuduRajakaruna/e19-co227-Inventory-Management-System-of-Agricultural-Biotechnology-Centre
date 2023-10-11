package com.inventoryManagementSystem.backend.consumable;

import com.inventoryManagementSystem.backend.chemical.Chemical;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

    @Override
    @Transactional
    public void updateQuantity(Long conId, Long quantity) {
        Consumable consumable = consumableRepository.findById(conId).orElseThrow(() -> new IllegalStateException("consumable with id "+ conId+ " does not exist"));
        Long updateQuantity = consumable.getQuantity() - quantity ;
        if (quantity != null && consumable.getQuantity() > 0 && updateQuantity > 0){
            consumable.setQuantity(updateQuantity);
        }
    }

    @Override
    public Consumable getConsumableById(Long conId) {
        return consumableRepository.getConsumableById(conId);
    }
}
