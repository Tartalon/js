'use strict';
// ES5
// =============== Class =====================

function Product(brand, price, discount) {
  this.brand = brand;
  this.price = price;
  this.discount = discount;
  // this.getPriceWhithDiscount = function () {
  //   return (this.price * (100 - this.discount)) / 100;
  // };
}

const apple = new Product('apple', 32000, 15);
const samsung = new Product('samsung', 24000, 10);
// console.log(apple.getPriceWhithDiscount(), samsung.getPriceWhithDiscount());

// ============== Prototype ==================

Product.prototype.getPriceWhithDiscount = function () {
  return (this.price * (100 - this.discount)) / 100;
};

// console.log(apple.price);
Product.prototype.setPrice = function (newPrice) {
  this.price = newPrice;
};

apple.setPrice(28000);
// console.log(apple.price);

// console.log(samsung.getPriceWhithDiscount());

// =============== Inheritance =================

// Object.create
const protoForObj = {
  sayHello() {
    return 'Hello world';
  },
};

const obj = Object.create(protoForObj, {
  firstName: {
    value: 'Vovka',
  },
});

function User(firsName, lastName) {
  this.firsName = firsName;
  this.lastName = lastName;
}

User.prototype.getFullName = function () {
  return `${this.firsName} ${this.lastName}`;
};

User.prototype.sayHello = function () {
  return `Hello ${this.firsName} ${this.lastName}`;
};

const user = new User('Vovka', 'Morkovka');

function Customer(firstName, lastName, membership) {
  User.call(this, firstName, lastName);
  // User.apply(this, arguments);
  this.membership = membership;
}

Customer.prototype = Object.create(User.prototype);
Customer.prototype.cunstructor = Customer;

Customer.prototype.getMembership = function () {
  return this.membership.toUpperCase();
};

const customer = new Customer('Ivan', 'Ivanov', 'basic');
