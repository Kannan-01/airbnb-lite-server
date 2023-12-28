// Loads .env file content into process.env by default
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./Routes/router");
require("./DB/connection")

// create express application
const propertyServer = express();

// Increase the limit for JSON payloads
propertyServer.use(express.json({ limit: '10mb' }));

// Increase the limit for URL-encoded payloads (form data)
propertyServer.use(express.urlencoded({ extended: true, limit: '10mb' }));

propertyServer.use(cors());
// convert json to js
propertyServer.use(express.json());
propertyServer.use(router)
const PORT = 3000 || process.env.PORT;

propertyServer.listen(PORT, () => {
  console.log(
    `Property server started at port ${PORT} and waiting for client request`
  );
});

propertyServer.get("/", (req, res) => {
  res.send(`<h1>Property server started and waiting for client request</h1>`);
});
