package com.inventoryManagementSystem.backend;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.inventoryManagementSystem.backend.chemical.Chemical;
import com.inventoryManagementSystem.backend.chemical.ChemicalModel;
import com.inventoryManagementSystem.backend.chemical.ChemicalService;
import jdk.dynalink.linker.support.Guards;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class BackEndApplicationTests {
	@Autowired
	private ChemicalService chemicalService;

	@Test
	void contextLoads() {
		assertThat(chemicalService).isNotNull();
	}

	@Test
	void testGetChemicalByIdMethod() throws Exception {
		// Test a specific method in ChemicalService
		Chemical result = chemicalService.getChemicalById(1L);

		// Define the expected JSON string
		String expectedJson = "{\"chemId\":1,\"brand\":\"ABC\",\"chemicalName\":\"NaCl\",\"expirationDate\":\"2028-09-07\",\"quantity\":7,\"receivedDate\":\"2023-09-07\",\"unitPrice\":500,\"thresholdValue\":40}";

		// Parse the expected JSON string into a Chemical object using Jackson
		ObjectMapper objectMapper = new ObjectMapper();
		Chemical expectedChemical = objectMapper.readValue(expectedJson, Chemical.class);

		// Assert that the actual Chemical object is equal to the expected one
		assertThat(result).isEqualTo(expectedChemical);
	}

	@Test
	public void testPostEndpoint() throws Exception {

		// Create the request object
		ChemicalModel requestModel = new ChemicalModel();

		requestModel.setChemicalName("C2H5OH");
		requestModel.setQuantity(1000L);
		requestModel.setUnitPrice(300L);
		requestModel.setBrand("ACC");
		requestModel.setReceivedDate("2024/5/2");
		requestModel.setExpirationDate("2025/5/2");
		requestModel.setThresholdValue(750L);

		Chemical responseModel = chemicalService.registerChemical(requestModel);


		assertThat(responseModel).isNotNull();
		assertThat(responseModel.getChemicalName()).isEqualTo("C2H5OH");
		assertThat(responseModel.getQuantity()).isEqualTo(1000);
		assertThat(responseModel.getUnitPrice()).isEqualTo(300);
	}



}
