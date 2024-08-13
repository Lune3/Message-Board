const {Router} = require("express");
const newRoute = Router();
const messages = require("/home/vboxuser/Message-Board/messages.js");

newRoute.get("/", (req,res) => {
    res.render("new")
});

newRoute.post('/',(req,res) => {
    messages.push({user:req.body.user,text:req.body.text,added:new Date()});
    res.redirect("/");
})

module.exports = newRoute;