package com.inventoryManagementSystem.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @GetMapping("/hello")
    public String Hello(){
        return "Hello World";
    }
    @GetMapping("/home")
    public String Home(){
        return "This is HOME PAGE";
    }
    @GetMapping("/admin")
    public String Admin(){
        return "This is ADMIN DASHBOARD";
    }
}
