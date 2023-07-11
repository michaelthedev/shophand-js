class ShopHand
{
    products = [];
    cart = [];
    paymentMethods = [];

    newProduct()
    {
        const product = new Product();
        this.products.push(product);
        return product;
    }

    getProducts() {
        return this.products;
    }

    initStore(selector)
    {
        this.storeEl = document.querySelector(selector);

    }

    addProductToCart(product)
    {
        this.cart.push(product);
    }

    getCart()
    {
        return new Cart(this.cart);
    }
}

class Shop extends ShopHand
{
    constructor() {
        super();
    }

    newProduct() {
        return super.newProduct();
    }

    getProducts() {
        return this.products;
    }

    getProduct(id) {
        return this.products.find(item => item.id === id);
    }

    addToCart(id) {
        let product = this.getProduct(id);
        super.addProductToCart(product);
    }

    getCart()
    {
        return super.getCart();
    }

    getPaymentMethods()
    {
        return this.paymentMethods;
    }

    newPaymentMethod()
    {
        const paymentMethod = new PaymentMethod();
        this.paymentMethods.push(paymentMethod);
        return paymentMethod;
    }

    makePayment(paymentMethod) {
        if (paymentMethod === 'paypal') {
            // Make a PayPal payment
        } else if (paymentMethod === 'credit card') {
            // Make a credit card payment
        } else {
            // Unsupported payment method
        }
    }
}
class Product
{
    constructor() {
        // generate random id
        this.id = Math.floor(Math.random() * 1000000);
    }

    setName(name) {
        this.name = name;
        return this;
    }

    setPrice(price) {
        this.price = price;
        return this;
    }

    setImage(url) {
        this.image = url;
        return this;
    }

    set(key, value) {
        this[key] = value;
        return this;
    }

    formatPrice()
    {
        return '$' + this.price;
    }
}

class PaymentMethod
{
    setName(name)
    {
        this.name = name;
        return this;
    }

    setCallback(callback)
    {
        this.callback = callback;
        return this;
    }

    setHandlers(handlers)
    {
        this.handlers = handlers;
        return this;
    }
}

class Cart
{
    items = [];
    subtotal = 0;
    discount = 0;
    total = 0;

    constructor(cart) {
        cart.forEach(item => {
            this.addItem(item);
        })
    }

    addItem(product)
    {
        this.items.push(product);
        this.subtotal += product.price;
        this.total = this.subtotal;
    }

    applyDiscount(discount, isAmount = true)
    {
        let discountAmount = isAmount ? discount : (this.subtotal * (discount/100));
        this.discount = discountAmount;
        this.total = this.subtotal - discountAmount;
        return this;
    }

    getSubTotal()
    {
        return this.subtotal;
    }

    getTotal()
    {
        return this.total;
    }

    getDiscount()
    {
        return this.discount;
    }
}