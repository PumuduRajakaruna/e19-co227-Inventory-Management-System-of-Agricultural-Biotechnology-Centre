package com.inventoryManagementSystem.backend.service;

import com.inventoryManagementSystem.backend.entity.Student;
import com.inventoryManagementSystem.backend.model.StudentModel;
import com.inventoryManagementSystem.backend.repository.StudentRepository;
import com.inventoryManagementSystem.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class StudentServiceImpl implements StudentService {
    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private UserRepository userRepository;

    //    @Autowired
//    private VerificationTokenRepository verificationTokenRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public Student registerStudent(Student student) {
        studentRepository.save(student);
        return student;
    }

    @Override
    public boolean existsUserByUid(Long uid) {
        return studentRepository.existsByUserId(uid);
    }

}
