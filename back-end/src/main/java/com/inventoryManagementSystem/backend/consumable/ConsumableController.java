package com.inventoryManagementSystem.backend.consumable;

import com.inventoryManagementSystem.backend.chemical.Chemical;
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
    @PutMapping(path = "/updateQuantity/{consumableId}")
//    @PreAuthorize("hasRole('USER')")
    public void updateConsumable(
            @PathVariable("consumableId") Long conId,
            @RequestBody Consumable consumable){
        consumableService.updateQuantity(conId, consumable.getQuantity());
    }
    @GetMapping(path = "/getConsumableById/{conId}")
    public Consumable getConsumableById(@PathVariable("conId") Long conId){
        return consumableService.getConsumableById(conId);
    }
}
