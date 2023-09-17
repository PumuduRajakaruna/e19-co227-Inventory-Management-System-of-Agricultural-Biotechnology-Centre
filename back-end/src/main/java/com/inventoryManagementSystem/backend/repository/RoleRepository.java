package com.inventoryManagementSystem.backend.repository;

import com.inventoryManagementSystem.backend.model.ERole;
import com.inventoryManagementSystem.backend.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;



@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
  Optional<Role> findByName(ERole name);
}
