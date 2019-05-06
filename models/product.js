const fs = require("fs");
const path = require("path");
const rootDir = require("../util/path");

const products = [];

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  // Instance method
  save() {
    const filePath = path.join(rootDir, "data", "products.json");
    fs.readFile(filePath, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(filePath, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  // Class Method
  static fetchAll(callback) {
    const filePath = path.join(rootDir, "data", "products.json");
    fs.readFile(filePath, (err, fileContent) => {
      if (err) {
        callback([]);
      }
      callback(JSON.parse(fileContent));
    });
  }
};
