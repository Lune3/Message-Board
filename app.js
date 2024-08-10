const express = require("express");
const path = require("node:path");


const app = express();
require("dotenv").config();


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const messages = [
    {
      text: "First message",
      user: "Lune",
      added: new Date()
    },
    {
      text: "Second message",
      user: "Lune",
      added: new Date()
    }
];

app.get("/",(req,res) => {
    res.render("index",{message:messages});
});

app.listen(process.env.PORT,() => {
    console.log("server running");
});

   