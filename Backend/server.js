const express = require("express");
const cors = require("cors");
const getconnect = require("./dbconnect");
const {ObjectId} = require("mongodb");

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

let showdata = async(req, res) =>
{
    let collection = await getconnect();
    let records = await collection.find({}).toArray();
    res.send(records);
}
let insertdata = async(req, res) =>
{
    let collection = await getconnect();
    let result = await collection.insertOne(req.body);
    if(result.acknowledged == true)
        res.send("Record Inserted");
    else
        res.send("Record Not Inserted");
}
let updatedata = async(req, res) =>
{
    let collection = await getconnect();
    let result = await collection.updateOne(
        {_id: new ObjectId(req.params.id)},
        {$set: req.body}
    );
    if(result.acknowledged == true)
        res.send("Record Updated");
    else
        res.send("Record Not Updated");
}
let deletedata = async(req, res) =>
{
    let collection = await getconnect();
    let result = await collection.deleteOne(
        {_id: new ObjectId(req.params.id)}
    );
    if(result.acknowledged == true)
        res.send("Record Deleted");
    else
        res.send("Record Not Deleted");
}
let studentlogin = async(req, res) =>
{
    let collection = await getconnect();
    let result = await collection.findOne({
        rollNo: req.body.username,
        phone: req.body.password
    });

    if(result)
        res.send("Login Success");
    else
        res.send("Login Failed");
}
let studentdata = async(req, res) =>
{
    let collection = await getconnect();
    let result = await collection.findOne({
        rollNo: req.params.rollno
    });

    if(result)
        res.send(result);
    else
        res.send("No Record Found");
}
app.get("/api/records", showdata);
app.post("/api/records", insertdata);
app.put("/api/records/:id", updatedata);
app.delete("/api/records/:id", deletedata);
app.post("/api/studentlogin", studentlogin);
app.get("/api/studentdata/:rollno", studentdata);
app.listen(5000, () =>
{
    console.log("Server Running");
});
