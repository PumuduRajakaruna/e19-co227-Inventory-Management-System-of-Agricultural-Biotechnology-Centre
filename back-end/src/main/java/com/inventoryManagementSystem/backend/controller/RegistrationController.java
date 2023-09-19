package com.inventoryManagementSystem.backend.controller;

import com.inventoryManagementSystem.backend.entity.Admin;
import com.inventoryManagementSystem.backend.entity.Student;
import com.inventoryManagementSystem.backend.model.AdminModel;
import com.inventoryManagementSystem.backend.model.StudentModel;
import com.inventoryManagementSystem.backend.service.AdminService;
import com.inventoryManagementSystem.backend.service.StudentService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@RequestMapping("/api/v1/manager")
public class RegistrationController {
    @Autowired
    private StudentService studentService;
    @Autowired
    private AdminService adminService;

    @PostMapping("/registerStudent")
    public String registerStudent(@RequestBody StudentModel studentModel, final HttpServletRequest request) {
        Student student = studentService.registerStudent(studentModel);
//        publisher.publishEvent(new RegistrationCompleteEvent(
//                user,
//                applicationUrl(request)
//        ));
        return "User Registered Successfully";
    }

    @PostMapping("/registerAdmin")
//    @PreAuthorize("hasRole('ADMIN')")
    public String registerAdmin(@RequestBody Admin admin, final HttpServletRequest request) {
        adminService.registerAdmin(admin);
//        publisher.publishEvent(new RegistrationCompleteEvent(
//                user,
//                applicationUrl(request)
//        ));
        return "Admin Registered Successfully";
    }
}