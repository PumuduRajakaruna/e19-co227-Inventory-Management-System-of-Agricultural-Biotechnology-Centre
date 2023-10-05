package com.inventoryManagementSystem.backend.consumable;

import com.inventoryManagementSystem.backend.chemical.Chemical;
import com.inventoryManagementSystem.backend.chemical.ConsumableModel;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/consumable")
@CrossOrigin("http://localhost:3000")
public class ConsumableController {
    @Autowired
    private ConsumableService consumableService;
    @PostMapping("/updateConsumableStore")
//    @PreAuthorize("hasRole('USER')")
    public String registerStudent(@RequestBody Consumable consumable) {
        consumableService.registerConsumable(consumable);
        return "Consumable Added to the Store Successfully";
    }
    @GetMapping("/getStore")
    public List<Consumable> getConsumables(){
        return consumableService.getConsumables();
    }
}