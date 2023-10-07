package com.inventoryManagementSystem.backend.chemical;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChemicalModel {
    private String chemicalName;
    private Long quantity;
    private Long unitPrice;
    private String brand;
    private String receivedDate;
    private String expirationDate;
    private Long thresholdValue;

}
