package com.inventoryManagementSystem.backend.service;

import com.inventoryManagementSystem.backend.details.CustomAdminDetails;
import com.inventoryManagementSystem.backend.details.CustomStudentDetails;
import com.inventoryManagementSystem.backend.entity.Admin;
import com.inventoryManagementSystem.backend.entity.Student;
import com.inventoryManagementSystem.backend.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomStudentDetailsService implements UserDetailsService {
    @Autowired
    private StudentRepository studentRepository;
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Student student = studentRepository.findByEmail(email);
        if(student == null) {
            throw new UsernameNotFoundException("Admin Not Found");
        }
        return new CustomStudentDetails(student);
    }
}
