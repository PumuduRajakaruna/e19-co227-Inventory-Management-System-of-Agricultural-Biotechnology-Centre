package com.inventoryManagementSystem.backend.chemical;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ConsumableModel {
    private String chemicalName;
    private Long quantity;
    private Long unitPrice;
    private String brand;
    private String receivedDate;
    private String expirationDate;
}
