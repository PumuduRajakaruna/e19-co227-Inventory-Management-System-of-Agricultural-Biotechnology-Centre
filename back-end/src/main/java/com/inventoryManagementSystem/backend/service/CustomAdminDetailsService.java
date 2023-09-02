package com.inventoryManagementSystem.backend.service;

import com.inventoryManagementSystem.backend.details.CustomAdminDetails;
import com.inventoryManagementSystem.backend.entity.Admin;
import com.inventoryManagementSystem.backend.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomAdminDetailsService implements UserDetailsService {
    @Autowired
    private AdminRepository adminRepository;
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Admin admin = adminRepository.findByEmail(email);
        if(admin == null) {
            throw new UsernameNotFoundException("Admin Not Found");
        }
        return new CustomAdminDetails(admin);
    }
}
