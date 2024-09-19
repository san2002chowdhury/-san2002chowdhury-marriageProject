const dotenv = require("dotenv");
const { log } = require("console");
const express = require("express");
const http = require("http");
const app = express();
app.use(express.json());
const PORT = 9000;

//Require All file from another folder
const { connectMongo } = require("./src/connection/dbConnect");
const { url } = require("./src/connection/databaseDetails");
const recordRouter = require("./src/routers/record");
//Connect With DataBase-------->
connectMongo(url).then(() => {
  console.log("<=====DataBase Connected!=====>");
});
//Listennig Port---------->
app.listen(PORT, () => {
  console.log(`<=====Server Started At Port:${PORT}=====>`);
});
//Api Calling--------->
app.use("/api/record", recordRouter);
