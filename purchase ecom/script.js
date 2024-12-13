// // Load existing products from JSON file
// let products = [];

// function loadProducts() {
//     fetch('products.json')
//     .then(response => response.json())
//     .then(data => {
//         products = data;
//         displayProducts();
//     });
// }

// function displayProducts() {
//     const productsDiv = document.getElementById('products');
//     productsDiv.innerHTML = '';
//     products.forEach(product => {
//         const productElement = document.createElement('div');
//         productElement.classList.add('product');
//         productElement.innerHTML = `
//             <h3>${product.name}</h3>
//             <p>Price: ${product.price}</p>
//         `;
//         productsDiv.appendChild(productElement);
//     });
// }

// function addOrUpdateProduct() {
//     const productName = document.getElementById('product-name').value;
//     const productPrice = parseFloat(document.getElementById('product-price').value);

//     const existingProductIndex = products.findIndex(product => product.name === productName);

//     if (existingProductIndex !== -1) {
//         // Update existing product
//         products[existingProductIndex].price = productPrice;
//     } else {
//         // Add new product
//         products.push({ name: productName, price: productPrice });
//     }

//     // Save products to JSON file
//     saveProducts();

//     // Update displayed products
//     displayProducts();
// }

// function saveProducts() {
//     // Save products to JSON file
//     fetch('products.json', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(products)
//     });
// }

// // Load products when the page loads
// loadProducts();


// Load existing products from JSON file
let products = [];

function loadProducts() {
    fetch('products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        if (window.location.href.includes("purchaser.html")) {
            displayProducts();
        }
    });
}

function displayProducts() {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: ${product.price}</p>
        `;
        productsDiv.appendChild(productElement);
    });
}

function addOrUpdateProduct() {
    const productName = document.getElementById('product-name').value;
    const productPrice = parseFloat(document.getElementById('product-price').value);

    const existingProductIndex = products.findIndex(product => product.name === productName);

    if (existingProductIndex !== -1) {
        // Update existing product
        products[existingProductIndex].price = productPrice;
    } else {
        // Add new product
        products.push({ name: productName, price: productPrice });
    }

    // Save products to JSON file
    saveProducts();

    // Update displayed products
    if (window.location.href.includes("purchaser.html")) {
        displayProducts();
    }
}

function saveProducts() {
    // Save products to JSON file
    fetch('products.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(products)
    });
}

// Load products when the page loads
loadProducts();
