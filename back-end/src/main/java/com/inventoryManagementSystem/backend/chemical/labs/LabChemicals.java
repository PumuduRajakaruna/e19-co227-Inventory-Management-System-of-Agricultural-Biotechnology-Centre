package com.inventoryManagementSystem.backend.chemical.labs;

import com.inventoryManagementSystem.backend.chemical.Chemical;
import com.inventoryManagementSystem.backend.model.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class LabChemicals {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
        private String labName;
        private Long quantity;
        @ManyToOne
        @JoinColumn(name = "chem_id")
        private Chemical chemical;
}
