const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("ONG", () => {
  beforeEach(async () => {
    // desfazer
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("should e able to create a new ONG", async () => {
    const response = await request(app)
      .post("/ongs")
      // .set("Authorization", "")
      .send({
        name: "APAD2",
        email: "contato2@hotmail.com",
        whatsapp: "88999431521",
        city: "Rio do Sul",
        uf: "SC"
      });

    console.log(response.body);
    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });
});
