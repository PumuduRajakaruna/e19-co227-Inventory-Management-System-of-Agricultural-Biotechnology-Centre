package com.inventoryManagementSystem.backend.consumable.labs;

import com.inventoryManagementSystem.backend.chemical.labs.LabChemicalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/consumable/labs")
@CrossOrigin("http://localhost:3000")
public class LabConsumableController {
    @Autowired
    private LabConsumableService labConsumableService;
    @PostMapping("/addConsumable")
    public String registerStudent(@RequestBody LabConsumable labConsumable) {
        labConsumableService.addConsumable(labConsumable);
        return "Consumable Added Successfully";
    }
}
