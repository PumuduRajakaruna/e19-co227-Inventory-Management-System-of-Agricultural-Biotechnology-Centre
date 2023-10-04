package com.inventoryManagementSystem.backend.chemical.labs;

import com.inventoryManagementSystem.backend.chemical.Chemical;
import com.inventoryManagementSystem.backend.entity.Student;
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

}

