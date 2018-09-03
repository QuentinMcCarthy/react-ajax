const express = require("express");
const data = require("./data/data.json");

const app = express();

app.use(function(req,res,next){
	console.log(`${req.method} request for ${req.url}`);
	next();
});
