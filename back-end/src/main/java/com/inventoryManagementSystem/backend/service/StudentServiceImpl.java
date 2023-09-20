package com.inventoryManagementSystem.backend.service;

import com.inventoryManagementSystem.backend.entity.Student;
import com.inventoryManagementSystem.backend.model.StudentModel;
import com.inventoryManagementSystem.backend.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class StudentServiceImpl implements StudentService {
    @Autowired
    private StudentRepository studentRepository;
    //    @Autowired
//    private VerificationTokenRepository verificationTokenRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public Student registerStudent(StudentModel studentModel) {
        Student student = new Student();
        student.setFirstName(studentModel.getFirstName());
        student.setLastName(studentModel.getLastName());

        studentRepository.save(student);
        return student;
    }

    @Override
    public boolean existsUserByUid(Long uid) {
        return studentRepository.existsByUserId(uid);
    }

}
