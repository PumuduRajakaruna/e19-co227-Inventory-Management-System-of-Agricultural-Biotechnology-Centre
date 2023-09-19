//package com.inventoryManagementSystem.backend.details;
//
//import com.inventoryManagementSystem.backend.entity.Admin;
//import com.inventoryManagementSystem.backend.entity.Student;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//
//import java.util.Collection;
//import java.util.Collections;
//
//public class CustomAdminDetails implements UserDetails {
//
//    private Admin admin;
//
//    public CustomAdminDetails(Admin admin) {
//        super();
//        this.admin = admin;
//    }
//
//    @Override
//    public Collection<? extends GrantedAuthority> getAuthorities() {
//        return Collections.singleton(new SimpleGrantedAuthority(admin.getRole()));
//    }
//
//    @Override
//    public String getPassword() {
//        return admin.getPassword();
//    }
//
//    @Override
//    public String getUsername() {
//        return admin.getEmail();
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
