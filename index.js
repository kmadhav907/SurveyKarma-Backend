import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello world");
});
const PORT = 8080;

app.listen(PORT, () => {
	console.log("APP is running");
});
