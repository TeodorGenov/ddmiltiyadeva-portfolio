import express from "express";
import path from "path";

var app = express();
var __dirname = path.resolve(path.dirname(""));
app.use(express.static("src"));
app.use(express.static("node_modules"));

app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(process.env.PORT || 4000, function () {
	console.log("Node app is working!");
});
