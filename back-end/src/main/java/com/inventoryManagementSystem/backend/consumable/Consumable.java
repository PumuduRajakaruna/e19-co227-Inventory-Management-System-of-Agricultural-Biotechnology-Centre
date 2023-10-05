package com.inventoryManagementSystem.backend.consumable;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Consumable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long conId;
    private String conName;
    private Long quantity;
    private Long unitPrice;
    private String brand;
    private String receivedDate;
    private Long thresholdValue;
}
