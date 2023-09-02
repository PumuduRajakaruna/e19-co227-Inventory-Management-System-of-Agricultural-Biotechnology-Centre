package com.inventoryManagementSystem.backend.service;

import com.inventoryManagementSystem.backend.entity.Admin;
import com.inventoryManagementSystem.backend.model.AdminModel;
import com.inventoryManagementSystem.backend.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImpl implements AdminService{
    @Autowired
    private AdminRepository adminRepository;
//    @Autowired
//    private VerificationTokenRepository verificationTokenRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public Admin registerAdmin(AdminModel adminModel) {
        Admin admin = new Admin();
        admin.setEmail(adminModel.getEmail());
        admin.setFirstName(adminModel.getFirstName());
        admin.setLastName(adminModel.getLastName());
        admin.setRole("ADMIN");
        admin.setPassword(passwordEncoder.encode(adminModel.getPassword()));

        adminRepository.save(admin);
        return admin;
    }

}
