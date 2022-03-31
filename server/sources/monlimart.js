const fetch = require('node-fetch');
const cheerio = require('cheerio');

/**
 * Parse webpage e-shop
 * @param  {String} data - html response
 * @return {Array} products
 **/
const parse = data => {
    const $ = cheerio.load(data);

    return $('.category-products .item')
        .map((i, element) => {
            const brand = 'Monlimart';
            const name = $(element)
                .find('.product-name')
                .text()
                .trim()
                .replace(/\s/g, ' ');

            const link = $(element)
                .find('.product-name a')
                .attr('href')

            const price = parseInt(
                $(element)
                    .find('.price')
                    .text());

            const image = $(element)
                .find('.product-image img')
                .attr('src');


            return {name, brand, price, link, image };
        })
        .get();
};

/**
 * Scrape all the products for a given url page
 * @param  {[type]} url
 * @return {Array|null}
 */
module.exports.scrape = async url => {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const body = await response.text();

            return parse(body);
        }

        console.error(response);

        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
};
