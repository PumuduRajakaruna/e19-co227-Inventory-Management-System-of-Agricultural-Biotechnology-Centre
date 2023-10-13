package com.inventoryManagementSystem.backend.consumable.labs;

import com.inventoryManagementSystem.backend.chemical.labs.LabChemicalService;
import com.inventoryManagementSystem.backend.chemical.labs.LabChemicals;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    @GetMapping("/getLabConsumable")
    public List<LabConsumable> getConsumablesByLabName(@RequestParam String labName){
        return labConsumableService.getConsumablesByLabName(labName);
    }
    @GetMapping(path = "/getConsumableById/{labId}")
    public LabConsumable getConsumableById(@PathVariable("labId") Long labId){
        return labConsumableService.getConsumableById(labId);
    }
    @PutMapping(path = "/updateQuantity/{labId}")
//    @PreAuthorize("hasRole('USER')")
    public void updateLabConsumable(
            @PathVariable("labId") Long labId,
            @RequestBody LabConsumable labConsumable){
        labConsumableService.updateQuantity(labId, labConsumable.getLabQuantity());
    }
    @DeleteMapping(path = "/delete/{labId}")
    public void deleteLabConsumable(@PathVariable("labId") Long labId){
        labConsumableService.deleteLabConsumable(labId);
    }
}
