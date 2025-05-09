const express = require('express');
const dbConnect = require('./mongodb');
const app = express();
app.use(express.json());

// GET API to show employees
app.get('/showemployee', async (req, resp) => {
    let collection = await dbConnect();
    let result = await collection.find().toArray();
    resp.send(result);
});

// POST API 
app.post('/add', async (req, resp) => {
    let collection = await dbConnect();
    let result = await collection.insertOne(req.body);
    resp.send("Data added successfully");
});

// update api
app.put('/update/:id', async (req, resp) => {
    let collection = await dbConnect();
    const result = await collection.updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: req.body }
    );
    resp.send("Data updated successfully");
});

// Start server
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});

