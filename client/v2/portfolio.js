// Invoking strict mode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict';

// current products on the page
let currentProducts = [];
let currentPagination = {};

// inititiate selectors
const selectShow = document.querySelector('#show-select');
const selectPage = document.querySelector('#page-select');
const selectBrand = document.querySelector('#brand-select')
const selectSort = document.querySelector('#sort-select')
const sectionProducts = document.querySelector('#products');
const spanNbProducts = document.querySelector('#nbProducts');

/**
 * Set global value
 * @param {Array} result - products to display
 * @param {Object} meta - pagination meta info
 */
const setCurrentProducts = ({ result, meta }) => {
    currentProducts = result;
    currentPagination = meta;
};

/**
 * Fetch products from api
 * @param  {Number}  [page=1] - current page to fetch
 * @param  {Number}  [size=12] - size of the page
 * @return {Object}
 */
const fetchProducts = async (page = 1, size = 12) => {
    try {
        const response = await fetch(
            `https://clear-fashion-api.vercel.app?page=${page}&size=${size}`
        );
        const body = await response.json();

        if (body.success !== true) {
            console.error(body);
            return { currentProducts, currentPagination };
        }

        return body.data;
    } catch (error) {
        console.error(error);
        return { currentProducts, currentPagination };
    }
};

/**
 * Render list of products
 * @param  {Array} products
 */


const renderProducts = products => {
    const fragment = document.createDocumentFragment();
    const div = document.createElement('div');
    const template = products
        .map(product => {
            return `
      <div class="product" id=${product.uuid}>
        <span>${product.brand}</span>
        <a href="${product.link}">${product.name}</a>
        <span>${product.price}</span>
      </div>
    `;
        })
        .join('');

    div.innerHTML = template;
    fragment.appendChild(div);
    sectionProducts.innerHTML = '<h2>Products</h2>';
    sectionProducts.appendChild(fragment);
};

/**
 * Render page selector
 * @param  {Object} pagination
 */
const renderPagination = pagination => {
    const { currentPage, pageCount } = pagination;
    const options = Array.from(
        { 'length': pageCount },
        (value, index) => `<option value="${index + 1}">${index + 1}</option>`
    ).join('');

    selectPage.innerHTML = options;
    selectPage.selectedIndex = currentPage - 1;
};

// Render Brand selector

let renderBrand = products => {

    let brandName = products.map(product => product.brand)
    let brandUnique = [];
    brandName.forEach(item => {
        if (brandUnique.includes(item)) { }
        else { brandUnique.push(item) }
    })

    let options = ['<option value="...">...</option>']
    options.push(Array.from(
        { 'length': brandUnique.length },
        (value, index) => `<option value="${brandUnique[index]}">${brandUnique[index]}</option>`
    ).join(''));
    options.push('<option value="all">all</option>')

    selectBrand.innerHTML = options;
};

/**
 * Render page selector
 * @param  {Object} pagination
 */
const renderIndicators = pagination => {
    const { count } = pagination;

    spanNbProducts.innerHTML = count;
};

const render = (products, pagination) => {
    renderProducts(products);
    renderPagination(pagination);
    renderIndicators(pagination);
    renderBrand(products);
};

function sortByPrice(items) {
    return items.result.sort(
        function (a, b) {
            if (parseFloat(a.price) - parseFloat(b.price) > 0) {
                return 1;
            }
            else if (parseFloat(a.price) - parseFloat(b.price) == 0) {
                return 0;
            }
            else (parseFloat(a.price) - parseFloat(b.price) < 0)
            {
                return -1;
            }
        });
}
function sortByPriceDesc(items) {
    return items.result.sort(
        function (a, b) {
            if (parseFloat(a.price) - parseFloat(b.price) > 0) {
                return -1;
            }
            else if (parseFloat(a.price) - parseFloat(b.price) == 0) {
                return 0;
            }
            else (parseFloat(a.price) - parseFloat(b.price) < 0)
            {
                return 1;
            }
        });
}
function sortByDate(items) {
    return items.result.sort(
    function (a, b) 
    {
        return new Date(b.released) - new Date(a.released);
    });
};
function sortByDateDesc(items) {
    return items.result.sort(
    function (a, b) {
        return new Date(a.released) - new Date(b.released);
    });
};
/**
 * Declaration of all Listeners
 */

/**
 * Select the number of products to display
 * @type {[type]}
 */
let pagebase = 1;
let sortpa = false;
let sortpd = false;
let sortda = false;
let sortdd = false;
selectShow.addEventListener('change', event => {
    fetchProducts(pagebase, parseInt(event.target.value))
        .then(setCurrentProducts)
        .then(() => render(currentProducts, currentPagination))
        .then(selectSort.value = "none");
});

document.addEventListener('DOMContentLoaded', () =>
    fetchProducts()
        .then(setCurrentProducts)
        .then(() => render(currentProducts, currentPagination))
);

selectPage.addEventListener('change', async (event) => {
    const products = await fetchProducts(parseInt(event.target.value), parseInt(selectShow.value));
    setCurrentProducts(products);
    render(currentProducts, currentPagination);
    selectSort.value = "none";
});

selectBrand.addEventListener('change', async (event) => {
    let products = await fetchProducts(currentPagination.currentPage, selectShow.value);

    if (event.target.value == "all") {
        setCurrentProducts(products);
        render(currentProducts, currentPagination);
        selectSort.value = "none";
    }
    else {
        products.result = products.result.filter(item => item.brand == event.target.value);
        setCurrentProducts(products);
        render(currentProducts, currentPagination);
        selectSort.value = "none";
    }
});

selectSort.addEventListener('change', async (event) => {
    let products = await fetchProducts(currentPagination.currentPage, selectShow.value);
    switch (event.target.value) {
        case 'price-asc':
            currentProducts = sortByPrice(products);
            break;
        case 'price-desc':
            currentProducts = sortByPriceDesc(products);
            break;
        case 'date-asc':
            currentProducts = sortByDate(products);
            break;
        case 'date-desc':
            currentProducts = sortByDateDesc(products);
            break;
        case 'None':
            break;
    }
    render(currentProducts, currentPagination);
});