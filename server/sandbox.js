/* eslint-disable no-console, no-process-exit */
const dedicatedbrand = require('./sources/dedicatedbrand');
const monlimart = require('./sources/monlimart');
const adresseparis = require('./sources/adresseparis');
const fs = require('fs')

/*
async function sandbox(eshop = 'https://www.dedicatedbrand.com/en/men/all-men') {
  try {
      console.log(`🕵️‍♀️  browsing ${eshop} source`);
      let memory = [];
      for (let i = 1; i <= 12; i++)
       {
          const products = await dedicatedbrand.scrape(eshop + "?p=" + i);
          memory.push(products);
          console.log(products);
       }
    let donnees = JSON.stringify(memory.flat())
    fs.writeFileSync('dedicatedbrand.json', donnees)

    console.log('done');
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}*/
/*
async function sandbox(eshop = 'https://www.montlimart.com/toute-la-collection.html?limit=all') {
    try {
        console.log(`🕵️‍♀️  browsing ${eshop} source`);
        let memory = [];
        const products = await monlimart.scrape(eshop);
        console.log(products);
        memory.push(products);
        console.log(products);
        

        let donnees = JSON.stringify(memory.flat())
        fs.writeFileSync('montlimart.json', donnees)
        console.log('done');
        process.exit(0);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}*/

async function sandbox(eshop = 'https://adresse.paris/630-toute-la-collection') {
    try {
        memory = [];
        console.log(`🕵️‍♀️  browsing ${eshop} source`);
        let results = await adresseparis.scrape(eshop);
        console.log(results);
        results.forEach(product => memory.push(product));

        let donnees = JSON.stringify(memory.flat())
        fs.writeFileSync('adresseparis.json', donnees)
        console.log('done');
        process.exit(0);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

const [,, eshop] = process.argv;

sandbox(eshop);
