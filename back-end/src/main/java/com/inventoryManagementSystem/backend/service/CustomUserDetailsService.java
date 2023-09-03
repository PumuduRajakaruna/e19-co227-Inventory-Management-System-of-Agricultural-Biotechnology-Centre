package com.inventoryManagementSystem.backend.service;

import com.inventoryManagementSystem.backend.details.CustomAdminDetails;
import com.inventoryManagementSystem.backend.details.CustomStudentDetails;
import com.inventoryManagementSystem.backend.entity.Admin;
import com.inventoryManagementSystem.backend.entity.Student;
import com.inventoryManagementSystem.backend.repository.AdminRepository;
import com.inventoryManagementSystem.backend.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private AdminRepository adminRepository;
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Student student = studentRepository.findByEmail(email);
        Admin admin = adminRepository.findByEmail(email);
        if(student != null) {
            return new CustomStudentDetails(student);
        }
        else if(admin != null) {
            return new CustomAdminDetails(admin);
        }
        else throw new UsernameNotFoundException("USER Not Found");

    }


//    @Override
//    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
//        Student student = studentRepository.findByEmail(email);
//        if(student == null) {
//            throw new UsernameNotFoundException("Admin Not Found");
//        }
//        return new CustomStudentDetails(student);
//    }
}
