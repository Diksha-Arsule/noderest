const {MongoClient, ObjectId} = require('mongodb')
const url = "mongodb://localhost:27017/"
const database = "employeedb"
const client = new MongoClient(url)
const dbConnect=async()=>{
    const result =await client.connect()
    const db = await result.db(database)
    return db.collection("employee")
}
module.exports = dbConnect;
