package com.inventoryManagementSystem.backend.service;

import com.inventoryManagementSystem.backend.entity.Admin;
import com.inventoryManagementSystem.backend.model.AdminModel;

public interface AdminService {
    Admin registerAdmin(AdminModel adminModel);
}
