package com.inventoryManagementSystem.backend.service;

import com.inventoryManagementSystem.backend.entity.Student;
import com.inventoryManagementSystem.backend.model.StudentModel;

public interface StudentService {
    Student registerStudent(StudentModel studentModel);

    boolean existsUserByUid(Long uid);
}
