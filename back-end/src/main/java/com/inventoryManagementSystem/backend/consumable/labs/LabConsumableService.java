package com.inventoryManagementSystem.backend.consumable.labs;

import java.util.List;

public interface LabConsumableService {
    void addConsumable(LabConsumable labConsumable);

    List<LabConsumable> getConsumablesByLabName(String labName);

    LabConsumable getConsumableById(Long labId);

    void updateQuantity(Long labId, Long labQuantity);

    void deleteLabConsumable(Long labId);
}
