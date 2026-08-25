const {MongoClient} = require("mongodb");

const client = new MongoClient("mongodb://localhost:27017");

async function getconnect()
{
    let con = await client.connect();
    let db = con.db("smsdb");
    let collection = db.collection("records");
    return collection;
}

module.exports = getconnect;