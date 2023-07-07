const express = require("express");
const dotenv = require("dotenv").config();
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const connectDb = require("./src/config/dbConfig");
const booksRouter = require("./src/routers/bookRouter");

const app = express();

app.use(express.json());

const port = process.env.PORT;
connectDb();

app.use("/api/book", booksRouter);

const spacs = YAML.load("./api.yaml");
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(spacs));

app.listen(port, () => {
  console.log(`port is running on ${port}`);
});
