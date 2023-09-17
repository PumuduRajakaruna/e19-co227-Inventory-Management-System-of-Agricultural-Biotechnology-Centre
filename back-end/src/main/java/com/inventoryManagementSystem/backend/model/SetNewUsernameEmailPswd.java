package com.inventoryManagementSystem.backend.model;

import lombok.Data;

@Data
public class SetNewUsernameEmailPswd {
    String password;
    String newUsername;
    String newEmail;
    String newPassword;
}
