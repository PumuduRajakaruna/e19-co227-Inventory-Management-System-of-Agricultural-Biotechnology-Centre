package com.inventoryManagementSystem.backend.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AdminModel {
    private String firstName;
    private String lastName;
//    private String mobileNo;

    @OneToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "uid")
    private User user;

}