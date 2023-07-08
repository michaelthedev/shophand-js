class Product
{
    setName(name) {
        this.name = name;
        return this;
    }

    setPrice(price) {
        this.price = price;
        return this;
    }

    set(key, value) {
        this[key] = value;
        return this;
    }
}

module.exports = Product;