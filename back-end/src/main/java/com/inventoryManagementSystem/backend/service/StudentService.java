package com.inventoryManagementSystem.backend.service;

import com.inventoryManagementSystem.backend.entity.Student;
import com.inventoryManagementSystem.backend.model.StudentModel;

public interface StudentService {
    Student registerStudent(Student student);

    boolean existsUserByUid(Long uid);
}
