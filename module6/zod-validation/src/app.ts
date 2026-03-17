import express from "express";
import { UserSchema } from "./schema/user.schema.js";
import { validate } from "./middleware/validate.js";

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());
app.post("/zod-test", (req, res) => {
  // get a user
  const user = req.body;
  // Validate the user
  const result = UserSchema.parse(user);

  console.log("parsed user: ", result);

  res.send(result);
});

app.post("/zod-test-safe", (req, res) => {
  // get a user
  const user = req.body;
  // Validate the user
  const {success, data, error} = UserSchema.safeParse(user);

  const response = {
    status: success,
    data : data,
    error: error?.message || null,
  }

  if (!success) {
    return res.status(400).send(response);
  }

  res.send(response);
});

app.post("/zod-test-middleware", validate(UserSchema), (req, res) => {
  // get a user
  const user = req.body;

  res.send(user);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
