package com.inventoryManagementSystem.backend.consumable.labs;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LabConsumableRepository extends JpaRepository<LabConsumable, Long> {
}
