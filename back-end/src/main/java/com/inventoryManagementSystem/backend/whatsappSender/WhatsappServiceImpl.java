package com.inventoryManagementSystem.backend.whatsappSender;

import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
@Service
public class WhatsappServiceImpl implements WhatsappService{

    @Override
    public void send() {
        String phoneNumber = "+94703637141";
        String phoneNumberId = "233441713191863";
        String authToken = "EAAKeSXPAbugBO2TTgbscxo6bA7Vz5Fm8DCGPER7uGqDke97Jb4xjHHQ9yfEZA3CHtW8VMxotKCt419wb5pdG7IRHMESTbAK0cyKjmZAtaZCPuHZCNZBmqbSksq293qLkuO16cZBwJgnRZCs6bFmva1CgeIHe74ZCtPXVgVeZB7Fm0KSphOWfNZB7VIbEah1qSDLFbGe2jlfmyWjRR4GNeZBdNYZD";
        try {
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(new URI("https://graph.facebook.com/v18.0/233441713191863/messages"))
                    .header("Authorization", "Bearer "+authToken)
                    .header("Content-Type", "application/json")
                    // Getting started example
                    //.POST(HttpRequest.BodyPublishers.ofString("{ \"messaging_product\": \"whatsapp\", \"recipient_type\": \"individual\", \"to\": \""+phoneNumber+"\", \"type\": \"template\", \"template\": { \"name\": \"hello_world\", \"language\": { \"code\": \"en_US\" } } }"))
                    //Text message example
                    .POST(HttpRequest.BodyPublishers.ofString("{ \\\"messaging_product\\\": \\\"whatsapp\\\", \\\"to\\\": \\\"94703637141\\\", \\\"type\\\": \\\"template\\\", \\\"template\\\": { \\\"name\\\": \\\"hello_world\\\", \\\"language\\\": { \\\"code\\\": \\\"en_US\\\" } } }"))
                    // Bespoke message template example
                    .build();
            HttpClient http = HttpClient.newHttpClient();
            HttpResponse<String> response = http.send(request, HttpResponse.BodyHandlers.ofString());
            System.out.println(response.body());
        } catch (URISyntaxException | IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }
}
