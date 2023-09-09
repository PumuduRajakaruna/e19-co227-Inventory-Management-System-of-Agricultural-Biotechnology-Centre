package com.inventoryManagementSystem.backend.chemical;

import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@Slf4j
public class ChemicalController {
    @Autowired
    private ChemicalService chemicalService;
    @PostMapping("/updateStore")
    public String registerStudent(@RequestBody ChemicalModel chemicalModel, final HttpServletRequest request) {
        Chemical chemical = chemicalService.registerChemical(chemicalModel);
        return "Chemical Added to the Store Successfully";
    }
}
