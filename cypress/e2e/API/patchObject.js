// import API_PO from "../../support/pageObjects/API_PO";
// import "cypress-plugin-api";
// describe("API Test - Update Product", () => {
//   const api_PO = new API_PO();

//   const updatedProductData = {
//     name: "Apple MacBook Pro 16",
//     data: {
//       year: 2022,
//       price: 3000,
//     },
//   };

//   it("should update an existing product and verify the response", () => {
//     cy.readFile("cypress/fixtures/createdProductId.json").then((data) => {
//       const objectId = data.id;

//       expect(objectId).to.not.be.undefined;

//       api_PO.patchProduct(objectId, updatedProductData).then((response) => {
//         console.log("Updated Response:", response.body);

//         expect(response.status).to.eq(200);
//         expect(response.body).to.have.property("name", updatedProductData.name);
//         expect(response.body).to.have.property("data");

//         expect(response.body.data).to.have.property(
//           "year",
//           updatedProductData.data.year
//         );
//         expect(response.body.data).to.have.property(
//           "price",
//           updatedProductData.data.price
//         );
//       });
//     });
//   });
// });
import API_PO from "../../support/pageObjects/API_PO";
import "cypress-plugin-api";

describe("API Test - Create and Update Product", () => {
  const api_PO = new API_PO();

  const productData = {
    name: "Apple MacBook Pro 16",
    data: {
      year: 2019,
      price: 1849.99,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB",
    },
  };

  const updatedProductData = {
    name: "Apple MacBook Pro 16",
    data: {
      year: 2022,
      price: 3000,
    },
  };

  // Shared variable across tests
  let createdProductId;

  it("should create a new product and verify the response", () => {
    api_PO.createProduct(productData).then((response) => {
      expect(response.status).to.eq(200);

      const body = response.body;
      expect(body).to.have.property("name", productData.name);
      expect(body.data).to.include(productData.data);

      createdProductId = body.id;

      // Optional: Log product ID for debugging
      cy.log("Created Product ID: " + createdProductId);
    });
  });

  it("should update the created product and verify the response", () => {
    // Use the shared ID from the first test
    api_PO
      .patchProduct(createdProductId, updatedProductData)
      .then((response) => {
        expect(response.status).to.eq(200);

        const body = response.body;
        expect(body).to.have.property("name", updatedProductData.name);
        expect(body.data).to.include(updatedProductData.data);
      });
  });
});
