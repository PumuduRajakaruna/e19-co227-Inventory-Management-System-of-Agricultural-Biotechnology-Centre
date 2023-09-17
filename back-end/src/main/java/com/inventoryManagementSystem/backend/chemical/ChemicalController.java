package com.inventoryManagementSystem.backend.chemical;

import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@Slf4j
public class ChemicalController {
    @Autowired
    private ChemicalService chemicalService;
    @PostMapping("/updateStore")
    @PreAuthorize("hasRole('USER')")
    public String registerStudent(@RequestBody ChemicalModel chemicalModel, final HttpServletRequest request) {
        Chemical chemical = chemicalService.registerChemical(chemicalModel);
        return "Chemical Added to the Store Successfully";
    }

    @GetMapping("/getStore")
    @PreAuthorize("hasRole('USER')")
    public List<Chemical> getChemicals(){
        return chemicalService.getChemicals();
    }

    @GetMapping(path = "/findChemical/{chemicalName}")
    @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
    public List<Chemical> findChemicalByName(@PathVariable("chemicalName") String chemicalName){
        return chemicalService.findChemicalByName(chemicalName);
    }
}
