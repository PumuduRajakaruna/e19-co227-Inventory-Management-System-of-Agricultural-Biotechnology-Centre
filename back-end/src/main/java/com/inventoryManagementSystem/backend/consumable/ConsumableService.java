package com.inventoryManagementSystem.backend.consumable;

import com.inventoryManagementSystem.backend.chemical.Chemical;

import java.util.List;

public interface ConsumableService {
    Consumable registerConsumable(Consumable consumable);

    List<Consumable> getConsumables();

    void updateQuantity(Long conId, Long quantity);

    Consumable getConsumableById(Long conId);
}
