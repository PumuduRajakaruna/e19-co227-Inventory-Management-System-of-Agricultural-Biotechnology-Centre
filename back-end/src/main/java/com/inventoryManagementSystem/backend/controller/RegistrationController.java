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
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
@RequestMapping("/api/v1/manager")
public class RegistrationController {
    @Autowired
    private StudentService studentService;
    @Autowired
    private AdminService adminService;

    @PostMapping("/registerStudent")
    public String registerStudent(@RequestBody Student student) {
        studentService.registerStudent(student);
//        publisher.publishEvent(new RegistrationCompleteEvent(
//                user,
//                applicationUrl(request)
//        ));
        return "User Registered Successfully";
    }

    @PostMapping("/registerAdmin")
//    @PreAuthorize("hasRole('ADMIN')")
    public String registerAdmin(@RequestBody Admin admin) {
        adminService.registerAdmin(admin);
//        publisher.publishEvent(new RegistrationCompleteEvent(
//                user,
//                applicationUrl(request)
//        ));
        return "Admin Registered Successfully";
    }

    @GetMapping("admin/existsbyuserid/{uid}")
//    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public boolean existsAdminByUid(@PathVariable("uid") Long uid) {
        return adminService.existsAdminByUid(uid);
    }

    @GetMapping("user/existsbyuserid/{uid}")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public boolean existsUserByUid(@PathVariable("uid") Long uid) {
        return studentService.existsUserByUid(uid);
    }

}