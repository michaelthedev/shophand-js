class ShopHand
{
    products = [];

    newProduct()
    {
        const product = new Product();
        this.products.push(product);
        return product;
    }

    getProducts() {
        return this.products;
    }
}

module.exports = ShopHand;