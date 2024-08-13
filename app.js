const express = require("express");
const path = require("node:path");
const newRoute = require("/home/vboxuser/Message-Board/routes/new.js");
const messages = require("/home/vboxuser/Message-Board/messages.js")

const app = express();
require("dotenv").config();


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));



app.get("/",(req,res) => {
    res.render("index",{messages:messages});
});

app.use(express.urlencoded({extended:true}));


app.use("/new",newRoute);

app.listen(process.env.PORT,() => {
    console.log("server running");
});


   