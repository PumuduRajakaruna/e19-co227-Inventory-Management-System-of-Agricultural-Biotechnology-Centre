//package com.inventoryManagementSystem.backend.details;
//
//import com.inventoryManagementSystem.backend.entity.Student;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.stereotype.Component;
//
//import java.util.Collection;
//import java.util.Collections;
//
//public class CustomStudentDetails implements UserDetails {
//    private Student student;
//    public CustomStudentDetails(Student student) {
//        super();
//        this.student = student;
//    }
//    @Override
//    public Collection<? extends GrantedAuthority> getAuthorities() {
//        return Collections.singleton(new SimpleGrantedAuthority(student.getRole()));
//    }
//
//    @Override
//    public String getPassword() {
//        return student.getPassword();
//    }
//
//    @Override
//    public String getUsername() {
//        return student.getEmail();
//    }
//
//    @Override
//    public boolean isAccountNonExpired() {
//        return true;
//    }
//
//    @Override
//    public boolean isAccountNonLocked() {
//        return true;
//    }
//
//    @Override
//    public boolean isCredentialsNonExpired() {
//        return true;
//    }
//
//    @Override
//    public boolean isEnabled() {
//        return true;
//    }
//}
