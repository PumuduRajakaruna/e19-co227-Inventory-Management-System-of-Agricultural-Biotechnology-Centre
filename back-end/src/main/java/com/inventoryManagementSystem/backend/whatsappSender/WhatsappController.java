package com.inventoryManagementSystem.backend.whatsappSender;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/whatsapp")
public class WhatsappController {
    private final WhatsappService whatsappService;
    @Autowired
    public WhatsappController(WhatsappService whatsappService) {
        this.whatsappService = whatsappService;
    }
    @PostMapping("/send")
    public void sendMessage() {
        whatsappService.send();
    }
}
