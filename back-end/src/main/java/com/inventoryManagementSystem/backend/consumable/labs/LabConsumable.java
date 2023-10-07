package com.inventoryManagementSystem.backend.consumable.labs;

import com.inventoryManagementSystem.backend.chemical.Chemical;
import com.inventoryManagementSystem.backend.consumable.Consumable;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class LabConsumable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String labName;
    private Long labQuantity;
    @ManyToOne
    @JoinColumn(name = "con_id")
    private Consumable consumable;
}
