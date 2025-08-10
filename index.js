require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("./config/connection");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
