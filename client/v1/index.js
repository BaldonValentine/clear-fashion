// Invoking strict mode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict';

console.log('🚀 This is it.');


console.table(MY_FAVORITE_BRANDS);
console.log(MY_FAVORITE_BRANDS[0]);



/**
 * 🌱
 * Let's go with a very very simple first todo
 * Keep pushing
 * 🌱
 */

// 🎯 TODO: The cheapest t-shirt
// 0. I have 3 favorite brands stored in MY_FAVORITE_BRANDS variable
// 1. Create a new variable and assign it the link of the cheapest t-shirt
// I can find on these e-shops
// 2. Log the variable
const cheapestTshirt = "https://www.loom.fr/products/le-t-shirt";
console.log(cheapestTshirt);





/**
 * 👕
 * Easy 😁?
 * Now we manipulate the variable `marketplace`
 * `marketplace` is a list of products from several brands e-shops
 * The variable is loaded by the file data.js
 * 👕
 */

// 🎯 TODO: Number of products
// 1. Create a variable and assign it the number of products
// 2. Log the variable
let numberProduct = marketplace.length;
console.log(numberProduct);


// 🎯 TODO: Brands name
// 1. Create a variable and assign it the list of brands name only
// 2. Log the variable
// 3. Log how many brands we have

const brandsName = [];
for (let i = 0; i < numberProduct; i++) {
    brandsName.push(marketplace[i].brand);
}
console.log(brandsName.length)
var brandsNameUnique = new Set(brandsName)
console.log(brandsNameUnique.size)


// Second exemple 

let Brands = [];
for (let i = 0; i < numberProduct; i++) {
    if (!Brands.includes(marketplace[i].brand)) {
        Brands.push(marketplace[i].brand)
    }
}
console.log(Brands);
console.log(Brands.length);

// 🎯 TODO: Sort by price
// 1. Create a function to sort the marketplace products by price
// 2. Create a variable and assign it the list of products by price from lowest to highest
// 3. Log the variable

function sortByPrice(items)
{
    return items.sort(
        function (a, b) {
            if (parseFloat(a.price) - parseFloat(b.price) > 0)
            {
                return 1;
            }
            else if (parseFloat(a.price) - parseFloat(b.price) == 0)
            {
                return 0;
            }
            else (parseFloat(a.price) - parseFloat(b.price) < 0)
            {
                return -1;
            }
        });
}

const sorted_products_price = sortByPrice(marketplace);
console.log(sorted_products_price);


// 🎯 TODO: Sort by date
// 1. Create a function to sort the marketplace objects by products date
// 2. Create a variable and assign it the list of products by date from recent to old
// 3. Log the variable

function sort_by_date(items) {
    return items.sort(
        function (b, a) {
            b = new Date(b.date);
            a = new Date(a.date);
            if (b - a > 0) 
            {
                return 1;
            }
            else if (b - a == 0) {
                return 0;
            }
            else (b - a < 0)
            {
                return -1;
            }
        });
    };

const sorted_products_date = sort_by_date(marketplace);
console.log(sorted_products_date);

// 🎯 TODO: Filter a specific price range
// 1. Filter the list of products between 50€ and 100€
// 2. Log the list

let filter = [];
for (let i = 0; i < numberProduct; i++)
{
    if (marketplace[i].price >= 50 && marketplace[i].price <= 100)
    {
        filter.push(marketplace[i]);
    }
}
console.log(filter)

// 🎯 TODO: Average Basket
// 1. Determine the average basket of the marketplace
// FAire la moyenne de tout les produits du marketplace
// 2. Log the average

let average = 0;
for (let i = 0; i < numberProduct; i++) {
    average = average + marketplace[i].price;
}
average = average / numberProduct;
console.log(average)

/**
 * 🏎
 * We are almost done with the `marketplace` variable
 * Keep pushing
 * 🏎
 */

// 🎯 TODO: Products by brands
// 1. Create an object called `brands` to manipulate products by brand name
// The key is the brand name
// The value is the array of products
//
// Example:
// 2. Log the variable
// 3. Log the number of products by brands

let brand1 = [];
for (let i = 0; i < numberProduct; i++)
{
    if (marketplace[i].brand == "adresse")
    {
        brand1.push(marketplace[i])
    }
}

let brand3 = [];
for (let i = 0; i < numberProduct; i++) {
    if (marketplace[i].brand == "loom") {
        brand3.push(marketplace[i])
    }
}

let brand2 = [];
for (let i = 0; i < numberProduct; i++) {
    if (marketplace[i].brand == "aatise") {
        brand2.push(marketplace[i])
    }
}

let brand4 = [];
for (let i = 0; i < numberProduct; i++) {
    if (marketplace[i].brand == "1083") {
        brand4.push(marketplace[i])
    }
}

let brand5 = [];
for (let i = 0; i < numberProduct; i++) {
    if (marketplace[i].brand == "dedicated") {
        brand5.push(marketplace[i])
    }
}

const brands = {
   'adresse': brand1,
   'aatise': brand2,
   'loom': brand3,
   '1083': brand4,
   'dedicated': brand5
};
console.log(brands)
console.log(brands["adresse"].length)
console.log(brands["aatise"].length)
console.log(brands["loom"].length)
console.log(brands["1083"].length)
console.log(brands["dedicated"].length)




// 🎯 TODO: Sort by price for each brand
// 1. For each brand, sort the products by price, from highest to lowest
// 2. Log the sort

let sorted_adresse = sortByPrice(brands["adresse"]);
console.log(sorted_adresse);

let sorted_aatise = sortByPrice(brands["aatise"]);
console.log(sorted_aatise);

let sorted_loom = sortByPrice(brands["loom"]);
console.log(sorted_loom);

let sorted_1083 = sortByPrice(brands["1083"]);
console.log(sorted_1083);

let sorted_dedicated = sortByPrice(brands["dedicated"]);
console.log(sorted_dedicated);

// 🎯 TODO: Sort by date for each brand
// 1. For each brand, sort the products by date, from old to recent
// 2. Log the sort

const sorteddate_adresse = sort_by_date(brands["adresse"]);
console.log(sorteddate_adresse);

const sorteddate_aatise = sort_by_date(brands["aatise"]);
console.log(sorteddate_aatise);

const sorteddate_loom = sort_by_date(brands["loom"]);
console.log(sorteddate_loom);

const sorteddate_1083 = sort_by_date(brands["1083"]);
console.log(sorteddate_1083);

const sorteddate_dedicated = sort_by_date(brands["dedicated"]);
console.log(sorteddate_dedicated);



/**
 * 💶
 * Let's talk about money now
 * Do some Maths
 * 💶
 */

// 🎯 TODO: Compute the p90 price value
// 1. Compute the p90 price value of each brand
// The p90 value (90th percentile) is the lower value expected to be exceeded in 90% of the products

let adresse = sortByPrice(brands["adresse"]);
let aatise = sortByPrice(brands["aatise"]);
let loom = sortByPrice(brands["loom"]);
let m1083 = sortByPrice(brands["1083"]);
let dedicated = sortByPrice(brands["dedicated"]);
let stocka = 0;
let stockaa = 0;
let stockl = 0;
let stockm = 0;
let stockd = 0;

for (let i = 0; i < adresse.length; i++)
{
    if (i == parseInt(adresse.length * 0.90))
    {
        stocka = adresse[i];
    }
}
for (let i = 0; i < aatise.length; i++) {
    if (i == parseInt(aatise.length * 0.90)) {
        stockaa = aatise[i];
    }
} for (let i = 0; i < loom.length; i++) {
    if (i == parseInt(loom.length * 0.90)) {
        stockl = loom[i];
    }
} for (let i = 0; i < m1083.length; i++) {
    if (i == parseInt(m1083.length * 0.90)) {
        stockm = m1083[i];
    }
} for (let i = 0; i < dedicated.length; i++) {
    if (i == parseInt(dedicated.length * 0.90)) {
        stockd = dedicated[i];
    }
}

/**
 * 🧥
 * Cool for your effort.
 * It's almost done
 * Now we manipulate the variable `COTELE_PARIS`
 * `COTELE_PARIS` is a list of products from https://coteleparis.com/collections/tous-les-produits-cotele
 * 🧥
 */

const COTELE_PARIS = [
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-baseball-cap-gris',
    price: 45,
    name: 'BASEBALL CAP - TAUPE',
    uuid: 'af07d5a4-778d-56ad-b3f5-7001bf7f2b7d',
    released: '2021-01-11'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-navy',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - NAVY',
    uuid: 'd62e3055-1eb2-5c09-b865-9d0438bcf075',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-veste-fuchsia',
    price: 110,
    name: 'VESTE - FUCHSIA',
    uuid: 'da3858a2-95e3-53da-b92c-7f3d535a753d',
    released: '2020-11-17'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-baseball-cap-camel',
    price: 45,
    name: 'BASEBALL CAP - CAMEL',
    uuid: 'b56c6d88-749a-5b4c-b571-e5b5c6483131',
    released: '2020-10-19'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-beige',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - BEIGE',
    uuid: 'f64727eb-215e-5229-b3f9-063b5354700d',
    released: '2021-01-11'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-veste-rouge-vermeil',
    price: 110,
    name: 'VESTE - ROUGE VERMEIL',
    uuid: '4370637a-9e34-5d0f-9631-04d54a838a6e',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-bordeaux',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - BORDEAUX',
    uuid: '93d80d82-3fc3-55dd-a7ef-09a32053e36c',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/le-bob-dylan-gris',
    price: 45,
    name: 'BOB DYLAN - TAUPE',
    uuid: 'f48810f1-a822-5ee3-b41a-be15e9a97e3f',
    released: '2020-12-21'
  }
]

// 🎯 TODO: New released products
// // 1. Log if we have new products only (true or false)
// // A new product is a product `released` less than 2 weeks.
function newProduct(items)
{
    for (let i = 0; i < items.length; i++) {
        if (items[i].released >= "2022-01-04") {
            return true;
        }
    }
    return false;
}
let test = newProduct(COTELE_PARIS);
console.log(test)

// 🎯 TODO: Reasonable price
// // 1. Log if coteleparis is a reasonable price shop (true or false)
// // A reasonable price if all the products are less than 100€
function reasonablePrice(items) {
    for (let i = 0; i < items.length; i++) {
        if (items[i].price >= 100) {
            return true;
        }
    }
    return false;
}
let test2 = reasonablePrice(COTELE_PARIS);
console.log(test2);

// 🎯 TODO: Find a specific product
// 1. Find the product with the uuid `b56c6d88-749a-5b4c-b571-e5b5c6483131`
// 2. Log the product

let uuidElement = "b56c6d88-749a-5b4c-b571-e5b5c6483131";
let stock23 = COTELE_PARIS.find(element => element.uuid == uuidElement);
console.log(stock23);


// 🎯 TODO: Delete a specific product
// 1. Delete the product with the uuid `b56c6d88-749a-5b4c-b571-e5b5c6483131`
// 2. Log the new list of product
uuidElement = "b56c6d88-749a-5b4c-b571-e5b5c6483131";
let pos = COTELE_PARIS.indexOf(uuidElement);
let removedItem = COTELE_PARIS.splice(pos, 1);
console.log(COTELE_PARIS);

// 🎯 TODO: Save the favorite product
let blueJacket = {
  'link': 'https://coteleparis.com/collections/tous-les-produits-cotele/products/la-veste-bleu-roi',
  'price': 110,
  'uuid': 'b4b05398-fee0-4b31-90fe-a794d2ccfaaa'
};

// we make a copy of blueJacket to jacket
// and set a new property `favorite` to true
let jacket = blueJacket;

jacket.favorite = true;

// 1. Log `blueJacket` and `jacket` variables
// 2. What do you notice?

console.log(blueJacket);
console.log(jacket);

//Console :
//{link: 'https://coteleparis.com/collections/tous-les-produits-cotele/products/la-veste-bleu-roi', price: 110, uuid: 'b4b05398-fee0-4b31-90fe-a794d2ccfaaa'}
//{link: 'https://coteleparis.com/collections/tous-les-produits-cotele/products/la-veste-bleu-roi', price: 110, uuid: 'b4b05398-fee0-4b31-90fe-a794d2ccfaaa', favorite: true }
//It doesn't change the properties of bluejacket

jacket = {
  'link': 'https://coteleparis.com/collections/tous-les-produits-cotele/products/la-veste-bleu-roi',
  'price': 110,
  'uuid': 'b4b05398-fee0-4b31-90fe-a794d2ccfaaa'
};

// 3. Update `jacket` property with `favorite` to true WITHOUT changing blueJacket properties
// We can do a real copie
let jacket2 = [].concat(blueJacket);
console.log(jacket2);
jacket2[0].favorite = true;
console.log(jacket2);





/**
 * 🎬
 * The End
 * 🎬
 */

// 🎯 TODO: Save in localStorage
// 1. Save MY_FAVORITE_BRANDS in the localStorage
// 2. log the localStorage

console.log(MY_FAVORITE_BRANDS);