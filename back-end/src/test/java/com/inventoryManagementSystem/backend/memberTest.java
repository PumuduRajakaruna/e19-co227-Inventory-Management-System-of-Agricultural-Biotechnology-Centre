package com.inventoryManagementSystem.backend;

import com.inventoryManagementSystem.backend.entity.Admin;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import com.inventoryManagementSystem.backend.service.AdminService;
import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class memberTest{
    @Autowired
    private AdminService adminService;

    @Test
    public void existAdminByUIDTest(){
         boolean isAdminExist = adminService.existsAdminByUid(702L);
        assertThat(isAdminExist).isEqualTo(true);
    }
}
