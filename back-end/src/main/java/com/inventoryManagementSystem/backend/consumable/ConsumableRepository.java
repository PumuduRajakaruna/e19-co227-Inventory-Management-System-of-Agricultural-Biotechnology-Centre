package com.inventoryManagementSystem.backend.consumable;

import com.inventoryManagementSystem.backend.chemical.Chemical;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;

@Repository
public interface ConsumableRepository extends JpaRepository<Consumable, Long> {
    @Query("SELECT c FROM Consumable c WHERE c.conId = :conId")
    Consumable getConsumableById(@Param("conId") Long conId);
}
