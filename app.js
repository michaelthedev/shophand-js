import ShopHand from "./src/ShopHand.js";

let shopHand = new ShopHand();

let product1 = shopHand.newProduct();
product1.setName('Product 1')
    .setPrice(100);

// Product 2
shopHand.newProduct()
    .setName('Product 2').setPrice(200);

// Product 3
let product3 = shopHand.newProduct()
    .set('name', 'Product 3')
    .set('price', 300)
    .set('customKey', 'customValue');

console.log(shopHand.getProducts());

let products = shopHand.getProducts();
products.forEach(product => {
    console.log(product.name);
    console.log(product.price);
    console.log(product.customKey ?? '');
});