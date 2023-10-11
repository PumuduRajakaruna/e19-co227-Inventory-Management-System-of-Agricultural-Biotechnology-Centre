package com.inventoryManagementSystem.backend.chemical.labs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/chemical/labs")
@CrossOrigin("http://localhost:3000")
public class LabChemicalsController {
    @Autowired
    private LabChemicalService labChemicalService;
    @PostMapping("/addChemical")
    public String registerStudent(@RequestBody LabChemicals labChemical) {
        labChemicalService.addChemical(labChemical);
        return "Chemical Added Successfully";
    }
    @GetMapping("/getLabChemical")
    public List<LabChemicals> getChemicalsByLabName(@RequestParam String labName){
        return labChemicalService.getChemicalsByLabName(labName);
    }
    @GetMapping(path = "/getChemicalById/{labId}")
    public LabChemicals getChemicalById(@PathVariable("labId") Long labId){
        return labChemicalService.getChemicalById(labId);
    }

    @PutMapping(path = "/updateQuantity/{labId}")
//    @PreAuthorize("hasRole('USER')")
    public void updateStudent(
            @PathVariable("labId") Long labId,
            @RequestBody LabChemicals labChemicals){
        labChemicalService.updateQuantity(labId, labChemicals.getLabQuantity());
    }
    @DeleteMapping(path = "/delete/{labId}")
    public void deleteLabChemical(@PathVariable("labId") Long labId){
        labChemicalService.deleteLabChemical(labId);
    }
}

