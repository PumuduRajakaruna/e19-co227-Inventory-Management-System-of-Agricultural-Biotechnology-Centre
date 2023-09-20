package com.inventoryManagementSystem.backend.repository;

import com.inventoryManagementSystem.backend.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {
    boolean existsByUserId(Long uid);
}
