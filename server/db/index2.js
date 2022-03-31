require('dotenv').config();
const { MongoClient } = require('mongodb');
const fs = require('fs');
var data = JSON.parse(fs.readFileSync("C:/Users/Valentine Baldon/Documents/Ecole/A4/Web application/TD1/clear-fashion/server/dedicatedbrand.json", 'utf8'));

const MONGODB_URI = "mongodb+srv://ValentineBaldon:valval@cluster0.smsvy.mongodb.net/Cluster0?retryWrites=true&w=majority";
const MONGODB_DB_NAME = 'clearfashion';
const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(async err => {
    
    const db = client.db(MONGODB_DB_NAME);
    
    const products = data;
    console.log(products)
    const collection = db.collection('Products');
    
    const result = await collection.insertMany(products, { 'ordered': false });
    
    console.log(result);
    client.close();
});
