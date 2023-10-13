package com.inventoryManagementSystem.backend.consumable.labs;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LabConsumableRepository extends JpaRepository<LabConsumable, Long> {
    List<LabConsumable> findByLabName(String labName);
}
