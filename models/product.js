const products = [];

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  // Instance method
  save() {
    products.push(this);
    console.log(products)
  }

  // Class Method
  static fetchAll() {
    return products;
  }
}