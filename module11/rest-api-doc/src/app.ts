import express from "express";
import bookRoutes from "./routes/book.routes.js";

import swaggerUi from "swagger-ui-express";

import swaggerJSDocSpec from "./config/swagger-jsdoc.js";
import swaggerYamlSpec from "./config/swagger-yaml.js";


const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());
app.use("/book", bookRoutes);

app.use(
  "/api-docs",
  swaggerUi.serveFiles(swaggerJSDocSpec),
  swaggerUi.setup(swaggerJSDocSpec)
);

app.use(
  "/yaml",
  swaggerUi.serveFiles(swaggerYamlSpec),
  swaggerUi.setup(swaggerYamlSpec)
);


// Routes

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Swagger running at http://localhost:${PORT}/api-docs`)
  console.log(`Swagger YAML running at http://localhost:${PORT}/yaml`)

});
