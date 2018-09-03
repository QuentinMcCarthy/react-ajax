const express = require("express");
const data = require("./data/data.json");

const app = express();

app.use(function(req,res,next){
	console.log(`${req.method} request for ${req.url}`);
	next();
});

app.get(`/getJSON`, (req,res) => { res.json(data) });

app.set(`port`, (process.env.PORT || 4000));

app.listen(app.get(`port`), () => { console.log(`Server is running on port ${app.get(`port`)}`) });
