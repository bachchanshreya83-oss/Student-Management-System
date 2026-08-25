const express = require("express");
const dbconnect = require("./dbconnect");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.post("/addstudent", async (req, res) => {
    let db = await dbconnect();
    let result = await db.collection("students").insertOne(req.body);
    res.send(result);
});

app.get("/students", async (req, res) => {
    let db = await dbconnect();
    let data = await db.collection("students").find().toArray();
    res.send(data);
});

app.listen(5000, () => {
    console.log("Server Started");
});