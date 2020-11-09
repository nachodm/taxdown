//const request = require('supertest') It would be needed just for mocking purposes
const makerequest = require('./make-request')

describe("make-request ", () => {
    it("It should respond with a json object with the fields rates, base and date", async () => {
      const response = await makerequest.makeRequest();
      expect(response.rates).toBeDefined();
      expect(response.base).toBeDefined();
      expect(response.date).toBeDefined();
    });
});
  
describe("make-request ", () => {
  it("Base currency should be in EUR", async () => {
    const response = await makerequest.makeRequest();
    expect(response.base).toBe("EUR");
  });
});
  