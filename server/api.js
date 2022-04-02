const collectionp = require('C:\\clear-fashion\\server\\products.json');

require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const fs = require('fs');
const MONGODB_DB_NAME = 'clearfashion';
const MONGODB_COLLECTION = 'products';
const MONGODB_URI = "mongodb+srv://ValentineBaldon:valval@cluster0.smsvy.mongodb.net/Cluster0?retryWrites=true&w=majority";

let client = null;
let database = null;
let collection = null;

const cors = require('cors');
const express = require('express');
const helmet = require('helmet');

const PORT = 8092;

const app = express();

const dbConnection = async () => {
    client = await MongoClient.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    database = client.db(MONGODB_DB_NAME)
    collection = database.collection(MONGODB_COLLECTION)
}



module.exports = app;

app.use(require('body-parser').json());
app.use(cors());
app.use(helmet());

app.options('*', cors());


app.get('/', (request, response) => {
    //client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    //client.connect();
    //collection = client.db(MONGODB_DB_NAME).collection("products");
    //console.log(collectionp)
    response.send({ 'ack': true});
});


app.get('/products/search', async (request, response) => {

   // await connection();

    const { brand = 'all', price = 'all', nombremax = 12, sort = 1 } = request.query;

    if (brand === 'all' && price === 'all') {
        response.send(collection);
    } else if (brand === 'all') {
        response.send(collection);
    } else if (price === 'all') {
        response.send(collection);
    } else {
        response.send(collection);
    }
})

app.get('/products/link', (request, response) => {
    let result = collection.find({ "link": request.params.link });
    response.send(result);
});

/*
async function connection() {
    await db.connect();
}*/


app.listen(PORT);

console.log(`📡 Running on port ${PORT}`);
