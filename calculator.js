//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    var firstNumber = Number(req.body.num1);
    var secondNumber = Number(req.body.num2);

    var result = firstNumber + secondNumber;
    res.send("The result of two number is " + result);
});

app.listen(3000, () => {
    console.log("This server is running at Localhost 3000");
});

// BMI Calculator
app.get("/bmiCalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res) {
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);

    var bmi = weight / (height * height);
    res.send("<h1>Your BMI is " + bmi.toFixed(3) + "kgcm<sup>-2</sup></h1>");
});