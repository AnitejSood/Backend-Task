const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"))
//Message on Local host 300
app.get("/", (req, res) => {
  console.log("Hello World");
  res.send("Experimenting With Backend!");
});
//To check if it is working
app.get("/check", (req, res) => {
  res.send("check success");
});
//Average of 3 nos
app.get("/body", (req, res) => {
  console.log(req.body);
 const Num1= req.body.num1;
 const Num2= req.body.num2;
 const Num3= req.body.num3;
 const Avg= (Num1+Num2+Num3)/3;
  res.send(`Average is ${Avg}` );
});
// renders HTML instead of a string response.
app.get("/serveHtml", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});
//takes Name as a paramter and returns a message containing the given name
app.get("/:name", (req, res) => {
  res.send("Hello good sir " + req.params.name);
  console.log(req.params);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});