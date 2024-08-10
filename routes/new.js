const {Router} = require("express");
const newRoute = Router();
import { messages } from "../app";




newRoute.get("/", (req,res) => {

    res.render("new")
})

module.exports = newRoute;