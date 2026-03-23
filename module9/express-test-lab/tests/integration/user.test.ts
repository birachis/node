import request from "supertest";
import app from "../../src/app";

describe("User API", () => {

  it("GET /users should return list", async () => {
    const res = await request(app).get("/users");

    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it("POST /users success", async () => {
    const res = await request(app)
      .post("/users")
      .send({ name: "Alice" });

    expect(res.status).toBe(201);
    expect(res.body.name).toBe("Alice");
  });

  it("POST /users error case", async () => {
    const res = await request(app)
      .post("/users")
      .send({});

    expect(res.status).toBe(400);
  });
});
