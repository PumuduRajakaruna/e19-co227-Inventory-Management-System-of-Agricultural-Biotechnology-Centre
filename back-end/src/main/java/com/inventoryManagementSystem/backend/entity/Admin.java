package com.inventoryManagementSystem.backend.entity;

//import com.inventoryManagementSystem.backend.model.User;
import com.inventoryManagementSystem.backend.model.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Admin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
//    private String email;
//    @Column(length = 60)
//    private String password;
//    private String role;

    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "uid")
    private User user;
}
